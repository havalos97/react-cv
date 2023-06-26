import { mailOptions, transporter } from "../../util/nodemailer";

const verifyRecaptcha = async (token: string) => {
  const url = new URL('https://www.google.com/recaptcha/api/siteverify');
  url.searchParams.append('secret', process.env.RECAPTCHA_SECRET_KEY as string);
  url.searchParams.append('response', token);
  const response = await fetch(url.toString(), { method: "POST" });
  return response.json();
}

export default async function handler(req: Request, res: any) {
  if (req.method === 'POST') {
    const { name, email, message, token } = req.body as any
    if (!name || !email || !message) {
      res.status(400).json({ message: 'Bad Request' })
    }

    try {
      const recaptchaResponse = await verifyRecaptcha(token);
      if (recaptchaResponse.success && recaptchaResponse.action === 'contactFormSubmit') {
        await transporter.sendMail({
          ...mailOptions,
          from: email,
          subject: 'Web CV - Mailer',
          text: `${name} says: message`,
          html: `<p>${message}</p><br><b>${name}</b>`
        })
      }
    } catch (error: any) {
      return res.status(400).json({ message: error.message })
    }

    return res.status(200).json({ success: true })
  }

  return res.status(400).json({ message: 'Bad Request' })
}