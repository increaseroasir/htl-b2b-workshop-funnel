/* ── B2B Hot Tub Launch ─ Workshop Funnel Data ───────────────────── */

export interface QuizOption {
  value: string;
  emoji: string;
  label: string;
}

export interface QuizStep {
  stepLabel: string;
  question: string;
  options: QuizOption[];
  storageKey: string;
  next: string;
  interstitial?: string;
  interstitialMs?: number;
}

export interface TrustChip {
  label: string;
  tone: 'green' | 'amber' | 'blue' | 'dark';
}

export interface FunnelData {
  brand: { name: string };

  hero: {
    eyebrow: string;
    scarcity: { was: string; now: string; remaining: string };
    headline: string;
    subhead: string;
    trustLine: string;
    marquee: string[];
  };

  cta: { href: string; label: string };

  quiz: QuizStep[];

  ticket: {
    fields: {
      name: { emoji: string; autocomplete: string; placeholder: string };
      email: { emoji: string; autocomplete: string; placeholder: string };
    };
    submit: string;
    submitWhen: string;
    submitPending: string;
    errors: { generic: string; name: string; email: string };
  };

  faq: { q: string; a: string }[];

  trust: {
    chips: TrustChip[];
    rating: string;
  };

  legal: {
    termsUrl: string;
    termsLabel: string;
    privacyUrl: string;
    privacyLabel: string;
  };

  confirmed: {
    headline: string;
    subhead: string;
    event: {
      title: string;
      date: string;
      time: string;
      timezone: string;
    };
  };
}

/* ── funnel data ──────────────────────────────────────────────────── */

export const funnel: FunnelData = {
  brand: {
    name: 'Hot Tub Launch',
  },

  hero: {
    eyebrow: 'Free Live Workshop · Hot Tub Dealers Only',
    scarcity: {
      was: '$497',
      now: 'Free',
      remaining: '6 seats left',
    },
    headline: 'The AI System That Fills Your Showroom With Ready-to-Buy Leads',
    subhead:
      'A 2-hour live workshop showing hot tub and swim spa dealers how to use AI follow-up, automated booking, and Meta ads to sell more tubs — without hiring a single extra salesperson.',
    trustLine: 'Trusted by 40+ dealers across North America',
    marquee: [
      'AI Follow-Up',
      'Speed-to-Lead',
      'Showroom Bookings',
      'Meta Ads',
      'Pipeline Automation',
      'Voice AI',
      'SMS Nurture',
      'Offline Conversions',
    ],
  },

  cta: { href: '/q/1', label: 'Get Your Free Seat' },

  quiz: [
    {
      stepLabel: 'Step 1 of 3',
      question: 'Best describes your business?',
      options: [
        { value: 'single-store', emoji: '🏪', label: 'Single store' },
        { value: 'multi-location', emoji: '🏬', label: '2-5 locations' },
        { value: 'online-plus-showroom', emoji: '🖥️', label: 'Online + showroom' },
        { value: 'manufacturer', emoji: '🏭', label: 'Manufacturer / distributor' },
      ],
      storageKey: 'businessType',
      next: '/q/2',
      interstitial: 'Analyzing your business model…',
      interstitialMs: 900,
    },
    {
      stepLabel: 'Step 2 of 3',
      question: 'How much are you spending on ads per month?',
      options: [
        { value: 'none', emoji: '🚫', label: 'Not running ads' },
        { value: 'under-3k', emoji: '💵', label: 'Under $3,000' },
        { value: '3k-10k', emoji: '💰', label: '$3,000 – $10,000' },
        { value: 'over-10k', emoji: '🏦', label: 'Over $10,000' },
      ],
      storageKey: 'adSpend',
      next: '/q/3',
      interstitial: 'Calculating your growth potential…',
      interstitialMs: 900,
    },
    {
      stepLabel: 'Step 3 of 3',
      question: 'What is your biggest challenge right now?',
      options: [
        { value: 'leads', emoji: '📉', label: 'Not enough leads' },
        { value: 'follow-up', emoji: '📞', label: 'Slow follow-up' },
        { value: 'no-shows', emoji: '🙈', label: 'No-shows and ghosting' },
        { value: 'tracking', emoji: '📊', label: 'Can\'t track what works' },
      ],
      storageKey: 'challenge',
      next: '/ticket',
      interstitial: 'Building your custom plan…',
      interstitialMs: 1100,
    },
  ],

  ticket: {
    fields: {
      name: { emoji: '👤', autocomplete: 'given-name', placeholder: 'First name' },
      email: { emoji: '✉️', autocomplete: 'email', placeholder: 'Business email' },
    },
    submit: 'Reserve My Free Seat',
    submitWhen: 'Takes 10 seconds',
    submitPending: 'Reserving…',
    errors: {
      generic: 'Something went wrong. Please try again.',
      name: 'Please enter your name',
      email: 'Please enter a valid email',
    },
  },

  faq: [
    {
      q: 'Who is this for?',
      a: 'Hot tub and swim spa dealers who want more showroom traffic, faster lead follow-up, and a system that runs without hiring more staff.',
    },
    {
      q: 'What will I learn?',
      a: 'How to set up AI-powered speed-to-lead, automated SMS/email nurture, Meta ads that drive real showroom visits, and a pipeline that tracks every lead from click to close.',
    },
    {
      q: 'Is this a sales pitch?',
      a: 'You will see the full system live. If it makes sense for your store, we will show you how to get started. No pressure, no tricks.',
    },
    {
      q: 'How much does it cost?',
      a: 'The workshop is free. We run it because dealers who see the system in action tend to want it installed. That is the whole business model.',
    },
    {
      q: 'What if I already run Meta ads?',
      a: 'Even better. We will show you how to add offline conversion tracking so you can see which ads actually sold tubs — not just got clicks.',
    },
  ],

  trust: {
    chips: [
      { label: '40+ Dealers', tone: 'green' },
      { label: 'AI-Powered', tone: 'blue' },
      { label: 'Live Workshop', tone: 'amber' },
      { label: 'No Contracts', tone: 'dark' },
    ],
    rating: '★★★★★ 4.9/5 from dealer owners',
  },

  legal: {
    termsUrl: '#terms',
    termsLabel: 'Terms',
    privacyUrl: '#privacy',
    privacyLabel: 'Privacy',
  },

  confirmed: {
    headline: 'You are in.',
    subhead:
      'Your seat is reserved. Check your email for the workshop link and calendar invite. We will see you there.',
    event: {
      title: 'Hot Tub Launch — AI Sales Workshop',
      date: 'Wednesday, August 27, 2026',
      time: '2:00 PM – 4:00 PM',
      timezone: 'America/New_York',
    },
  },
};
