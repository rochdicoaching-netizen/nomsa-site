export type LegalPage = {
  slug: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

const practiceName = "Dr Nomsa Ntshingila Psychological Services";

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy (POPIA)",
    updated: "17 July 2026",
    sections: [
      {
        heading: "Our commitment",
        body: [
          `${practiceName} is committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA). This policy explains what information we collect, why, and how it is safeguarded.`,
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "Contact details (name, email, phone number) submitted through enquiry, booking, or corporate forms.",
          "Clinical and health information shared during intake, sessions, or assessments, collected only with informed consent.",
          "Basic usage data (such as pages visited) to help us maintain and improve the website.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "To respond to enquiries and schedule appointments.",
          "To provide clinical, coaching, or consulting services and maintain accurate records as required by professional and legal standards.",
          "To communicate appointment reminders, invoices, and relevant practice updates.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You may request access to, correction of, or deletion of your personal information at any time, subject to our professional record-keeping obligations. Contact the Information Officer at the details on our Contact page to exercise these rights.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    updated: "17 July 2026",
    sections: [
      {
        heading: "Use of this website",
        body: [
          `This website is provided by ${practiceName} for informational purposes and to facilitate enquiries and appointment requests. It does not replace professional consultation, diagnosis, or emergency care.`,
        ],
      },
      {
        heading: "Appointments and fees",
        body: [
          "Appointment requests submitted online are confirmed by a member of the team before being finalised. Session fees, medical aid arrangements, and payment terms are confirmed prior to your first appointment.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "While reasonable care is taken to keep information on this site accurate and current, no warranty is given as to its completeness. Nothing on this website constitutes a therapeutic or coaching relationship until a formal engagement has been agreed.",
        ],
      },
    ],
  },
  {
    slug: "cancellation-policy",
    title: "Cancellation Policy",
    updated: "17 July 2026",
    sections: [
      {
        heading: "Notice period",
        body: [
          "We request at least 24 hours' notice for cancelling or rescheduling an appointment. This allows the time to be offered to another client who may need it.",
        ],
      },
      {
        heading: "Late cancellations and no-shows",
        body: [
          "Cancellations made with less than 24 hours' notice, or missed appointments without notice, may be subject to a cancellation fee as agreed at the start of your engagement.",
        ],
      },
    ],
  },
  {
    slug: "payment-policy",
    title: "Payment Policy",
    updated: "17 July 2026",
    sections: [
      {
        heading: "Payment methods",
        body: [
          "Session fees are payable via EFT prior to or at the time of your appointment, unless alternative arrangements have been agreed in writing.",
        ],
      },
      {
        heading: "Medical aid",
        body: [
          "Many medical aid plans offer psychology benefits. Please confirm your specific benefits with your medical aid provider. We are happy to provide the necessary invoices and codes to support your claim.",
        ],
      },
      {
        heading: "Corporate billing",
        body: [
          "For organizational engagements, invoicing terms are agreed as part of the corporate proposal and contract prior to commencement of work.",
        ],
      },
    ],
  },
  {
    slug: "informed-consent",
    title: "Informed Consent",
    updated: "17 July 2026",
    sections: [
      {
        heading: "Before we begin",
        body: [
          "Before starting therapy, coaching, or an assessment, you will be given clear information about the nature of the service, its likely benefits and limitations, confidentiality and its exceptions, and fees, so that you can make an informed decision to proceed.",
        ],
      },
      {
        heading: "Voluntary participation",
        body: [
          "Participation in therapy or coaching is voluntary. You may ask questions at any time and may choose to pause or end the engagement, subject to the cancellation policy above.",
        ],
      },
    ],
  },
  {
    slug: "telehealth-consent",
    title: "Telehealth Consent",
    updated: "17 July 2026",
    sections: [
      {
        heading: "How online sessions work",
        body: [
          "Telehealth sessions are conducted via a secure video platform. You will need a private, quiet space, a stable internet connection, and a device with camera and microphone access.",
        ],
      },
      {
        heading: "Risks and suitability",
        body: [
          "While telehealth is effective for most concerns, technology can occasionally fail, and some presentations are better suited to in-person care. This will be discussed with you and reviewed on an ongoing basis.",
        ],
      },
    ],
  },
  {
    slug: "confidentiality",
    title: "Confidentiality",
    updated: "17 July 2026",
    sections: [
      {
        heading: "Our commitment to confidentiality",
        body: [
          "All information shared in therapy, coaching, or assessment sessions is kept confidential in accordance with HPCSA ethical guidelines and POPIA, except in the limited circumstances described below.",
        ],
      },
      {
        heading: "Legal and safety exceptions",
        body: [
          "Confidentiality may be limited where there is a risk of serious harm to yourself or others, where disclosure is required by law (such as suspected child abuse), or where a court orders release of records. These exceptions are explained in full before therapy begins.",
        ],
      },
      {
        heading: "Corporate engagements",
        body: [
          "Where services are commissioned by an employer, individual session content remains confidential. Only aggregate or outcome-level information agreed in advance is shared with the sponsoring organization.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    updated: "17 July 2026",
    sections: [
      {
        heading: "How we use cookies",
        body: [
          "This website uses minimal, essential cookies required for core functionality. Where analytics or preference cookies are used in future, you will be asked for consent in line with applicable law.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can control or delete cookies through your browser settings at any time. Disabling cookies may affect some website functionality.",
        ],
      },
    ],
  },
  {
    slug: "emergency-disclaimer",
    title: "Emergency Disclaimer",
    updated: "17 July 2026",
    sections: [
      {
        heading: "This website is not for emergencies",
        body: [
          "This website, including its contact form and online booking system, is not monitored continuously and must not be used in a medical or psychiatric emergency.",
        ],
      },
      {
        heading: "If you are in crisis",
        body: [
          "If you or someone you know is in crisis or in immediate danger, please call SADAG on 0800 567 567, Lifeline on 0861 322 322, South African Police Services on 10111, or go to your nearest emergency room immediately.",
        ],
      },
    ],
  },
];

export function getLegalPageBySlug(slug: string) {
  return legalPages.find((page) => page.slug === slug);
}
