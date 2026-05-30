import os

from dotenv import load_dotenv

from groq import Groq


load_dotenv()


client = Groq(

    api_key=os.getenv(
        "GROQ_API_KEY"
    )
)


def generate_mentor_answer(

    question,

    role
):

    prompt = f"""
You are a senior AI mentor.

Explain interview answers in easy Hinglish.

ROLE:
{role}

QUESTION:
{question}

RULES:

- answer should be SHORT
- use bullet points
- easy Hinglish
- beginner friendly
- practical explanation
- explain like two developers talking
- avoid textbook language
- avoid huge paragraphs
- no markdown
- no code snippets
- educational but conversational

IMPORTANT:
Return ONLY answer text.
"""

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

            max_tokens=250,
        )
    )

    content = (

        response
        .choices[0]
        .message
        .content
        .strip()
    )

    return content