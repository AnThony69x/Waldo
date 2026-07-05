from app.schemas.health_schema import HealthResponse

class HealthService:
    @staticmethod
    def get_health_status() -> HealthResponse:
        return HealthResponse(status="ok", message="API is running under Clean Architecture")
