import nodemailer from "nodemailer";
import { IMailAdapter, ISendMailData } from "../IMailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c83b7c69f827b2",
    pass: "204fb3c8d8fea0",
  },
});

export class NodeMailerMailAdapter implements IMailAdapter {
  async send({ body, subject }: ISendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Diego Fernandes <ch4r4d4@gmail.com>",
      subject,
      html: body,
    });
  }
}

// await transport.sendMail(
//   {
//     from: "Equipe Feedget <oi@feedget.com>",
//     to: "Diego Fernandes <ch4r4d4@gmail.com>",
//     subject: "Novo feedback",
//     html: [
//       `<div style="font-family: sans-serif; font-size: 16px color:#111">`,
//       `<p>Novo feedback de ${type}</p>`,
//       `<p>${comment}</p>`,
//       `</div>`,
//     ].join("\n"),
//   },
//   (err, info) => {}
// );
