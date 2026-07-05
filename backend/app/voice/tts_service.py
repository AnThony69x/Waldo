class TTSService:
    def __init__(self, api_key: str):
        self.api_key = api_key
        # Aquí inicializaremos el cliente de ElevenLabs

    async def generate_audio(self, text: str, voice_id: str = "default") -> bytes:
        # Lógica para convertir texto a voz con ElevenLabs
        pass
