import { create } from "zustand";
import { persist } from "zustand/middleware";

interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: { [key: number]: string[] };
  isQuizFinished: boolean;
  setCurrentQuestionIndex: (index: number) => void;
  addOrRemoveAnswer: (id: string, type: string) => void;
  setIsQuizFinished: (status: boolean) => void;
  resetQuiz: () => void;
  clearAllData: () => void;
}

const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      currentQuestionIndex: 0,
      selectedAnswers: {},
      isQuizFinished: false,

      setCurrentQuestionIndex: (index: number) =>
        set({ currentQuestionIndex: index }),

      addOrRemoveAnswer: (id: string, type: string) => {
        const { currentQuestionIndex, selectedAnswers } = get();
        const currentAnswers = selectedAnswers[currentQuestionIndex] || [];

        let updatedAnswers: string[];

        if (type === "single_selection") {
          updatedAnswers = [id];
        } else if (type === "multiple_selection") {
          updatedAnswers = currentAnswers.includes(id)
            ? currentAnswers.filter((answer) => answer !== id)
            : [...currentAnswers, id];
        } else {
          updatedAnswers = [];
        }

        set({
          selectedAnswers: {
            ...selectedAnswers,
            [currentQuestionIndex]: updatedAnswers,
          },
        });
      },

      setIsQuizFinished: (status: boolean) => set({ isQuizFinished: status }),

      resetQuiz: () =>
        set({
          currentQuestionIndex: 0,
          selectedAnswers: {},
          isQuizFinished: false,
        }),

      clearAllData: () => {
        set({
          currentQuestionIndex: 0,
          selectedAnswers: {},
          isQuizFinished: false,
        });
        localStorage.removeItem("quiz-store");
      },
    }),
    { name: "quiz-store" }
  )
);

export default useQuizStore;
