import uuid
from sqlalchemy import Column, String, DateTime, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base

class Voice(Base):
    __tablename__ = "voices"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    provider = Column(String(100), nullable=False)
    voice_id = Column(String(255), nullable=False)
    language = Column(String(50), nullable=True)
    gender = Column(String(50), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    characters = relationship("Character", back_populates="voice")
