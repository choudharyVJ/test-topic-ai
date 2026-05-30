from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv

from app.api.roadmap import (

    router as roadmap_router
)

from app.api.interview import (

    router as interview_router
)

from app.api.evaluation import (

    router as evaluation_router
)

from app.api.generate_answer import (
    router as answer_router
)

# Load environment variables

load_dotenv()


# Create FastAPI app

app = FastAPI(

    title="HireGenix AI",

    description="""
    AI Career Intelligence Platform
    """,

    version="1.0.0"
)


# CORS Configuration

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:3000",
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


# Register API Routes

app.include_router(

    roadmap_router,

    prefix="/api"
)

app.include_router(

    interview_router,

    prefix="/api"
)

app.include_router(

    evaluation_router,

    prefix="/api"
)

app.include_router(
    answer_router,

    prefix="/api"
)

# Health Check Route

@app.get("/")

async def root():

    return {

        "message":
        "HireGenix AI Backend Running 😄🔥"
    }