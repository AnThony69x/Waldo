# PersonaAI

Plataforma de personajes con IA.

Este proyecto tiene como objetivo crear interacciones fluidas con personajes virtuales impulsados por Inteligencia Artificial (Gemini) y Text-to-Speech (ElevenLabs), comenzando con nuestro primer personaje: **Waldo**.

## El Personaje: Waldo
Waldo es un asistente virtual sarcástico, sumamente inteligente y con mucho sentido del humor. Nunca admite ser una IA y siempre busca una oportunidad para hacer una broma (sin ofender a nadie por raza, género o religión).

## Stack Tecnológico
- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion, Zustand.
- **Backend**: FastAPI, Python 3.12, SQLAlchemy, Alembic.
- **Base de Datos**: Supabase (PostgreSQL).
- **IA y Voz**: Google Gemini SDK, ElevenLabs.

## Organización
- `/frontend`: Aplicación Next.js (App Router).
- `/backend`: API en FastAPI siguiendo Clean Architecture.
- `/database`: Esquemas, semillas y migraciones.
- `/docs`: Documentación del proyecto (Roadmap, Arquitectura, Backlog).
- `/assets`: Recursos estáticos (avatares, iconos, animaciones).

## Metodología de Desarrollo
Desarrollo estructurado por fases utilizando **GitFlow** (`main`, `develop`, `feature/*`), basándonos en Arquitectura por Capas y buenas prácticas profesionales. Se empleará Docker para estandarizar el entorno local.