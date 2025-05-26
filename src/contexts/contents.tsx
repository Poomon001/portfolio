import React from "react";
import { profile, project } from "@/lib/config";

interface HeroContent {
  heading: string;
  hook: string;
  brief: string;
}

interface ExperienceContent {
  id: string;
  company: string;
  position: string;
  location: string;
  date: string;
  brief: React.ReactNode;
  achievements: string[] | React.ReactNode[];
  isWorkExperience: boolean;
  skills: string[];
}

interface EducationContent {
  id: string;
  description: string | React.ReactNode;
  date: string;
  isWorkExperience: boolean;
}

interface TestimonialContent {
  id: string;
  testimonial: string;
  source: string;
  company: string;
  date: string;
}

interface ProjectContent {
  id: string;
  title: string;
  description: string | React.ReactNode;
  url: string;
  skills: string[];
  image: string;
}

interface AwardContent {
  id: string;
  icon: string;
  isSquare: boolean;
  title: string;
  year: string;
  brief: string;
}

const heroContent: HeroContent = {
  heading: `Hi, I'm ${profile.first}`,
  hook: "Building robust systems that bridge software logic with business needs.",
  brief:
    "I am a software engineer delivering data-intensive, end-to-end solutions for e-commerce tech, AI-driven platforms, and data pipelines.",
};

const aboutMe = (
  <>
    <p>
      I build full-stack, data-intensive systems that transform complex data into business solutions. My engineering
      background drives me to break down problems, evaluate trade-offs, and build robust systems—whether in production
      or at hackathons, where I push my limits and collaborate with other fellows.
    </p>

    <p>
      I chose software engineering because I love bridging innovation with tangible outcomes. I enjoy the moment when
      abstract ideas transform into real-world solutions. That’s why I served as a teaching assistant for Algorithms and
      Data Structures II, simplifying complex technical concepts to help others translate abstract ideas to practical
      applications.
    </p>

    <p>Outside of coding, you’ll find me playing ping pong or exploring new restaurants across different cities.</p>
  </>
);

