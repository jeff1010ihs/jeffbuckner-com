
import { ReactNode } from 'react';

export interface Service {
  id: number;
  title: string;
  tagline: string;
  icon: ReactNode;
  description: string;
  suitableForLabel: string; // e.g. "Ideal for", "Best for", "Designed for"
  suitableFor: string;
  scripture: string;
  reference: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  MISSION = 'mission',
  AI_ADVISOR = 'advisor',
  CONTACT = 'contact'
}
