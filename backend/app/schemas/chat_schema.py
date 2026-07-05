from pydantic import BaseModel
from typing import Optional

class ChatRequest(BaseModel):
    conversationId: Optional[str] = None
    characterId: str
    content: str

class ChatResponse(BaseModel):
    id: str
    conversationId: str
    sender: str = "character"
    content: str
    createdAt: str
