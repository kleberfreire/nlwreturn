export interface ICreateFeedbacks {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacksRepository {
  create(data: ICreateFeedbacks): Promise<void>;
}
