import nodemailer from 'nodemailer';

const smtp_host = (process.env.SMTP_HOST as string) || '';
const smtp_port = (process.env.SMTP_PORT as string) || '';
const smtp_username = (process.env.SMTP_USERNAME as string) || '';
const smtp_pass = (process.env.SMTP_PASSWORD as string) || '';
const smtp_to = (process.env.SMTP_TO as string) || '';

export const transporter = nodemailer.createTransport({
  host: smtp_host,
  port: parseInt(smtp_port),
  secure: false,
  auth: {
    user: smtp_username,
    pass: smtp_pass,
  },
});

export const mailOptions = {
  to: smtp_to,
};
