import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./use-cases/SubmitFeedbackUseCase";

import { Router } from "express";
import { NodeMailerMailAdapter } from "./adapters/nodemailer/NodeMailerMailAdapter";

export const routes = Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodeMailerMailAdapter = new NodeMailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodeMailerMailAdapter
  );

  const feedback = await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  response.status(201).json({ feedback });
});
