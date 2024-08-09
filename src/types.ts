export interface TUser {
  id: number;
  name: string;
  password: string;
  email: string;
  phoneNum: string;
  rating?: string;
  Exam?: Exam[];
  ExamAnswer?: ExamAnswer[];
}
export interface Exam {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  tester: TUser;
  tUserId: number;
  subjectName?: string;
  Question?: ExamQuestion[];
}
export interface ExamAnswer {
  id: number;
  stName: string;
  ExamQuestion: ExamQuestion;
  examQuestionId: number;
  tUser: TUser;
  tUserId: number;
}
export interface LoggedInManager {
  id: number;
  name: string;
  password: string;
  email: string;
  phoneNum: string;
  rating?: string;
  Exam?: Exam[];
  ExamAnswer?: ExamAnswer[];
}
export interface ExamQuestion {
  id: number;
  Exam: Exam;
  examId: number;
  item: string;
  indexNum: number;
  answer: string;
  ExamAnswer: ExamAnswer[];
}
