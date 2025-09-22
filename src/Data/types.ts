export type Question = {
  id: string;
  category: string;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
};

export type Answer = {
  questionId: string;
  selectedOption: {
    text: string;
    score: number;
  };
};
