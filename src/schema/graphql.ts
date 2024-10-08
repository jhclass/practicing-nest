
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CommentResponse {
    ok: boolean;
    error?: Nullable<string>;
    message?: Nullable<string>;
}

export abstract class IMutation {
    abstract createComment(name: string, password: string, content: string): Nullable<CommentResponse> | Promise<Nullable<CommentResponse>>;

    abstract deleteComment(id: number): Nullable<CommentResponse> | Promise<Nullable<CommentResponse>>;

    abstract updateComment(id: number, name?: Nullable<string>, password?: Nullable<string>, content?: Nullable<string>): Nullable<CommentResponse> | Promise<Nullable<CommentResponse>>;

    abstract createExam(title: string, subjectName: string): CommentResponse | Promise<CommentResponse>;

    abstract editExam(id: number, title?: Nullable<string>, subjectName?: Nullable<string>): CommentResponse | Promise<CommentResponse>;

    abstract deleteExam(id: number): CommentResponse | Promise<CommentResponse>;

    abstract createExamQuestion(examId: number, item: string, indexNum: number, answer: string, fileUrl: Nullable<string>[]): CommonResponse | Promise<CommonResponse>;

    abstract editExamQuestion(id: number, examId?: Nullable<number>, item?: Nullable<string>, indexNum?: Nullable<number>, answer?: Nullable<string>, fileUrl?: Nullable<Nullable<string>[]>): CommonResponse | Promise<CommonResponse>;

    abstract deleteExamQuestion(id: number): CommentResponse | Promise<CommentResponse>;

    abstract getSignedUploadUrl(fileName: string): string | Promise<string>;

    abstract createReportCard(score: number, comment?: Nullable<string>, imageUrl?: Nullable<string>): Nullable<ReportCard> | Promise<Nullable<ReportCard>>;

    abstract createSurvey(category: string, writter: string): CommonResponse | Promise<CommonResponse>;

    abstract editSurvey(id: number, category: string, writter: string): CommonResponse | Promise<CommonResponse>;

    abstract createAQ(surveyId: number, question: string, answer: string): CommonResponse | Promise<CommonResponse>;

    abstract editAQ(id: number, question?: Nullable<string>, answer?: Nullable<string>): CommonResponse | Promise<CommonResponse>;

    abstract createUser(name: string, password: string, email: string, phoneNum: string): Nullable<CommentResponse> | Promise<Nullable<CommentResponse>>;

    abstract editUser(id: number, name?: Nullable<string>, password?: Nullable<string>, email?: Nullable<string>, phoneNum?: Nullable<string>, rating?: Nullable<string>): Nullable<CommentResponse> | Promise<Nullable<CommentResponse>>;

    abstract login(name?: Nullable<string>, password?: Nullable<string>): Nullable<LoginResult> | Promise<Nullable<LoginResult>>;
}

export class CommentDataResult {
    ok: boolean;
    message?: Nullable<string>;
    error?: Nullable<string>;
    data?: Nullable<Nullable<Comment>[]>;
    totalCount?: Nullable<number>;
}

export abstract class IQuery {
    abstract seeComment(page?: Nullable<number>, limit?: Nullable<number>): Nullable<CommentDataResult> | Promise<Nullable<CommentDataResult>>;

    abstract searchExamQuestion(id?: Nullable<number>, examId?: Nullable<number>): ResultSearchExamQuestion | Promise<ResultSearchExamQuestion>;

    abstract allUsers(): Nullable<FindAllResponse> | Promise<Nullable<FindAllResponse>>;
}

export class Comment {
    id: number;
    name: string;
    password: string;
    content: string;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class CommonResponse {
    ok: boolean;
    message?: Nullable<string>;
    error?: Nullable<string>;
}

export class Exam {
    id: number;
    title: string;
    tester: TUser;
    tUserId: number;
    subjectName?: Nullable<string>;
    Question?: Nullable<Nullable<ExamQuestion>[]>;
    createdAt: string;
    updatedAt: string;
}

export class ExamQuestion {
    id: number;
    Exam?: Nullable<Exam>;
    examId: number;
    item: string;
    indexNum: number;
    answer: string;
    ExamAnswer?: Nullable<Nullable<ExamAnswer>[]>;
    filePath?: Nullable<Nullable<string>[]>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    lastModifiedTime?: Nullable<string>;
    lastModifiedByName?: Nullable<string>;
}

export class ExamAnswer {
    id?: Nullable<number>;
    stName?: Nullable<string>;
    ExamQuestion?: Nullable<ExamQuestion>;
    examQuestionId?: Nullable<number>;
    tUser?: Nullable<TUser>;
    tUserId?: Nullable<number>;
}

export class ResultSearchExamQuestion {
    ok: boolean;
    message?: Nullable<string>;
    error?: Nullable<string>;
    result?: Nullable<Nullable<ExamQuestion>[]>;
    totalCount?: Nullable<number>;
}

export class ReportCard {
    id: string;
    score: number;
    comment?: Nullable<string>;
    imageUrl?: Nullable<string>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Survey {
    id: number;
    category: string;
    writter: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    admissionQuestion?: Nullable<Nullable<AdmissionQuestion>[]>;
}

export class AdmissionQuestion {
    id: number;
    question: string;
    answer: string;
    survey?: Nullable<Survey>;
    surveyId: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class TUser {
    id: number;
    name: string;
    password: string;
    email: string;
    phoneNum: string;
    rating?: Nullable<string>;
    Exam?: Nullable<Nullable<Exam>[]>;
    ExamAnswer?: Nullable<Nullable<ExamAnswer>[]>;
}

export class FindAllResponse {
    ok: boolean;
    data?: Nullable<Nullable<TUser>[]>;
}

export class LoginResult {
    ok?: Nullable<boolean>;
    error?: Nullable<string>;
    token?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
