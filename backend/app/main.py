from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routers import health_router, character_router, chat_router

app = FastAPI(title="PersonaAI Backend API", version="1.0.0", description="Clean Architecture Base API")

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(health_router.router)
app.include_router(character_router.router)
app.include_router(chat_router.router)

@app.get("/")
def read_root():
    return {"message": "PersonaAI Backend is running with Clean Architecture."}
