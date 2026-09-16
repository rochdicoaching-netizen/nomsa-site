export const siteConfig = {
  name: "Dr Nomsa Ntshingila Psychological Services",
  shortName: "Dr Nomsa Ntshingila",
  tagline: "Healing Minds. Empowering Lives. Transforming Organizations.",
  description:
    "Clinical Psychologist, Life Coach, Christian Counsellor and former HR Executive helping individuals, families, leaders and organizations thrive through evidence-based psychotherapy, coaching and organizational consulting.",
  url: "https://drnomsa.co.za",
  phone: "+27 82 774 5608",
  phoneHref: "tel:+27827745608",
  email: "info@drnomsa.co.za",
  emailHref: "mailto:info@drnomsa.co.za",
  corporateEmail: "corporate@drnomsa.co.za",
  location: "Johannesburg, South Africa · Telehealth available worldwide",
  company: "Practising through FAITH & HS",
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  links: NavLink[];
};

export const primaryNav: NavGroup[] = [
  { label: "Home", href: "/", links: [] },
  {
    label: "About",
    href: "/about",
    links: [],
  },
  {
    label: "Therapy & Coaching",
    href: "/services",
    links: [
      { label: "Individual Therapy", href: "/services/individual-therapy", description: "One-on-one psychotherapy for adults" },
      { label: "Couples & Marriage Counselling", href: "/services/couples-marriage-counselling", description: "Strengthen connection and communication" },
      { label: "Family Therapy", href: "/services/family-therapy", description: "Healing systems, not just individuals" },
      { label: "Child & Adolescent Psychology", href: "/services/child-adolescent-psychology", description: "Age-appropriate support for young people" },
      { label: "Trauma & PTSD Recovery", href: "/services/trauma-ptsd-recovery", description: "Trauma-informed, evidence-based care" },
      { label: "Anxiety, Depression & Stress", href: "/services/anxiety-depression-stress", description: "Practical relief and lasting tools" },
      { label: "Life Coaching", href: "/services/life-coaching", description: "NLP-informed coaching for growth" },
      { label: "Christian Counselling", href: "/services/christian-counselling", description: "Faith-integrated support, by request" },
    ],
  },
  {
    label: "Organizations",
    href: "/corporate-wellness",
    links: [
      { label: "Corporate Wellness", href: "/corporate-wellness", description: "Employee wellbeing at scale" },
      { label: "Executive Coaching", href: "/services/executive-coaching", description: "Resilient, self-aware leadership" },
      { label: "Psychological Assessments", href: "/services/psychological-assessments", description: "Evidence-based diagnostic clarity" },
      { label: "Workshops & Training", href: "/services/workshops-training", description: "Skills-building for teams" },
    ],
  },
  { label: "Contact", href: "/contact", links: [] },
];

export const footerColumns = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Dr Nomsa", href: "/about" },
      { label: "Corporate Wellness", href: "/corporate-wellness" },
      { label: "Contact", href: "/contact" },
      { label: "Book an Appointment", href: "/contact#book" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Individual Therapy", href: "/services/individual-therapy" },
      { label: "Couples & Marriage Counselling", href: "/services/couples-marriage-counselling" },
      { label: "Trauma & PTSD Recovery", href: "/services/trauma-ptsd-recovery" },
      { label: "Life Coaching", href: "/services/life-coaching" },
      { label: "Executive Coaching", href: "/services/executive-coaching" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy (POPIA)", href: "/legal/privacy-policy" },
      { label: "Terms & Conditions", href: "/legal/terms" },
      { label: "Cancellation Policy", href: "/legal/cancellation-policy" },
      { label: "Payment Policy", href: "/legal/payment-policy" },
      { label: "Informed Consent", href: "/legal/informed-consent" },
      { label: "Telehealth Consent", href: "/legal/telehealth-consent" },
      { label: "Confidentiality", href: "/legal/confidentiality" },
      { label: "Emergency Disclaimer", href: "/legal/emergency-disclaimer" },
    ],
  },
];

export const emergencyNotice =
  "If you are in crisis or experiencing a medical or psychiatric emergency, please call SADAG on 0800 567 567, Lifeline on 0861 322 322, or your nearest emergency room. This website is not monitored for emergencies.";