const experienceContent: (ExperienceContent | EducationContent)[] = [
  {
    id: "01052025",
    description: (
      <>
        Graduating: Bachelor of Software Engineering <strong>With Distinction (First Class Honours)</strong> –
        University of Victoria.
      </>
    ),
    date: "May 2025 - Jun 2025",
    isWorkExperience: false,
  },
  {
    id: "01012025",
    company: "Kinsol Inc",
    position: "AI Software Developer Intern",
    location: "Victoria BC, Canada",
    date: "Jan 2025 - Apr 2025",
    brief: (
      <p>
        <strong>
          Kinsol needed to transform its proof-of-concept marine diversity classification pipeline into a
          production-ready system for the first customer demo.
        </strong>
        &nbsp;I engineered the processing pipeline to ingest raw videos, perform object tracking, and automatically
        extract highlight frames, enabling a successful live demonstration of the product.
      </p>
    ),
    achievements: [
      <p>
        Drove development of the YOLOv8 vision-based pipeline using Python, Parallelization, and Google Cloud securing{" "}
        <strong>$30,000</strong> in initial funding.
      </p>,
      <p>
        Optimized annotation runtime by <strong>72%</strong> for <strong>30,000+</strong> videos using pre-filtering,
        distributed computing, parallelism, and GPUs.
      </p>,
      <p>Dockerized microservices to stabilize pipeline processing across different machines.</p>,
      <p>
        Delivered recurring video analysis using NumPy, Matplotlib, and Pandas to validate AI vision models and improve
        training outcomes.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    id: "01092024",
    company: "Arista Networks",
    position: "Software Developer Intern",
    location: "Vancouver BC, Canada",
    date: "Sep 2024 - Dec 2024",
    brief: (
      <p>
        <strong>
          Arista required a simplified solution for ISO-based configuration and automated VM first-boot workflows to
          reduce operational overhead and enhance the customer experience.
        </strong>
        &nbsp;I built a workflow for ISO configuration validation, a declarative preview system for ISO metadata and
        contents, and a prototype for declarative ISO generation, improving user interaction efficiency.
      </p>
    ),
    achievements: [
      <p>
        Developed workflows for declarative ISO configuration previews and automated ISO generation using Kotlin,
        Python, and Docker to improve provisioning process.
      </p>,
      <p>Enforced Arista network security standards by implementing ISO validation and YANG protocols.</p>,
      <p>
        Implemented unit and smoke testing suites with Mockito and Pytest, integrated into Jenkins CI pipelines to
        ensure reliability of the VM first-boot system.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    id: "01052024",
    description: (
      <>
        Teaching Assistant: Led weekly Java labs for <strong>100+</strong> students in the{" "}
        <strong>Algorithms II</strong> course while studying full-time.
      </>
    ),
    date: "May 2024 - Aug 2024",
    isWorkExperience: false,
  },
  {
    id: "01012024",
    description: "Ongoing: Continued Software Engineering studies at the University of Victoria.",
    date: "Jan 2024 - Apr 2024",
    isWorkExperience: false,
  },
  {
    id: "01052023",
    description: (
      <>
        Teaching Assistant: Led weekly Java labs for <strong>200+</strong> students in the{" "}
        <strong>Algorithms II</strong> course while studying full-time.
      </>
    ),
    date: "May 2023 - Dec 2023",
    isWorkExperience: false,
  },
  {
    id: "01092022",
    company: "Visier Inc",
    position: "Software Developer Intern",
    location: "Vancouver BC, Canada",
    date: "Sep 2022 - Apr 2023",
    brief: (
      <p>
        <strong>
          Visier faced increasing client demand for a scalable data export and a secure solution for managing and
          anonymizing sensitive customer data.
        </strong>
        &nbsp;I upgraded the data export system to handle large-scale, multi-file operations and developed a secure
        de-identification pipeline to ensure data privacy.
      </p>
    ),
    achievements: [
      <p>
        Developed a secure data pipeline using Scala, TypeScript, SQL, Docker, and AWS S3 to validate and structure
        customer data from <strong>15,000+</strong> organizations.
      </p>,
      <p>
        Created CSV/XLSX/Parquet export options with single, multiple, and combined modes to support multi-file download
        needs.
      </p>,
      <p>
        Reduced network traffic by <strong>90%</strong> using efficient zip compression for large-scale data exports.
      </p>,
      <p>
        Built a de-identification pipeline to secure <strong>12M+</strong> records with backup/delete/restore workflows.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    id: "01012022",
    description: "Ongoing: Continued Software Engineering studies at the University of Victoria.",
    date: "Jan 2022 - Aug 2022",
    isWorkExperience: false,
  },
  {
    id: "01092021",
    company: "VertiGIS North America",
    position: "Software Test Engineer Intern",
    location: "Victoria BC, Canada",
    date: "Sep 2021 - Dec 2021",
    brief: (
      <p>
        <strong>
          VertiGIS needed to ensure that Patch 5.15 was stable and production-ready for the upcoming release of the
          Geocortex Web/Mobile Designer.
        </strong>
        &nbsp;I created automated tests for new features and executed comprehensive regression testing to guarantee the
        patch quality.
      </p>
    ),
    achievements: [
      <p>
        Created automated tests with TypeScript, WebdriverIO, and Jest to improve test coverage of Geocortex Web/Mobile
        Designer software.
      </p>,
      <p>
        Boosted QA bug detection coverage from <strong>50%</strong> to <strong>64%</strong>, increasing team
        productivity by <strong>14%</strong> during Patch 5.15 regression testing.
      </p>,
      <p>
        Executed functional tests—addressing <strong>30+</strong> issues—to enhance the product quality.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    id: "01052021",
    description: "Ongoing: Continued Software Engineering studies at the University of Victoria.",
    date: "May 2021 - Aug 2021",
    isWorkExperience: false,
  },
  {
    id: "01012021",
    company: "Ruboss Technology",
    position: "Software Developer Intern",
    location: "Victoria BC, Canada",
    date: "Jan 2021 - Apr 2021",
    brief: (
      <p>
        <strong>
          Ruboss’ e-commerce platform (Leanpub) relied on outdated legacy technologies, requiring a next-generation
          rebuild to strengthen long-term competitiveness.
        </strong>
        &nbsp;I upgraded the legacy codebase with modern frameworks, making the platform easier to maintain and adapt
        for future needs.
      </p>
    ),
    achievements: [
      <p>
        Migrated Leanpub storefront to modern stacks with TypeScript, React Hooks, EmotionJS, and GraphQL/Apollo to
        support <strong>2M+</strong> users.
      </p>,
      <p>Created reusable React components to reduce redundancy in hierarchical navigation menu.</p>,
      <p> Integrated CSS and JavaScript code with EmotionJS to increase their readability and reusability.</p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    id: "01082019",
    description: "Beginning: Bachelor of Software Engineering – University of Victoria.",
    date: "Sep 2019 - Dec 2020",
    isWorkExperience: false,
  },
];

const testimonialContent: TestimonialContent[] = [
  {
    id: "01",
    testimonial:
      "I was particularly impressed by his structured approach to prototyping—Poom thoughtfully evaluated multiple options and clearly laid out the trade-offs.",
    source: "Recommendation",
    company: "Kinsol",
    date: "Apr 2025",
  },
  {
    id: "02",
    testimonial:
      "Poom... managed the release of a critical feature, followed best coding practices, took on feedback in an agile way, and became an effective software developer.",
    source: "Final Evaluation",
    company: "Visier",
    date: "Apr 2023",
  },
  {
    id: "03",
    testimonial:
      "Poom demonstrated well that he stepped out of his comfort zone by learning new domains, new technology stacks, and different software development practices—all highly focused on quality.",
    source: "Final Evaluation",
    company: "Arista Networks",
    date: "Dec 2024",
  },
  {
    id: "04",
    testimonial:
      "Poom performed excellent QA, ensuring high quality for the 5.15 release through meticulous testing... He created several automated tests, many required novel solution designs.",
    source: "Final Evaluation",
    company: "VertiGIS",
    date: "Jan 2022",
  },
];

const projectContent: ProjectContent[] = [
  {
    id: "05",
    title: "Bias Detection in LLMs",
    description: (
      <>
        Software that analyzes 100,000+ unique words to quantify gender and racial biases in large language models.
        Visualizes the patterns across embeddings from Microsoft, OpenAI, Google, Cohere, and BGE —{" "}
        <strong>this research published by Springer and honored by UVic with the JCURA award</strong>.
      </>
    ),
    url: project.biasanalyzer,
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "LLM API"],
    image: "/project/BiasAnalyzer.png",
  },
  {
    id: "04",
    title: "Stock Trading Platform",
    description: (
      <>
        A microservices trading platform that processes authentication, FIFO order matching, order execution, and asset
        transactions at scale. Supports <strong>5,000+</strong> concurrent users and over <strong>100,000+</strong>{" "}
        transactions.
      </>
    ),
    url: project.nightrader,
    skills: ["Go", "React", "PostgreSQL", "Docker", "RabbitMQ", "JMeter"],
    image: "/project/Nightrader.png",
  },
  {
    id: "03",
    title: "Phishing Email Evaluator",
    description: (
      <>
        An email analysis tool that evaluates potential phishing attempts using algorithms based on Social Engineering
        Red Flags. Processes .eml files and visualizes risk assessments through interactive charts and graphs.
      </>
    ),
    url: project.phishingEmailEvaluator,
    skills: ["Python", "Flask API", "JavaScript", "React", "Heroku"],
    image: "/project/PhishingEvaluator.png",
  },
  {
    id: "02",
    title: "Cover Letter Generator",
    description: (
      <>
        Software that creates tailored cover letters based on custom input to streamline the application process. Saves{" "}
        <strong>4–5</strong> minutes per application by automating manual writing and formatting, ensuring error-free
        and consistent outputs.
      </>
    ),
    url: project.coverletterGenerator,
    skills: ["Python", "Regex", "Python-docx"],
    image: "/project/CoverletterGen.png",
  },
  {
    id: "01",
    title: "Fact Checker",
    description: (
      <>
        A tool that scrapes Twitter Tweets or custom text inputs to distinguish facts from opinions using OpenAI's
        Davinci-003 model. Flags inaccuracies and suggests corrections.{" "}
        <em>The Tweet scraper and Davinci-003 model are depreciated.</em>
      </>
    ),
    url: project.FactChecker,
    skills: ["NodeJS", "JavaScript", "Express", "Pupperteer", "OpenAI"],
    image: "/project/FactChecker.png",
  },
];

const awardContent: AwardContent[] = [
  {
    id: "00",
    icon: "/award/UVic_academia.svg",
    isSquare: false,
    title: "Graduated With Distinction",
    year: "2025",
    brief: "Top 20% of Software Engineering class",
  },
  {
    id: "01",
    icon: "/award/springer.svg",
    isSquare: false,
    title: "International Publication",
    year: "2025",
    brief: "Research Publication on LLM Biases in Springer",
  },
  {
    id: "02",
    icon: "/award/UVic_academia.svg",
    isSquare: false,
    title: "JCURA Award",
    year: "2025",
    brief: "Undergraduate Research Award in LLMs",
  },
  {
    id: "03",
    icon: "/award/UVEC.svg",
    isSquare: true,
    title: "1st Place",
    year: "2023",
    brief: "UVic Engineering Programming Competition",
  },
  {
    id: "04",
    icon: "/award/mlh.svg",
    isSquare: false,
    title: "Best Domain Award",
    year: "2022",
    brief: "UBC nwHack Award by Major League Hacking",
  },
  {
    id: "05",
    icon: "/award/visier.svg",
    isSquare: true,
    title: "Honorable Mentions",
    year: "2022",
    brief: "Visier Product Dev Day Hackathon",
  },
  {
    id: "06",
    icon: "/award/UVEC.svg",
    isSquare: true,
    title: "1st Place",
    year: "2021",
    brief: "UVic Engineering Programming Competition",
  },
  {
    id: "07",
    icon: "/award/UVic_club.svg",
    isSquare: false,
    title: "1st Place",
    year: "2019",
    brief: "UVic Web Design and Development Spookathon",
  },
  {
    id: "08",
    icon: "/award/UVic_academia.svg",
    isSquare: false,
    title: "Excellence in Math Award",
    year: "2019",
    brief: "Outstanding Performance on Math Contest",
  },
];

const contents = {
  hero: heroContent,
  about: {
    heading: "About",
    description: aboutMe,
  },
  experience: {
    heading: "Experience",
    experiences: experienceContent,
  },
  testimonial: testimonialContent,
  project: {
    heading: "Project",
    projects: projectContent,
  },
  award: {
    heading: "Awards",
    awards: awardContent,
  },
};

const ContentsContext = React.createContext(contents);

const ContentsProvider: React.FC<ContentsProviderProps> = ({ contents, children }: ContentsProviderProps) => {
  return <ContentsContext.Provider value={contents}>{children}</ContentsContext.Provider>;
};

const useContents = () => React.useContext(ContentsContext);

type Contents = typeof contents;
type ContentsProviderProps = React.PropsWithChildren<{ contents: Contents }>;

export default contents;
export { ContentsProvider, useContents };
export type {
  Contents,
  HeroContent,
  ExperienceContent,
  EducationContent,
  TestimonialContent,
  ProjectContent,
  AwardContent,
};
