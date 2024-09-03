import { Resend } from 'resend';
import * as React from 'react';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
  try {
    const { email, name, body } = await req.json();
    const { data, error } = await resend.emails.send({
      from: 'noreply@mizocae.com',
      to: ['aadilmansoor.am@gmail.com'],
      subject: "Enquiry",
      react: EmailTemplate({ name, email, body }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}