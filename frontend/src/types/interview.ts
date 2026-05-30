export interface InterviewHistoryItem {
  question: string;
  answer: string;
  score: number;
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
}

export interface InterviewMemory {
  history: InterviewHistoryItem[];
}