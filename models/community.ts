export interface UserBoard {
    boardUid: string;
    userUid?: string;
    trainerUid?: string;
    nickName?: string;
    thumnail?: string;
    content?: string;
    boardLikeDTOList: UserBoardLikeDTO[];
    boardCommentReportDTOList: UserBoardCommentReportDTO[];
    diaryUid?: string;
    diaryDTO?: unknown;
    registDate: string;
}

export interface UserBoardLikeDTO {
    boardLikeUid: string;
    userUid: string;
    registDate: string;
}

export interface UserBoardComment {
    commentUid: string;
    userUid: string;
    content: string;
    registDate: string;
    boardCommentReportDTOList: UserBoardCommentReportDTO[];
}

export interface UserBoardCommentReportDTO {
    userUid: string;
    /** @description 1 = board / 2 = comment */
    reportType: 1 | 2;
}