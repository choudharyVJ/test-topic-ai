import os

import json

from dotenv import load_dotenv # pyright: ignore[reportMissingImports]

from groq import Groq # pyright: ignore[reportMissingImports]


# Load environment variables

load_dotenv()


client = Groq(

    api_key=os.getenv(
        'GROQ_API_KEY'
    )
)

def generate_roadmap(

    role,

    level
):

    prompt = f"""
You are an elite AI career architect.

Generate a modern engineering roadmap.

Target Role:
{role}

Experience Level:
{level}

Return ONLY valid JSON.

Format:

{{
  "title": "",

  "steps": [

    {{
      "phase": "",

      "description": "",

      "skills": []
    }}
  ]
}}

Rules:

- modern technologies only
- realistic learning progression
- concise but valuable
- focus on industry relevance
- include AI technologies if relevant
- no markdown
- valid JSON only
"""

    response = (

        client.chat.completions.create(

            model='llama-3.1-8b-instant',

            messages=[
                {
                    'role': 'user',

                    'content': prompt,
                }
            ],

            temperature=0.4,

            max_tokens=700,
        )
    )

    content = (

        response
        .choices[0]
        .message
        .content
    )

    return json.loads(content)