import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, sujet, message } = await req.json();

    // Validation basique
    if (!name || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const subjectLabels: Record<string, string> = {
      "livre": "Commander un livre",
      "coaching-individuel": "Coaching individuel",
      "coaching-equipe": "Coaching d'équipe / formation",
      "speaking": "Invitation à parler / conférence",
      "autre": "Autre",
    };

    const subjectLabel = subjectLabels[sujet] || sujet;

    // Email à Alex
    await resend.emails.send({
      from: "L'As de la Vente <contact@asdelavente.fr>",
      to: "alexandre@asdelavente.fr",
      replyTo: email,
      subject: `[asdelavente.fr] ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a2e; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">
              Nouveau message — <span style="color: #c0392b;">asdelavente.fr</span>
            </h1>
          </div>
          <div style="background: #f8f9fa; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #1a1a2e; width: 120px;">Nom</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #374151;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #1a1a2e;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <a href="mailto:${email}" style="color: #c0392b;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; color: #1a1a2e;">Objet</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #374151;">${subjectLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #1a1a2e; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #c0392b; border-radius: 6px; text-align: center;">
              <a href="mailto:${email}" style="color: white; font-weight: bold; text-decoration: none; font-size: 16px;">
                Répondre à ${name} →
              </a>
            </div>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
            Message envoyé depuis asdelavente.fr
          </p>
        </div>
      `,
    });

    // Email de confirmation à l'expéditeur
    await resend.emails.send({
      from: "Alexandre Gagliano <contact@asdelavente.fr>",
      to: email,
      subject: "Votre message a bien été reçu — L'As de la Vente",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a2e; padding: 32px 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0 0 8px; font-size: 24px;">
              L&apos;<span style="color: #c0392b;">As</span> de la Vente
            </h1>
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 14px;">Alexandre Gagliano</p>
          </div>
          <div style="background: white; padding: 32px 24px; border: 1px solid #e9ecef;">
            <p style="color: #1a1a2e; font-size: 18px; font-weight: bold; margin-top: 0;">
              Bonjour ${name}, 👋
            </p>
            <p style="color: #374151; line-height: 1.7;">
              Merci pour votre message. Je l'ai bien reçu et je vous répondrai sous <strong>24 heures</strong>.
            </p>
            <p style="color: #374151; line-height: 1.7;">
              En attendant, n'hésitez pas à découvrir mes livres ou à me suivre sur les réseaux sociaux.
            </p>
            <div style="background: #f8f9fa; border-left: 4px solid #c0392b; padding: 16px; margin: 24px 0; border-radius: 0 6px 6px 0;">
              <p style="margin: 0; color: #374151; font-style: italic;">
                "Il n'y a pas de mauvaise idée. Il n'y a que de mauvais vendeurs."
              </p>
              <p style="margin: 8px 0 0; color: #6b7280; font-size: 13px;">— Alexandre Gagliano</p>
            </div>
            <div style="text-align: center; margin-top: 28px;">
              <a href="https://asdelavente.fr/livre" style="display: inline-block; background: #c0392b; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; margin-right: 8px;">
                Le Livre Original
              </a>
              <a href="https://asdelavente.fr/fitness" style="display: inline-block; background: #1a1a2e; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold;">
                Fitness Edition
              </a>
            </div>
          </div>
          <div style="background: #f8f9fa; padding: 16px; border-radius: 0 0 8px 8px; text-align: center; border: 1px solid #e9ecef; border-top: none;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Alexandre Gagliano —
              <a href="https://asdelavente.fr" style="color: #c0392b;">asdelavente.fr</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Réessayez." },
      { status: 500 }
    );
  }
}
