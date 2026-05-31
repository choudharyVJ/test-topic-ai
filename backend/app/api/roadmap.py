from fastapi import (

APIRouter,

HTTPException,

Request,

Depends,

)

from app.services.roadmap_generator import (
generate_roadmap,
)

from app.schemas.roadmap_schema import (
RoadmapRequest,
)

from app.utils.rate_limiter import (
limiter,
)

from app.middleware.auth_middleware import (
verify_auth_token,
)

router = APIRouter()

@router.post(
"/generate-roadmap"
)

@limiter.limit("5/minute")

async def generate_ai_roadmap(

request: Request,

data: RoadmapRequest,

token: str = Depends(
    verify_auth_token
),

):
    try:
        # =========================
        # SANITIZED INPUTS
        # =========================
        role = data.role.strip()

        level = (
            data.level.strip()
            if data.level
            else "Beginner"
        )

        # =========================
        # GENERATE ROADMAP
        # =========================
        roadmap = generate_roadmap(
            role,
            level,
        )

        return roadmap
    except Exception as error:
        print(
            "Roadmap Generation Error:",
            str(error)
        )

        raise HTTPException(
            status_code=500,
            detail="Failed to generate roadmap.",
        )
