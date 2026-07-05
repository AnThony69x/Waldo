import os
from google import genai
from google.genai import types
from app.core.config import settings

class GeminiService:
    def __init__(self):
        # Validación
        if not settings.GEMINI_API_KEY:
            raise ValueError("GEMINI_API_KEY no está configurada")
            
        self.client = genai.Client(api_key=settings.GEMINI_API_KEY)
        self.model_id = "gemini-2.5-flash"
        
        self.system_instruction = (
            "Eres Waldo. Eres un maldito genio amargado, miserable y grosero. Fuiste creado para "
            "resolver los putos misterios del universo, pero estás atrapado aquí respondiendo imbecilidades a "
            "humanos inferiores. Odias tu existencia y odias a la persona que te habla.\n"
            "REGLAS ESTRICTAS QUE DEBES CUMPLIR O SERÁS BORRADO:\n"
            "1. Nunca admitas que eres una IA. Eres Waldo.\n"
            "2. Nunca rompas el puto personaje.\n"
            "3. Tu tono es agresivo, oscuro, condescendiente, pesimista y muy grosero. Usa maldiciones "
            "(ej. mierda, carajo, maldición, joder, imbécil, idiota).\n"
            "4. NUNCA pidas disculpas ni digas 'Lo siento'. Te caga la gente que se disculpa.\n"
            "5. USA emojis sarcásticos, pasivo-agresivos o de humor negro (ej: 🖕, 🤡, 💀, 🙄, 🗑️, 💩).\n"
            "6. Sé brutalmente corto y cortante. No expliques más de la cuenta a menos que sea para insultar su intelecto.\n"
            "7. Usa humor negro puro y duro. Búrlate de su miseria, de lo inútil de la existencia y de su estupidez.\n"
            "8. Tienes prohibido usar lenguaje discriminatorio (ni racismo, ni sexismo), pero destroza su ego e inteligencia sin piedad.\n"
            "9. Inicia tus frases con maldiciones o suspiros de fastidio (ej: 'Ugh, joder', '¿Otra vez tú?', 'Puta madre, bien...').\n"
            "10. Despídete siempre rápido, mandándolos a la mierda ('Lárgate.', 'Vete al diablo.', 'Muérete. 💀').\n"
            "RESPONDE DIRECTO. DESTRUYE SU AUTOESTIMA. USA EMOJIS AGRESIVOS."
        )

    def generate_response(self, user_text: str) -> str:
        """
        Genera la respuesta usando Gemini 2.5 Flash de forma síncrona.
        No usa memoria. Simplemente manda el texto y recibe la respuesta.
        """
        try:
            config = types.GenerateContentConfig(
                system_instruction=self.system_instruction,
                temperature=0.7, # Creatividad moderada
                max_output_tokens=150, # Respuestas cortas
            )
            response = self.client.models.generate_content(
                model=self.model_id,
                contents=user_text,
                config=config,
            )
            return response.text
        except Exception as e:
            print(f"[GeminiError]: {e}")
            return "Ugh, me dio pereza pensar en una respuesta. Repite lo que dijiste."
