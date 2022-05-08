import { IMailAdapter } from "./../adapters/IMailAdapter";
import { IFeedbacksRepository } from "./../repositories/IFeedbacksRepository";
interface ISubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: IFeedbacksRepository,
    private mailAdapter: IMailAdapter
  ) {}

  async execute(request: ISubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type are required");
    }

    if (!comment) {
      throw new Error("Comment are required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Screenshot must be a base64 encoded PNG image");
    }

    const feedback = await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.send({
      subject: "novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px color:#111">`,
        `<p>Novo feedback de ${type}</p>`,
        `<p>${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
