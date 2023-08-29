export enum Emotions {
  Anger = "Anger",
  Pride = "Pride",
  Greed = "Greed",
  Envy = "Envy",
  Lust = "Lust",
  Disgust = "Disgust",
}

export interface Emotion {
  title: string;
  id: number;
}

export interface User {
  name: string;
  email: string;
  id: string;
  diary: Diary[];
}

export type Diary = {
  title: string;
  description: string;
  date: string;
  emotion: Emotions;
  target_person: string;
  doc_id: string;
  newly_added: boolean;
};
