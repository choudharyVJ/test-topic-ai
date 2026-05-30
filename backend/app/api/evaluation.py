from fastapi import APIRouter

from app.services.answer_evaluator import (

    evaluate_answer
)


router = APIRouter()


@router.post(
    "/evaluate-answer"
)

async def evaluate_interview_answer(

    data: dict
):

    try:

        role = data.get(
            'role'
        )

        question = data.get(
            'question'
        )

        answer = data.get(
            'answer'
        )

        evaluation = evaluate_answer(

            role,

            question,

            answer
        )

        return evaluation

    except Exception as error:

        return {

            "error":
            str(error)
        }