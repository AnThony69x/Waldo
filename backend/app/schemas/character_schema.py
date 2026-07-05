from pydantic import BaseModel, ConfigDict
from typing import Optional
import uuid
from datetime import datetime

class CharacterResponse(BaseModel):
    id: uuid.UUID
    name: str
    description: Optional[str] = None
    personality: Optional[str] = None
    avatar: Optional[str] = None
    is_active: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
