from fastapi import (

APIRouter,

HTTPException,

Request,

Depends,

)

from app.services.answer_generator import (
generate_mentor_answer,
)

from app.schemas.mentor_schema import (
MentorAnswerRequest,
)

from app.utils.rate_limiter import (
limiter,
)

from app.middleware.auth_middleware import (
verify_auth_token,
)

router = APIRouter()

@router.post(
"/generate-mentor-answer"
)

@limiter.limit("5/minute")

async def generate_answer(

request: Request,

data: MentorAnswerRequest,

token: str = Depends(
    verify_auth_token
),

):
    try:
        # =========================
        # SANITIZED INPUTS
        # =========================

        question = data.question.strip()

        role = data.role.strip()

        # =========================
        # GENERATE MENTOR ANSWER
        # =========================

        answer = generate_mentor_answer(

            question,

            role,
        )

        return {

            "answer": answer
        }

    except Exception as error:

        print(
            "Mentor Answer Error:",
            str(error),
        )

        raise HTTPException(

            status_code=500,

            detail="Failed to generate mentor answer.",
        )
