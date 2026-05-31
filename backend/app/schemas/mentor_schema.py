from pydantic import BaseModel, Field

class MentorAnswerRequest(BaseModel):
    question: str = Field(
        ...,
        min_length=5,
        max_length=1000,
    )

    role: str = Field(
        ...,
        min_length=2,
        max_length=50,
    )
