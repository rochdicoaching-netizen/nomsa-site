export type ServiceCategory = "Therapy" | "Coaching" | "Corporate";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: string;
  tagline: string;
  summary: string;
  approaches: string[];
  whoItsFor: string[];
  whatToExpect: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  image: { src: string; alt: string };
};

export const services: Service[] = [
  {
    slug: "individual-therapy",
    name: "Individual Therapy",
    category: "Therapy",
    icon: "person",
    tagline: "One-on-one support to understand yourself and move forward",
    summary:
      "Individual therapy with Dr Nomsa offers a confidential, non-judgemental space to work through anxiety, low mood, life transitions, self-esteem, grief, or simply the sense that something needs to change. Sessions are tailored to your goals, values, and pace.",
    approaches: ["CBT", "Interpersonal Therapy", "Solution-Focused", "Trauma-Informed Care"],
    whoItsFor: [
      "Adults navigating anxiety, depression, or persistent stress",
      "People experiencing a major life transition or loss",
      "Anyone wanting deeper self-understanding and emotional resilience",
      "Clients who have tried therapy before and want a more integrated approach",
    ],
    whatToExpect: [
      { title: "Initial consultation", detail: "A warm intake session to understand your history, concerns, and what you want from therapy." },
      { title: "Collaborative plan", detail: "Together you'll agree on a therapeutic approach and realistic, measurable goals." },
      { title: "Regular sessions", detail: "Weekly or fortnightly 50-minute sessions, in-person in Johannesburg or via secure telehealth." },
      { title: "Ongoing review", detail: "Progress is reviewed regularly so the approach keeps evolving with you." },
    ],
    faqs: [
      { question: "How long does therapy usually take?", answer: "This varies by person and goal: some clients find clarity in 6–8 sessions, others benefit from longer-term, open-ended work. This is reviewed together, not decided for you." },
      { question: "Is online therapy as effective as in-person?", answer: "Research supports telehealth psychotherapy as comparable to in-person care for most concerns. Dr Nomsa offers both, so you can choose what fits your life." },
    ],
    image: { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80", alt: "A calm, softly lit lounge setting with warm neutral furnishings" },
  },
  {
    slug: "couples-marriage-counselling",
    name: "Couples & Marriage Counselling",
    category: "Therapy",
    icon: "heart",
    tagline: "Rebuilding connection, trust, and communication",
    summary:
      "Whether you're navigating conflict, a breach of trust, or simply drifting apart, couples counselling creates a structured, respectful space for both partners to be heard and to rebuild a relationship that works for both of you.",
    approaches: ["Interpersonal Therapy", "Solution-Focused", "Communication Skills Training"],
    whoItsFor: [
      "Couples experiencing recurring conflict or communication breakdown",
      "Partners rebuilding trust after a rupture",
      "Couples preparing for marriage or a major life change together",
      "Anyone wanting to strengthen an already healthy relationship",
    ],
    whatToExpect: [
      { title: "Joint intake", detail: "An initial session with both partners to understand the relationship's history and current challenges." },
      { title: "Individual check-ins", detail: "Brief individual sessions may be included to understand each partner's perspective fully." },
      { title: "Structured sessions", detail: "Guided conversations that build communication and conflict-resolution skills." },
      { title: "Shared goals", detail: "A relationship roadmap you both agree on and revisit as you progress." },
    ],
    faqs: [
      { question: "What if only one of us wants to attend?", answer: "Individual therapy can be a helpful starting point, and your partner is always welcome to join later when ready." },
      { question: "Do you offer sessions in the evenings?", answer: "Limited evening slots are available for couples balancing work and family commitments, ask when booking." },
    ],
    image: { src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=1200&q=80", alt: "Two people in a warm conversation across a wooden table" },
  },
  {
    slug: "family-therapy",
    name: "Family Therapy",
    category: "Therapy",
    icon: "family",
    tagline: "Healing the system, not just the symptom",
    summary:
      "Family therapy looks at how relationships, roles, and communication patterns within a family contribute to distress, and works with the whole system to create healthier, more supportive dynamics for everyone involved.",
    approaches: ["Systemic Approaches", "Solution-Focused", "Trauma-Informed Care"],
    whoItsFor: [
      "Families navigating conflict, blended-family adjustment, or major change",
      "Parents and children needing a neutral space to communicate",
      "Families supporting a member through mental health or behavioural challenges",
      "Multi-generational households working through cultural or values differences",
    ],
    whatToExpect: [
      { title: "Family intake", detail: "Understanding each member's perspective and the patterns that bring the family to therapy." },
      { title: "Whole-family sessions", detail: "Structured conversations that make space for every voice, including children." },
      { title: "Targeted follow-up", detail: "Individual or sub-group sessions where needed, alongside the family work." },
      { title: "Practical tools", detail: "Concrete strategies the family can practise together between sessions." },
    ],
    faqs: [
      { question: "Do all family members need to attend every session?", answer: "Not necessarily: session composition is planned around what's most useful at each stage of the work." },
      { question: "Is family therapy suitable for young children?", answer: "Yes, sessions are adapted to be age-appropriate, and Dr Nomsa's child and adolescent expertise supports this directly." },
    ],
    image: { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80", alt: "A group sitting together around a table in warm, natural light" },
  },
  {
    slug: "child-adolescent-psychology",
    name: "Child & Adolescent Psychology",
    category: "Therapy",
    icon: "spark",
    tagline: "Age-appropriate support for young people and their families",
    summary:
      "Children and teenagers express distress differently to adults. Dr Nomsa works with young people and their parents together, using age-appropriate techniques to build emotional regulation, confidence, and healthy coping skills.",
    approaches: ["CBT (age-adapted)", "Solution-Focused", "Parent Guidance"],
    whoItsFor: [
      "Children and teens managing anxiety, low mood, or behavioural changes",
      "Young people navigating bullying, school stress, or social difficulties",
      "Families adjusting to divorce, loss, or major transitions",
      "Parents seeking guidance on supporting a struggling child",
    ],
    whatToExpect: [
      { title: "Parent consultation", detail: "An initial conversation with parents/guardians to understand concerns and history." },
      { title: "Building rapport", detail: "Early sessions focus on trust and comfort before deeper work begins." },
      { title: "Age-appropriate techniques", detail: "Play, conversation, and structured tools suited to the child's developmental stage." },
      { title: "Parent partnership", detail: "Regular feedback so caregivers can reinforce progress at home." },
    ],
    faqs: [
      { question: "Will I know what my child discusses in session?", answer: "Confidentiality is balanced with safety and parental involvement. This is explained clearly and age-appropriately at the outset." },
      { question: "What age range do you work with?", answer: "Dr Nomsa works with children from early primary school age through to young adults, adapting the approach accordingly." },
    ],
    image: { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80", alt: "A supportive group conversation in a bright, calm room" },
  },
  {
    slug: "trauma-ptsd-recovery",
    name: "Trauma & PTSD Recovery",
    category: "Therapy",
    icon: "shield",
    tagline: "Trauma-informed, evidence-based care at your own pace",
    summary:
      "Trauma responses can affect how safe we feel in our bodies, our relationships, and the world. Using trauma-informed principles, Dr Nomsa creates a paced, predictable, and safe therapeutic environment to process difficult experiences.",
    approaches: ["Trauma-Informed Care", "CBT", "Solution-Focused"],
    whoItsFor: [
      "Survivors of acute or complex trauma",
      "People experiencing flashbacks, hypervigilance, or avoidance",
      "Clients recovering from accidents, violence, or sudden loss",
      "Anyone whose past continues to intrude on their present wellbeing",
    ],
    whatToExpect: [
      { title: "Safety first", detail: "Early sessions establish stabilisation and coping tools before any deeper trauma work." },
      { title: "Paced processing", detail: "Trauma material is approached gradually, always at a pace you control." },
      { title: "Body-aware techniques", detail: "Attention to how trauma is held physically, not just cognitively." },
      { title: "Integration", detail: "Building a coherent, manageable narrative and restoring a sense of safety." },
    ],
    faqs: [
      { question: "Will I have to describe the traumatic event in detail?", answer: "No. Stabilisation and safety come first, and the pace of any deeper processing is always led by you." },
      { question: "Is this suitable for recent trauma as well as long-past experiences?", answer: "Yes, the approach is adapted for both acute, recent trauma and long-standing, complex trauma histories." },
    ],
    image: { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", alt: "A quiet forest path in soft, filtered light" },
  },
  {
    slug: "anxiety-depression-stress",
    name: "Anxiety, Depression & Stress",
    category: "Therapy",
    icon: "leaf",
    tagline: "Practical relief and tools that last beyond the session",
    summary:
      "Anxiety, depression, and chronic stress are among the most common reasons people seek therapy, and among the most treatable. Dr Nomsa combines proven cognitive-behavioural techniques with compassionate, individualised care.",
    approaches: ["CBT", "Solution-Focused", "Mindfulness-Informed Strategies"],
    whoItsFor: [
      "People experiencing persistent worry, low mood, or burnout",
      "Professionals managing high-pressure roles and chronic stress",
      "Anyone whose anxiety or mood is affecting work, sleep, or relationships",
      "Clients wanting practical tools alongside deeper emotional work",
    ],
    whatToExpect: [
      { title: "Assessment", detail: "Understanding your symptoms, triggers, and how they show up in daily life." },
      { title: "Skills-building", detail: "Evidence-based techniques for managing thoughts, physiology, and behaviour." },
      { title: "Root-cause work", detail: "Exploring the deeper patterns beneath the symptoms, not just symptom management." },
      { title: "Relapse planning", detail: "A concrete plan for maintaining progress after therapy ends." },
    ],
    faqs: [
      { question: "Can therapy help if I'm already on medication?", answer: "Yes, therapy and medication are often complementary. Dr Nomsa can liaise with your prescribing doctor where appropriate." },
      { question: "How quickly will I notice a difference?", answer: "Many clients notice early relief within a few sessions, though lasting change typically develops over several weeks to months." },
    ],
    image: { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80", alt: "Hands writing calmly in a notebook beside an open laptop" },
  },
  {
    slug: "life-coaching",
    name: "Life Coaching",
    category: "Coaching",
    icon: "compass",
    tagline: "Forward-focused coaching for clarity and growth",
    summary:
      "Life coaching is future-focused and goal-oriented, drawing on Neuro Linguistic Programming (NLP) and solution-focused techniques to help you clarify your direction, break through limiting patterns, and take confident action.",
    approaches: ["NLP", "Solution-Focused Coaching", "Goal-Setting Frameworks"],
    whoItsFor: [
      "People at a career or life crossroads wanting clarity",
      "Anyone wanting to break unhelpful patterns and build new habits",
      "Clients seeking accountability and structured personal growth",
      "Those who feel psychologically well but want to thrive, not just cope",
    ],
    whatToExpect: [
      { title: "Discovery session", detail: "Clarifying your values, vision, and what success looks like for you." },
      { title: "Goal architecture", detail: "Breaking ambitious goals into achievable, motivating milestones." },
      { title: "NLP-informed tools", detail: "Reframing limiting beliefs and building empowering mental models." },
      { title: "Accountability", detail: "Regular check-ins to track momentum and adjust the plan as you grow." },
    ],
    faqs: [
      { question: "What's the difference between coaching and therapy?", answer: "Coaching is future-focused and goal-driven for people who are psychologically well; therapy addresses clinical or emotional healing. Dr Nomsa can advise which fits your needs, or blend both." },
      { question: "How long is a typical coaching engagement?", answer: "Most clients start with a 6–12 session package, reviewed and adjusted as goals evolve." },
    ],
    image: { src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=1200&q=80", alt: "A warm, engaged coaching conversation at a wooden table" },
  },
  {
    slug: "christian-counselling",
    name: "Christian Counselling",
    category: "Coaching",
    icon: "cross",
    tagline: "Faith-integrated support, offered by request",
    summary:
      "For clients who wish to integrate their faith into the therapeutic process, Dr Nomsa offers Christian counselling that draws on scripture and spiritual practice alongside sound psychological principles, always respectfully and only when requested.",
    approaches: ["Christian Counselling", "CBT", "Solution-Focused"],
    whoItsFor: [
      "Clients who want their faith actively integrated into therapy",
      "People navigating a crisis of faith, meaning, or spiritual identity",
      "Couples or families seeking faith-aligned guidance",
      "Anyone wanting prayer and scripture woven into emotional healing",
    ],
    whatToExpect: [
      { title: "Values conversation", detail: "An open discussion about how you'd like faith included in your care." },
      { title: "Integrated sessions", detail: "Evidence-based psychology combined with scripture and spiritual reflection, as you prefer." },
      { title: "Respect for boundaries", detail: "Faith integration is always optional and led entirely by your preference." },
      { title: "Whole-person care", detail: "Attention to emotional, relational, and spiritual wellbeing together." },
    ],
    faqs: [
      { question: "Is Christian counselling only for Christians?", answer: "This offering is specifically for clients who request faith integration. All standard therapy and coaching services remain available and fully inclusive of all beliefs." },
      { question: "Can we start with standard therapy and add faith integration later?", answer: "Yes, this can be adjusted at any point. Simply let Dr Nomsa know your preference." },
    ],
    image: { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80", alt: "A calm, warmly lit room with soft natural textures" },
  },
  {
    slug: "executive-coaching",
    name: "Executive Coaching",
    category: "Corporate",
    icon: "briefcase",
    tagline: "Resilient, self-aware leadership grounded in psychology",
    summary:
      "Drawing on nearly three decades of senior HR leadership alongside clinical psychology training, Dr Nomsa coaches executives and senior leaders to lead with greater self-awareness, emotional intelligence, and sustainable resilience.",
    approaches: ["Emotional Intelligence Coaching", "NLP", "Leadership Psychology"],
    whoItsFor: [
      "C-suite and senior executives navigating high-stakes leadership",
      "Leaders experiencing burnout or wanting to prevent it",
      "High-potential managers preparing for expanded leadership roles",
      "Organizations investing in psychologically-informed leadership development",
    ],
    whatToExpect: [
      { title: "Leadership assessment", detail: "Understanding strengths, blind spots, and leadership style." },
      { title: "Tailored coaching plan", detail: "Goals aligned to both personal development and organizational impact." },
      { title: "Regular coaching sessions", detail: "One-on-one sessions combining psychological insight with practical leadership tools." },
      { title: "Impact review", detail: "Measured progress against agreed leadership and wellbeing outcomes." },
    ],
    faqs: [
      { question: "Can this be arranged through our company?", answer: "Yes, executive coaching is commonly commissioned by organizations. See the Corporate Wellness page or use the corporate enquiry form." },
      { question: "Is coaching confidential from the organization?", answer: "Individual session content remains confidential; only agreed-upon progress summaries are shared with sponsoring organizations, as contracted upfront." },
    ],
    image: { src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200&q=80", alt: "A modern boardroom with a city skyline view" },
  },
  {
    slug: "psychological-assessments",
    name: "Psychological Assessments",
    category: "Corporate",
    icon: "clipboard",
    tagline: "Evidence-based assessment for clarity and decision-making",
    summary:
      "Dr Nomsa conducts psychological assessments for individuals, families, and organizations, providing evidence-based clarity to support diagnosis, development planning, or workplace decision-making.",
    approaches: ["Standardised Psychometric Tools", "Clinical Interviewing"],
    whoItsFor: [
      "Individuals seeking diagnostic clarity for anxiety, mood, or attention concerns",
      "Parents seeking developmental or learning assessments for a child",
      "Organizations conducting leadership or role-fit assessments",
      "Legal or medical referrals requiring psychological evaluation",
    ],
    whatToExpect: [
      { title: "Referral & intake", detail: "Clarifying the purpose and scope of the assessment required." },
      { title: "Testing sessions", detail: "Standardised, validated psychometric instruments administered professionally." },
      { title: "Scoring & analysis", detail: "Rigorous interpretation against established clinical or occupational norms." },
      { title: "Feedback & report", detail: "A clear feedback session followed by a comprehensive written report." },
    ],
    faqs: [
      { question: "How long does an assessment take?", answer: "This depends on the type of assessment: most take one to three sessions plus report preparation time." },
      { question: "Can assessment reports be used for medical aid or legal purposes?", answer: "Yes, reports are prepared to a professional standard suitable for medical aid, educational, or legal use where required." },
    ],
    image: { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80", alt: "Documents and a laptop laid out for review on a desk" },
  },
  {
    slug: "workshops-training",
    name: "Workshops & Training",
    category: "Corporate",
    icon: "users",
    tagline: "Skills-building experiences for healthier, higher-performing teams",
    summary:
      "From half-day wellness workshops to multi-session leadership training, Dr Nomsa designs and facilitates evidence-based programmes that build emotional intelligence, resilience, and psychological safety across teams and organizations.",
    approaches: ["Adult Learning Principles", "Emotional Intelligence Frameworks", "Applied Psychology"],
    whoItsFor: [
      "HR and People teams building wellness or resilience programmes",
      "Leadership teams wanting shared language and tools for healthy culture",
      "Organizations navigating change, restructuring, or conflict",
      "Teams wanting practical, interactive (not lecture-style) learning",
    ],
    whatToExpect: [
      { title: "Needs assessment", detail: "Understanding your team's specific challenges and objectives." },
      { title: "Custom design", detail: "A workshop built around your context, not an off-the-shelf template." },
      { title: "Interactive facilitation", detail: "Practical, engaging sessions grounded in psychological research." },
      { title: "Follow-through resources", detail: "Take-home tools and optional follow-up support to embed learning." },
    ],
    faqs: [
      { question: "Can workshops be delivered virtually?", answer: "Yes, workshops can be delivered in-person, virtually, or in a hybrid format depending on your team's needs." },
      { question: "What topics do you cover?", answer: "Common topics include burnout prevention, emotional intelligence, change resilience, conflict resolution, and psychologically safe leadership, always tailored to your organization." },
    ],
    image: { src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80", alt: "A team workshop in progress around a table with laptops and notes" },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
