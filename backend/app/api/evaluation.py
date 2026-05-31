from fastapi import APIRouter, HTTPException, Request, Depends

from app.services.answer_evaluator import evaluate_answer
from app.schemas.evaluation_schema import EvaluationRequest
from app.utils.rate_limiter import limiter
from app.middleware.auth_middleware import verify_auth_token

router = APIRouter()

@router.post("/evaluate-answer")
@limiter.limit("5/minute")
async def evaluate_interview_answer(
    request: Request,
    data: EvaluationRequest,
    token: str = Depends(verify_auth_token),
):
    try:
        # =========================
        # SANITIZED INPUTS
        # =========================
        role = data.role.strip()
        question = data.question.strip()
        answer = data.answer.strip()

        # =========================
        # AI EVALUATION
        # =========================
        evaluation = evaluate_answer(role, question, answer)
        return evaluation
    except Exception as error:
        print("Evaluation Error:", str(error))
        raise HTTPException(
            status_code=500,
            detail="Failed to evaluate answer.",
        )
