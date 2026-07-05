from app.services.health_service import HealthService
from app.schemas.health_schema import HealthResponse

class HealthController:
    @staticmethod
    def get_health() -> HealthResponse:
        return HealthService.get_health_status()
