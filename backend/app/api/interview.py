from fastapi import (

APIRouter,

HTTPException,

Request,

Depends,

)

from app.services.interview_generator import (
generate_interview_question
)

from app.schemas.interview_schema import (
InterviewQuestionRequest
)

from app.utils.rate_limiter import (
limiter,
)

from app.middleware.auth_middleware import (
verify_auth_token,
)

router = APIRouter()

@router.post(
"/generate-interview-question"
)

@limiter.limit("5/minute")

async def generate_question(

request: Request,

data: InterviewQuestionRequest,

token: str = Depends(
    verify_auth_token
),

):
    try:
        # =========================
        # SANITIZED INPUTS
        # =========================

        role = data.role.strip()

        difficulty = data.difficulty.strip()

        stack = [tech.strip() for tech in data.stack]

        previous_question = data.previous_question.strip() if data.previous_question else ""

        previous_answer = data.previous_answer.strip() if data.previous_answer else ""

        memory = data.memory or {"history": []}

        # =========================
        # GENERATE QUESTION
        # =========================

        question = generate_interview_question(
            role,
            difficulty,
            stack,
            previous_question,
            previous_answer,
            memory,
        )

        return question

    except Exception as error:
        print("Interview Generation Error:", str(error))
        raise HTTPException(status_code=500, detail="Failed to generate interview question.")
