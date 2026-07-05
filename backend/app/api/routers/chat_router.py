from fastapi import APIRouter, HTTPException
from datetime import datetime
import uuid
from app.schemas.chat_schema import ChatRequest, ChatResponse
from app.services.gemini_service import generate_chat_response

router = APIRouter(prefix="/api/chat", tags=["chat"])

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    try:
        # Generar respuesta usando Gemini
        ai_text = await generate_chat_response(request.characterId, request.content)
        
        conv_id = request.conversationId if request.conversationId else "default-conv"
        
        return ChatResponse(
            id=str(uuid.uuid4()),
            conversationId=conv_id,
            sender="character",
            content=ai_text,
            createdAt=datetime.utcnow().isoformat() + "Z"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
