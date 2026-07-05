@echo off
cd /d "%~dp0"
echo ===================================================
echo Iniciando PersonaAI (Waldo)
echo ===================================================

echo [1/2] Iniciando Backend (FastAPI)...
start cmd /k "cd backend && call venv\Scripts\activate && uvicorn app.main:app --reload"

echo [2/2] Iniciando Frontend (Next.js)...
start cmd /k "cd frontend && npm run dev"

echo.
echo Los dos servidores se estan ejecutando en ventanas separadas.
echo Backend: http://localhost:8000
echo Frontend: http://localhost:3000
echo.
pause
