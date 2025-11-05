"""Admin authentication endpoints."""
from __future__ import annotations

from datetime import datetime, timedelta

from fastapi import APIRouter, Form, HTTPException, status
from jose import jwt

from utils.config import get_settings

router = APIRouter(prefix="/admin", tags=["Admin Auth"])


@router.post("/login")
def admin_login(username: str = Form(...), password: str = Form(...)) -> dict[str, str]:
    settings = get_settings()

    if username != settings.admin_user or password != settings.admin_pass:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = jwt.encode(
        {"sub": username, "exp": datetime.utcnow() + timedelta(hours=1)},
        settings.jwt_secret,
        algorithm="HS256",
    )
    return {"token": token}


__all__ = ["router"]
