# Backlog - PersonaAI

## Backend
- [ ] Configurar conexión a la base de datos (Supabase) en `alembic.ini` y `core/config.py`.
- [ ] Crear los modelos SQLAlchemy equivalentes a los esquemas de `database/schema/`.
- [ ] Inicializar la base de FastAPI en `main.py` (CORS, routers).
- [ ] Implementar la función de llamada a Gemini en `gemini_service.py`.
- [ ] Crear endpoint base `POST /api/chat`.

## Frontend
- [ ] Crear la estructura principal en `app/layout.tsx` y `app/page.tsx`.
- [ ] Configurar Zustand en `store/useChatStore.ts` para manejar mensajes.
- [ ] Crear el componente `ChatWindow` y la `ChatInput`.
- [ ] Crear servicio Axios en `services/api.ts` para llamar al backend.

## Base de Datos
- [ ] Aplicar esquemas a Supabase.
- [ ] Definir variables de entorno de Supabase en Vercel/Local.

## DevOps
- [ ] Configurar `docker-compose.yml` final.
- [ ] Configurar archivos `Dockerfile` en frontend y backend.
