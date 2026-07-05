from sqlalchemy.orm import Session
from app.repositories.character_repository import CharacterRepository
from app.schemas.character_schema import CharacterResponse
from typing import List

class CharacterService:
    def __init__(self, repository: CharacterRepository = None):
        self.repository = repository or CharacterRepository()

    def get_characters(self, db: Session) -> List[CharacterResponse]:
        characters = self.repository.get_all_active(db)
        return [CharacterResponse.model_validate(c) for c in characters]
