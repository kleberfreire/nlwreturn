export interface ISendMailData {
  subject: string;
  body: string;
}

export interface IMailAdapter {
  send(data: ISendMailData): Promise<void>;
}
