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
  emotion: string;
  target_person: string;
};
