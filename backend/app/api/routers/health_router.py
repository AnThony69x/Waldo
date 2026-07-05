from fastapi import APIRouter
from app.api.controllers.health_controller import HealthController
from app.schemas.health_schema import HealthResponse

router = APIRouter(prefix="/health", tags=["Health"])

@router.get("/", response_model=HealthResponse)
def health_check():
    return HealthController.get_health()
