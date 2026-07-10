// Central environment variable configuration
// WARNING: All VITE_ prefixed variables are bundled into client JS and publicly visible.
// Never store secrets here. JotForm IDs and public URLs are safe.

const getEnv = (key: string, fallback?: string): string => {
  const value = import.meta.env[key] ?? fallback;
  if (!value) {
    console.warn(`Environment variable ${key} is not set. Using fallback.`);
    return '';
  }
  return value;
};

export const env = {
  siteUrl: getEnv('VITE_SITE_URL', 'https://transitiontrails.org'),
  rss2jsonUrl: getEnv('VITE_RSS2JSON_URL', 'https://api.rss2json.com/v1/api.json'),
  substackFeedUrl: getEnv('VITE_SUBSTACK_FEED_URL', 'https://transitiontrails.substack.com/feed'),

  // JotForm IDs (public — these are form IDs, not secrets)
  jotform: {
    waitlist: getEnv('VITE_JOTFORM_WAITLIST', '261684070494058'),
    contact: getEnv('VITE_JOTFORM_CONTACT', '261877821935066'),
    nonprofitAssessment: getEnv('VITE_JOTFORM_NONPROFIT_ASSESSMENT', '261683366693066'),
    coachApplication: getEnv('VITE_JOTFORM_COACH_APPLICATION', '261876005299062'),
    boardApplication: getEnv('VITE_JOTFORM_BOARD_APPLICATION', '261884676222061'),
    scholarshipApplication: getEnv('VITE_JOTFORM_SCHOLARSHIP_APPLICATION', '261877164594067'),
    trailForward: getEnv('VITE_JOTFORM_TRAIL_FORWARD', '261877267351062'),
    expeditionInterest: getEnv('VITE_JOTFORM_EXPEDITION', '261877267351062'),
    tomInterest: getEnv('VITE_JOTFORM_TOM_INTEREST', '261895924962070'),
    volunteer: getEnv('VITE_JOTFORM_VOLUNTEER', '261885593929074'),
    recruiterPartnership: getEnv('VITE_JOTFORM_RECRUITER', '261877200550050'),
    employerPartnership: getEnv('VITE_JOTFORM_EMPLOYER', '261876908147066'),
  }
} as const;

export const jotformUrl = (formId: string) => `https://form.jotform.com/${formId}`;
