const MODE = process.env.NEXT_PUBLIC_PROFILE_MODE;

interface Profile {
  full: string /* site SEO description, name */;
  first: string /* hero only */;
  last: string /* any last name */;
  email: string /* re-direct link */;
  github: string /* re-direct link */;
  linkedin: string /* re-direct link */;
}

interface Site {
  title: string /* tab title */;
  titleTemplate: string /* SEO title */;
  description: string /* SEO description */;
  url: string /* search link */;
}

const realProfile = {
  full: "Poomrapee",
  first: "Poom",
  last: "Chuthamsatid",
  email: "poomon2542@gmail.com",
  github: "https://github.com/Poomon001",
  linkedin: "https://www.linkedin.com/in/poomrapee-pete-chuthamsatid-04b31119a",
};

const englishProfile = {
  full: "pete",
  first: "Pete (Poom)",
  last: "Chuthamsatid",
  email: "pete.chutham@gmail.com",
  github: "https://github.com/Poomon001",
  linkedin: "https://www.linkedin.com/in/poomrapee-pete-chuthamsatid-04b31119a",
};

export const profile: Profile = MODE === "english" ? englishProfile : realProfile;

const realSite = {
  title: "P. Chuthamsatid - Software Developer",
  titleTemplate: "poomrapee.com",
  description: `${profile.full}'s portfolio showcasing software development expertise`,
  url: "https://www.poomrapee.com",
};

const englishSite = {
  title: "P. Chuthamsatid - Software Developer",
  titleTemplate: "petec.me",
  description: `${profile.full}'s portfolio showcasing software development expertise`,
  url: "https://www.petec.me",
};

export const site: Site = MODE === "english" ? englishSite : realSite;

/* footer only */
export const footer = {
  portfolio: "https://github.com/Poomon001/portfolio",
  credit: `Created by ${profile.first} Chuthamsatid powered by Next.js and TypeScript`,
};

/* context projects */
export const project = {
  nightrader: "https://github.com/Poomon001/day-trader",
  biasanalyzer: "https://github.com/Poomon001/Bias-in-Word-Embeddings",
  phishingEmailEvaluator: "https://github.com/Poomon001/NewHack-2021",
  coverletterGenerator: "https://github.com/Poomon001/cover-letter-maker",
  FactChecker: "https://github.com/Poomon001/auto-fact-checker",
};
