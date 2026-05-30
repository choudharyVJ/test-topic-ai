from fastapi import APIRouter

from app.services.interview_generator import (
    generate_interview_question
)

router = APIRouter()


@router.post(
    "/generate-interview-question"
)
async def generate_question(
    data: dict
):

    try:

        # =========================
        # BASIC INTERVIEW DATA
        # =========================

        role = data.get(
            "role",
            ""
        )

        difficulty = data.get(
            "difficulty",
            ""
        )

        stack = data.get(
            "stack",
            ""
        )

        # =========================
        # PREVIOUS CONTEXT
        # =========================

        previous_question = data.get(
            "previous_question",
            ""
        )

        previous_answer = data.get(
            "previous_answer",
            ""
        )

        # =========================
        # MEMORY SYSTEM
        # =========================

        memory = data.get(
            "memory",
            {
                "history": []
            }
        )

        # =========================
        # GENERATE NEXT QUESTION
        # =========================

        question = generate_interview_question(

            role,

            difficulty,

            stack,

            previous_question,

            previous_answer,

            memory
        )

        return question

    except Exception as error:

        print(
            "Interview Generation Error:",
            str(error)
        )

        return {

            "error":
            str(error)
        }