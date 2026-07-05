from app.services.chat_service import ChatService
from app.schemas.chat_schema import ChatRequest, ChatResponse

class ChatController:
    def __init__(self, service: ChatService = None):
        self.service = service or ChatService()

    async def chat(self, request: ChatRequest) -> ChatResponse:
        return await self.service.process_chat(request)
