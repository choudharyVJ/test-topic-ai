from pydantic import BaseModel, Field

class EvaluationRequest(BaseModel):
    role: str = Field(
        ...,
        min_length=2,
        max_length=50,
    )

    question: str = Field(
        ...,
        min_length=5,
        max_length=1000,
    )

    answer: str = Field(
        ...,
        min_length=2,
        max_length=5000,
    )
