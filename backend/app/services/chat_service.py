from app.schemas.chat_schema import ChatRequest, ChatResponse
from app.services.gemini_service import GeminiService
import uuid
from datetime import datetime

class ChatService:
    def __init__(self):
        self.gemini_service = GeminiService()

    async def process_chat(self, request: ChatRequest) -> ChatResponse:
        conv_id = request.conversationId if request.conversationId else "simulated-conv-id"
        
        # Consumo de IA Real (Sin memoria)
        ai_response = self.gemini_service.generate_response(request.content)
        
        return ChatResponse(
            id=str(uuid.uuid4()),
            conversationId=conv_id,
            sender="character",
            content=ai_response,
            createdAt=datetime.utcnow().isoformat() + "Z"
        )
