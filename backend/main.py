from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv

from app.utils.rate_limiter import (
limiter,
)


from slowapi.errors import RateLimitExceeded

from slowapi.middleware import SlowAPIMiddleware

from slowapi.extension import _rate_limit_exceeded_handler

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

title="Topic-Test-AI",

description="""
Premium AI Topic Testing & Interview Preparation Platform
""",

version="1.0.0"

)

# =========================

# REGISTER LIMITER

# =========================

app.state.limiter = limiter

app.add_exception_handler(
RateLimitExceeded,
_rate_limit_exceeded_handler
)

app.add_middleware(
SlowAPIMiddleware
)

# =========================

# CORS CONFIGURATION

# =========================

app.add_middleware(

CORSMiddleware,

allow_origins=[

    "http://localhost:3000",

    "https://topic-test-ai.vercel.app",
],

allow_credentials=True,

allow_methods=[

    "GET",
    "POST",
    "OPTIONS",
],

allow_headers=[

    "Content-Type",
    "Authorization",
],

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
        "message": "Topic-Test-AI Backend Running 😄🔥"
    }

# =========================

# HEALTH CHECK ROUTE

# =========================

@app.get("/health")
async def health():
    """
    Health check endpoint for server monitoring with Uptime Robot.
    Returns the current status of the Topic-Test-AI Backend.
    """
    return {
        "status": "healthy",
        "service": "Topic-Test-AI Backend",
        "timestamp": __import__("datetime").datetime.utcnow().isoformat()
    }
