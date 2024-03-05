
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

    abstract getSignedUploadUrl(fileName: string): string | Promise<string>;

    abstract createReportCard(score: number, comment?: Nullable<string>, imageUrl?: Nullable<string>): Nullable<ReportCard> | Promise<Nullable<ReportCard>>;

    abstract createUser(name?: Nullable<string>, password?: Nullable<string>, email?: Nullable<string>): Nullable<CommentResponse> | Promise<Nullable<CommentResponse>>;

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

export class ReportCard {
    id: string;
    score: number;
    comment?: Nullable<string>;
    imageUrl?: Nullable<string>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class TUser {
    id?: Nullable<number>;
    tpassword?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
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
