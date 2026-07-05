export interface Character {
  id: string;
  name: string;
  description?: string;
  personality?: string;
  avatar?: string;
  voiceId?: string;
  isActive: boolean;
}
