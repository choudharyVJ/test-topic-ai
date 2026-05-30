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

# =========================

# LOAD ENV VARIABLES

# =========================

load_dotenv()

# =========================

# CREATE FASTAPI APP

# =========================

app = FastAPI(

title="HireGenix AI",

description="""
Premium AI Recruiter Simulation Platform
""",

version="1.0.0"

)

# =========================

# CORS CONFIGURATION

# =========================

app.add_middleware(

CORSMiddleware,

allow_origins=[

    "http://localhost:3000",

    "https://hiregenix-ai.vercel.app",
],

allow_credentials=True,

allow_methods=["*"],

allow_headers=["*"],

)

# =========================

# REGISTER API ROUTES

# =========================

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

# =========================

# ROOT ROUTE

# =========================

@app.get("/")

async def root():

 return {

    "message":
    "HireGenix AI Backend Running 😄🔥"
}

# =========================

# HEALTH CHECK ROUTE

# =========================

@app.get("/ping")

async def ping():

 return {

    "status": "alive",

    "service": "HireGenix AI Backend"
}

