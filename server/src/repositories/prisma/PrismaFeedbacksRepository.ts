import { prisma } from "./../../primas";

import {
  ICreateFeedbacks,
  IFeedbacksRepository,
} from "../IFeedbacksRepository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({ type, comment, screenshot }: ICreateFeedbacks) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
