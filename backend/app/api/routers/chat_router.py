from fastapi import APIRouter
from app.api.controllers.chat_controller import ChatController
from app.schemas.chat_schema import ChatRequest, ChatResponse

router = APIRouter(prefix="/chat", tags=["Chat"])
controller = ChatController()

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    return await controller.chat(request)
