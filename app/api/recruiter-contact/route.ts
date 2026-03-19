import { NextResponse } from "next/server";

type RecruiterPayload = {
  name?: string;
  position?: string;
  company?: string;
  email?: string;
  contact?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RecruiterPayload;

    const name = body.name?.trim();
    const position = body.position?.trim();
    const company = body.company?.trim();
    const email = body.email?.trim();
    const contact = body.contact?.trim();

    if (!name || !position || !company || !email || !contact) {
      return NextResponse.json(
        { message: "Please fill in all required details." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // TODO: Integrate this payload with your DB or email service for admin follow-up.
    console.info("[Recruiter Contact Request]", {
      name,
      position,
      company,
      email,
      contact,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Details submitted successfully. Our placement cell admin will contact you soon.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to submit details right now. Please try again." },
      { status: 500 }
    );
  }
}
