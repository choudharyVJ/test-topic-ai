from pydantic import BaseModel, Field
from typing import Optional

class RoadmapRequest(BaseModel):
    role: str = Field(
        ...,
        min_length=2,
        max_length=50,
    )

    level: Optional[str] = Field(
        default="Beginner",
        min_length=2,
        max_length=30,
    )
