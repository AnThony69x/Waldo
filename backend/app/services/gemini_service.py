import os
import logging
from google import genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    logging.warning("GEMINI_API_KEY is not set in environment variables.")

client = genai.Client(api_key=api_key) if api_key else None

def get_system_prompt(character_id: str) -> str:
    base_name = character_id.split('-')[0].lower()
    prompt_path = os.path.join(os.path.dirname(__file__), f"../../../prompts/{base_name}.md")
    
    try:
        with open(prompt_path, "r", encoding="utf-8") as file:
            return file.read()
    except FileNotFoundError:
        return f"Eres {base_name}. Eres un asistente inteligente."

async def generate_chat_response(character_id: str, message_content: str) -> str:
    if not client:
        return "[Simulated Response] No se ha configurado la API Key de Gemini en el backend (.env)."
        
    system_instruction = get_system_prompt(character_id)
    
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=message_content,
            config=genai.types.GenerateContentConfig(
                system_instruction=system_instruction,
                temperature=0.7,
            )
        )
        return response.text
    except Exception as e:
        logging.error(f"Error calling Gemini API: {e}")
        return f"Ocurrió un error al procesar tu solicitud: {str(e)}"
