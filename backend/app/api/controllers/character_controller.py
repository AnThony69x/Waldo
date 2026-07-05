from sqlalchemy.orm import Session
from app.services.character_service import CharacterService
from app.schemas.character_schema import CharacterResponse
from typing import List

class CharacterController:
    def __init__(self, service: CharacterService = None):
        self.service = service or CharacterService()

    def get_all_characters(self, db: Session) -> List[CharacterResponse]:
        return self.service.get_characters(db)
