from fastapi import Header, HTTPException

# =========================

# VERIFY AUTH TOKEN

# =========================

async def verify_auth_token(

authorization: str = Header(None),

):
    # =========================
    # CHECK HEADER EXISTS
    # =========================
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization token missing.")

    # =========================
    # CHECK BEARER FORMAT
    # =========================
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization format.")

    # =========================
    # EXTRACT TOKEN
    # =========================
    token = authorization.replace("Bearer ", "").strip()

    # =========================
    # EMPTY TOKEN CHECK
    # =========================
    if not token:
        raise HTTPException(status_code=401, detail="Invalid token.")

    # =========================
    # SUCCESS
    # =========================
    return token
