from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.api.controllers.character_controller import CharacterController
from app.schemas.character_schema import CharacterResponse
from app.core.database import get_db

router = APIRouter(prefix="/characters", tags=["Characters"])
controller = CharacterController()

@router.get("/", response_model=List[CharacterResponse])
def get_characters(db: Session = Depends(get_db)):
    return controller.get_all_characters(db)
