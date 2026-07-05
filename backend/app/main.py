from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routers import chat_router

app = FastAPI(title="PersonaAI Backend", version="1.0.0")

# CORS Middleware 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router.router)

@app.get("/")
def read_root():
    return {"message": "PersonaAI Backend is running."}
