"""Backend configuration helpers."""
from __future__ import annotations

import os
from functools import lru_cache

from dotenv import load_dotenv

load_dotenv()


class Settings:
    """Simple settings object backed by environment variables."""

    def __init__(self) -> None:
        self.admin_user = os.getenv("ADMIN_USER", "")
        self.admin_pass = os.getenv("ADMIN_PASS", "")
        self.jwt_secret = os.getenv("JWT_SECRET", "")

        self._validate()

    def _validate(self) -> None:
        missing: list[str] = []
        if not self.admin_user:
            missing.append("ADMIN_USER")
        if not self.admin_pass:
            missing.append("ADMIN_PASS")
        if not self.jwt_secret:
            missing.append("JWT_SECRET")
        if missing:
            raise RuntimeError(
                "Missing required environment variables: " + ", ".join(missing)
            )


@lru_cache()
def get_settings() -> Settings:
    """Return cached settings instance."""
    return Settings()


__all__ = ["Settings", "get_settings"]
