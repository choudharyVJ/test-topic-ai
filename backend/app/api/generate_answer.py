from fastapi import APIRouter

from app.services.answer_generator import (
    generate_mentor_answer
)

router = APIRouter()


@router.post(
    "/generate-mentor-answer"
)
async def generate_answer(
    data: dict
):

    try:

        question = data.get(
            "question",
            ""
        )

        role = data.get(
            "role",
            ""
        )

        answer = generate_mentor_answer(

            question,

            role
        )

        return {

            "answer":
            answer
        }

    except Exception as error:

        return {

            "error":
            str(error)
        }