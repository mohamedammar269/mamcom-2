// lib/mailer.js
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendContactEmail({ nom, prenom, email, objet, message }) {
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `[MAMcom] ${objet} — ${prenom} ${nom}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #FF6B00; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">
            <span style="color: #FFE0B2;">MAM</span><span style="color: #1A6FD4;">com</span>
            — Nouveau message
          </h1>
        </div>
        <div style="background: #f8f9fa; padding: 28px; border: 1px solid #e9ecef; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #868e96; font-size: 12px; text-transform: uppercase; font-weight: 600;">Nom complet</td></tr>
            <tr><td style="padding: 0 0 16px; color: #212529; font-size: 15px; font-weight: 500;">${prenom} ${nom}</td></tr>
            <tr><td style="padding: 8px 0; color: #868e96; font-size: 12px; text-transform: uppercase; font-weight: 600;">Email</td></tr>
            <tr><td style="padding: 0 0 16px;"><a href="mailto:${email}" style="color: #1A6FD4;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #868e96; font-size: 12px; text-transform: uppercase; font-weight: 600;">Objet</td></tr>
            <tr><td style="padding: 0 0 16px; color: #212529; font-size: 15px;">${objet}</td></tr>
            <tr><td style="padding: 8px 0; color: #868e96; font-size: 12px; text-transform: uppercase; font-weight: 600;">Message</td></tr>
            <tr><td style="padding: 0 0 16px; color: #212529; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</td></tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #dee2e6; font-size: 12px; color: #868e96;">
            Message reçu le ${new Date().toLocaleString('fr-FR')} via le formulaire de contact MAMcom.
          </div>
        </div>
      </div>
    `,
  })
}
