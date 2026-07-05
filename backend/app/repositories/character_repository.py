from sqlalchemy.orm import Session
from app.models.character import Character
from typing import List

class CharacterRepository:
    def get_all_active(self, db: Session) -> List[Character]:
        return db.query(Character).filter(Character.is_active == True).all()
