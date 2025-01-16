interface Option {
  id: string;
  text: string;
}

interface SingleSelectionQuestion {
  type: "single_selection";
  question: string;
  options: Option[];
  correctAnswer: string;
}
interface Contact {
  contact_type: string;
  phone_number: string;
}

interface MultipleSelectionQuestion {
  type: "multiple_selection";
  question: string;
  options: Option[];
  correctAnswers: string[];
}

type Role =
  | "manager"
  | "user"
  | "developer"
  | "tester"
  | "owner"
  | "officer"
  | "finance"
  | "ceo"
  | "coo"
  | "cfo"
  | "cto";

export type Question = SingleSelectionQuestion | MultipleSelectionQuestion;

export type UserTabel = {
  user_id: string;
  name: string;
  username: string;
  email: string;
  contact: Contact[];
  user_profile: string;
  role: Role;
  start_employ: string;
  work_status: 0 | 1;
  use_chat_acces: 0 | 1;
};
