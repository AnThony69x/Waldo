class GeminiService:
    def __init__(self, api_key: str):
        self.api_key = api_key
        # Aquí inicializaremos el cliente de google-genai

    async def generate_response(self, prompt: str, context: str = "") -> str:
        # Lógica para interactuar con Gemini
        pass
