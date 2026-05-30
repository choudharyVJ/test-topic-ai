from fastapi import APIRouter

from app.services.roadmap_generator import (

    generate_roadmap
)


router = APIRouter()


@router.post(
    "/generate-roadmap"
)

async def generate_ai_roadmap(

    data: dict
):

    try:

        role = data.get(
            'role'
        )

        level = data.get(
            'level'
        )

        if not role:

            return {

                "error":
                "Role is required"
            }

        roadmap = generate_roadmap(

            role,

            level
        )

        return roadmap

    except Exception as error:

        return {

            "error":
            str(error)
        }