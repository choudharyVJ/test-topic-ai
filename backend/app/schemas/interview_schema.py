from pydantic import (
BaseModel,
Field,
)

from typing import (
Optional,
List,
Dict,
Any,
)

class InterviewQuestionRequest(
    BaseModel
):

    role: str = Field(
        ...,
        min_length=2,
        max_length=50,
    )

    difficulty: str = Field(
        ...,
        min_length=2,
        max_length=30,
    )

    stack: List[str] = Field(
        ...,
        min_items=1,
        max_items=20,
    )

    previous_question: Optional[str] = Field(
        default="",
        max_length=1000,
    )

    previous_answer: Optional[str] = Field(
        default="",
        max_length=5000,
    )

    memory: Optional[
        Dict[str, Any]
    ] = Field(
        default_factory=dict
    )
