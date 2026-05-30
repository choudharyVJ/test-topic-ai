import os

import json

from dotenv import load_dotenv

from groq import Groq


load_dotenv()


client = Groq(

    api_key=os.getenv(
        "GROQ_API_KEY"
    )
)


def evaluate_answer(

    role,

    question,

    answer
):

    # =========================
    # PROMPT
    # =========================

    prompt = f"""
You are a strict senior technical interviewer.

Your job is to realistically evaluate technical interview answers.

You are NOT a motivational chatbot.

You must evaluate:

- technical correctness
- architecture understanding
- production thinking
- communication clarity
- confidence
- depth of explanation

Role:
{role}

Interview Question:
{question}

Candidate Answer:
{answer}

SCORING RULES:

90-100:
Expert-level answer with strong production depth.

70-89:
Strong answer with minor missing concepts.

50-69:
Decent understanding but lacking depth or clarity.

30-49:
Partial understanding with major missing concepts.

0-29:
Weak or mostly incorrect answer.

IMPORTANT EVALUATION RULES:

- Strengths, weaknesses, and improvements MUST be DIFFERENT
- NEVER repeat same sentence across sections
- NEVER copy strengths into weaknesses
- Weaknesses should mention ONLY missing concepts
- Improvements should contain ONLY actionable advice
- Strengths should contain ONLY correctly explained concepts

COMMUNICATION EVALUATION:

Evaluate:
- clarity
- structure
- confidence
- technical terminology usage

IMPORTANT:

Strengths:
- mention ONLY what candidate explained correctly

Weaknesses:
- mention ONLY what candidate missed or explained poorly

Improvements:
- actionable advice ONLY
- explain what candidate should improve next

FINAL VERDICT RULES:

- maximum 2 short sentences
- concise Hinglish allowed
- witty recruiter tone allowed
- light sarcasm allowed ONLY if answer is weak
- do NOT overdo comedy
- do NOT generate long paragraphs
- do NOT repeat concepts
- sound like a smart senior recruiter

IMPORTANT:
Never repeat the same technical concept multiple times.

Return ONLY valid JSON.

RESPONSE FORMAT:

{{
  "score": 0,

  "strengths": [],

  "weaknesses": [],

  "improvements": [],

  "final_verdict": ""
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

            temperature=0.2,

            max_tokens=500,
        )
    )

    # =========================
    # RAW RESPONSE
    # =========================

    content = (

        response
        .choices[0]
        .message
        .content
    )

    print(
        "RAW EVALUATION RESPONSE:",
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
        "CLEANED EVALUATION JSON:",
        content
    )

    # =========================
    # JSON PARSING
    # =========================

    try:
        print(content)
        parsed = json.loads(
            content
        )

        return {

            "score":
                parsed.get(
                    "score",
                    0
                ),

            "strengths":
                parsed.get(
                    "strengths",
                    []
                ),

            "weaknesses":
                parsed.get(
                    "weaknesses",
                    []
                ),

            "improvements":
                parsed.get(
                    "improvements",
                    []
                ),

            "final_verdict":
                parsed.get(
                    "final_verdict",
                    ""
                )
        }

    except Exception as error:

        print(
            "EVALUATION JSON ERROR:",
            error
        )

        print(
            "FAILED CONTENT:",
            content
        )

        return {

            "score": 45,

            "strengths": [
                "Basic technical understanding was visible"
            ],

            "weaknesses": [
                "Answer lacked structured explanation"
            ],

            "improvements": [
                "Explain concepts step-by-step with clearer technical depth"
            ],

            "final_verdict":
            "Concept ka basic idea tha 😄 but structure aur technical depth dono improve karne padenge."
        }