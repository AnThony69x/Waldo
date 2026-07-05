import uuid
from sqlalchemy import Column, String, Text, Boolean, DateTime, func, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base

class Character(Base):
    __tablename__ = "characters"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    personality = Column(Text, nullable=True)
    avatar = Column(String(255), nullable=True)
    prompt = Column(Text, nullable=True)
    is_active = Column(Boolean, default=True)
    
    # Arquitectural improvement: Proper FK to voices
    voice_id = Column(UUID(as_uuid=True), ForeignKey("voices.id", ondelete="SET NULL"), nullable=True, index=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    voice = relationship("Voice", back_populates="characters")
    conversations = relationship("Conversation", back_populates="character", cascade="all, delete-orphan")
    memories = relationship("Memory", back_populates="character", cascade="all, delete-orphan")
