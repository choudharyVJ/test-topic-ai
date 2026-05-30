import os

import json

import random

from dotenv import load_dotenv

from groq import Groq


load_dotenv()


client = Groq(
    api_key=os.getenv(
        "GROQ_API_KEY"
    )
)

fallback_questions = [

    "Async await internally kaise kaam karta hai 😄",

    "RAG pipeline me hallucination kaise reduce karoge?",

    "LangGraph aur LangChain me actual difference kya hai?",

    "Vector DB indexing strategy kaise optimize karoge?",

    "Production AI agents me memory handling kaise karoge?"
]

def generate_interview_question(

    role,

    difficulty,

    stack,

    previous_question="",

    previous_answer="",

    memory=None
):

    # =========================
    # SAFE MEMORY FALLBACK
    # =========================

    if memory is None:

       memory = {

    "history": [],

    "asked_questions": [],

    "weak_topics": [],

    "strong_topics": [],

    "scores": [],
}

    # =========================
    # PROMPT
    # =========================

    prompt = f"""
    You are a smart senior Indian technical recruiter.

    Your job:
    - ask ONE realistic interview question
    - generate ONE short recruiter style question
    - adapt based on previous candidate mistakes
    - keep interview conversational and realistic

    ROLE:
    {role}

    DIFFICULTY:
    {difficulty}

    TECH STACK:
    {stack}

    PREVIOUS QUESTION:
    {previous_question}

    PREVIOUS ANSWER:
    {previous_answer}

    INTERVIEW MEMORY:
    {json.dumps(memory)}
    
    Previously Asked Questions:
    {memory.get("asked_questions", [])}
    
    Weak Topics:
    {memory.get("weak_topics", [])}

    Strong Topics:
    {memory.get("strong_topics", [])}

    Previous Scores:
    {memory.get("scores", [])}

    BEHAVIOR RULES:

    - Hinglish allowed naturally
    - Light sarcasm allowed
    - Roast technical mistakes lightly ONLY
    - Never insult intelligence or identity
    - Keep responses concise
    - Sound like a real senior developer
    - Avoid excessive comedy
    - Avoid repeating concepts
    - Avoid repeating same words

    QUESTION RULES:

    - Ask ONLY ONE question
    - Ask practical modern interview questions
    - Adapt to previous mistakes
    - Ask deeper follow-up questions if needed
    - Avoid repeating previous question
    - No markdown
    - No code snippets
    - NEVER ask previously asked questions
    - Avoid repeating same concepts repeatedly
    - If candidate is weak in a topic, revisit it from a different angle
    - Use interview memory carefully
    
    IMPORTANT NOTE:
    
    If a question was already asked,
    generate a DIFFERENT follow-up question.
    
    IMPORTANT RULES:

    - If candidate repeatedly struggles in a topic, revisit it differently
    - If candidate performs well, gradually increase difficulty
    - If scores improve, recruiter can become slightly more impressed
    - If scores stay low repeatedly, recruiter should apply more pressure naturally
    - Follow-up questions should feel connected to previous answers
    
    
    Adaptive Recruiter Personality:

    - Weak candidate:
      mentor-like but slightly sarcastic

    - Improving candidate:
      more encouraging

    - Strong candidate:
      more challenging and technical

    - Repeated weak answers:
      recruiter becomes more pressuring naturally
        
    JSON RULES:

    - Return ONLY raw valid JSON
    - Do NOT wrap in markdown
    - Do NOT write explanations
    - Do NOT add text outside JSON

    RESPONSE FORMAT:

    {{
    "question": ""
    }}
    """

    # =========================
    # GROQ API CALL
    # =========================

    response = (
        client.chat.completions.create(

            model="llama-3.1-8b-instant",

            messages=[
                {
                    "role": "user",

                    "content": prompt,
                }
            ],

            temperature=0.5,

            max_tokens=400,
        )
    )

    # =========================
    # RESPONSE CLEANING
    # =========================

    content = (
        response
        .choices[0]
        .message
        .content
        .strip()
    )

    # =========================
    # JSON PARSING SAFETY
    # =========================

    # =========================
    # RESPONSE CONTENT
    # =========================

    content = (
        response
        .choices[0]
        .message
        .content
    )

    print(
        "RAW RESPONSE:",
        content
    )

    # =========================
    # CLEAN RESPONSE
    # =========================

    content = (
        content
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    # =========================
    # EXTRACT JSON ONLY
    # =========================

    start = content.find("{")

    end = content.rfind("}") + 1

    if start != -1 and end != -1:
        content = content[start:end]

    print(
        "CLEANED JSON:",
        content
    )

    # =========================
    # JSON PARSING
    # =========================

    try:
        parsed = json.loads(
            content
        )

        return {
            "question": parsed.get(
                "question",
                ""
            )
        }

    except Exception as error:
        print(
            "JSON Parsing Error:",
            error
        )

        print(
            "FAILED CONTENT:",
            content
        )

        return {
            "question": random.choice(
                fallback_questions
            )
        }
