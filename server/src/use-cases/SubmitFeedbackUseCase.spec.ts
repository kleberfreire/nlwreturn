import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { send: sendMailSpy }
);

describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG test",
        comment: "comment test",
        screenshot: "data:image/png;base64/dasdasdasd",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("Should not be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG test",
        comment: "comment test",
        screenshot: "data:image/pngdasdasd",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback witch type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "comment test",
        screenshot: "data:image/png;base64/dasdasdasd",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback witch comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG test",
        comment: "",
        screenshot: "data:image/png;base64/dasdasdasd",
      })
    ).rejects.toThrow();
  });
});
