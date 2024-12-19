// src/lib/email.ts
interface EmailData {
    to: string;
    position: string;
    name: string;
  }
  
  export async function sendApplicationConfirmation({ to, position, name }: EmailData) {
    try {
      // Here you would integrate with your email service (SendGrid, AWS SES, etc.)
      // For now, let's just log it
      console.log(`
        Would send email to: ${to}
        Subject: Application Received - ${position}
        Body: Thank you ${name} for applying to the ${position} position...
      `);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }