import React from "react";

interface HeroContent {
  heading: string;
  brief: React.ReactNode;
}

interface ExperienceContent {
  id: string;
  company: string;
  position: string;
  location: string;
  date: string;
  achievements: string[] | React.ReactNode[];
  isWorkExperience: boolean;
  skills: string[];
}

interface EducationContent {
  id: string;
  description: string;
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
  title: string;
  description: string | React.ReactNode;
  skills: string[];
  image: string;
}

const heroContent: HeroContent = {
  heading: "Hi, I'm Poom",
  brief: (
    <>
      I'm a fifth-year software engineering student with 2 years of industry experience
      <br />
      Specializing in data-intensive and scalable systems.
    </>
  ),
};

const experienceContent: (ExperienceContent | EducationContent)[] = [
  {
    id: "01012025",
    company: "Kinsol Research Inc",
    position: "AI Software Developer Intern",
    location: "Victoria BC, Canada",
    date: "Jan 2025 - Apr 2025",
    achievements: [
      <p>
        Driving development of AI-powered classification pipeline using Python, Docker, Parallelization, Google Cloud,
        and YOLOv8 for marine diversity analysis, securing $30,000 in initial funding to build vision-based tracking
        software.
      </p>,
      <p>
        Optimized tracking annotation runtime by 72% per server for 30K+ videos using parallelism, GPUs, and distributed
        computing.
      </p>,
    ],
    isWorkExperience: true,
    skills: ["Python", "Docker", "SQL"],
  },
  {
    id: "01092024",
    company: "Arista Networks",
    position: "Software Developer Intern",
    location: "Vancouver BC, Canada",
    date: "Sep 2024 - Dec 2024",
    achievements: [
      <p>
        Streamlined automated first-boot setup using Kotlin, Python, Mockito, Pytest, Docker, improving VM provisioning
        process for Arista's global customer base of 10,000+ with a declarative preview and ISO generation system.
      </p>,
      <p>
        Improved security by implementing ISO validation and YANG protocols for compliance with Arista’s network
        standards.
      </p>,
    ],
    isWorkExperience: true,
    skills: ["Python", "Docker", "SQL"],
  },
  {
    id: "01052024",
    description:
      "Teaching Assistant: Led weekly labs for Algorithms and Data Structures II while studying at the University of Victoria.",
    date: "May 2024 - Aug 2024",
    isWorkExperience: false,
  },
  {
    id: "01012024",
    description: "Ongoing: Continued Software Engineering at the University of Victoria.",
    date: "Jan 2024 - Apr 2024",
    isWorkExperience: false,
  },
  {
    id: "01052023",
    description:
      "Teaching Assistant: Led weekly labs for Algorithms and Data Structures II while studying at the University of Victoria.",
    date: "May 2023 - Dec 2023",
    isWorkExperience: false,
  },
  {
    id: "01092022",
    company: "Visier Inc",
    position: "Software Developer Intern",
    location: "Vancouver BC, Canada",
    date: "Sep 2022 - Apr 2023",
    achievements: [
      <p>
        Developed secure code for data processing pipeline using Scala, TypeScript, SQL, Mockito, Docker, AWS S3 to
        transform customer data from 15,000+ organizations into a validated, structured format.
      </p>,
      <p>
        Streamlined customer data downloads by introducing three methods—single, multiple, and combined—for CSV, XLSX,
        and Parquet formats, reducing network traffic by 90% through efficient zip compression.
      </p>,
      <p>
        Built De-Identification Tool to anonymize personal data, manage backups, and enforce secure restoration/deletion
        process, safeguarding over 12 million customer records.
      </p>,
    ],
    isWorkExperience: true,
    skills: ["Python", "Docker", "SQL"],
  },
  {
    id: "01012022",
    description: "Ongoing: Continued Software Engineering at the University of Victoria.",
    date: "Jan 2022 - Aug 2022",
    isWorkExperience: false,
  },
  {
    id: "01092021",
    company: "VertiGIS North America",
    position: "Software Test Engineer Intern",
    location: "Victoria BC, Canada",
    date: "Sep 2021 - Dec 2021",
    achievements: [
      <p>
        Created automated and manual testing scripts with TypeScript, WebdriverIO, Jest to increase test coverage of
        Geocortex Web/Mobile Designer software that serves over 5,000 customers across industries.
      </p>,
      <p>
        Boosted team productivity by 14% by raising QA bug detection coverage from 50% to 64% during regression testing.
      </p>,
    ],
    isWorkExperience: true,
    skills: ["Python", "Docker", "SQL"],
  },
  {
    id: "01052021",
    description: "Ongoing: Continued Software Engineering at the University of Victoria.",
    date: "May 2021 - Aug 2021",
    isWorkExperience: false,
  },
  {
    id: "01012021",
    company: "Ruboss Technology",
    position: "Software Developer Intern",
    location: "Victoria BC, Canada",
    date: "Jan 2021 - Apr 2021",
    achievements: [
      <p>
        Modernized Leanpub storefront by migrating from legacy JavaScript, React Classes, REST APIs to next generation
        with TypeScript, React Hooks, EmotionJS, GraphQL/Apollo, supporting over 2 million users.
      </p>,
      <p>Created reusable React components to reduce redundancy in hierarchical navigation menu codebase.</p>,
    ],
    isWorkExperience: true,
    skills: ["Python", "Docker", "SQL"],
  },
  {
    id: "01082019",
    description: "Academia: Started Software Engineering at the University of Victoria.",
    date: "Sep 2019 - Dec 2020",
    isWorkExperience: false,
  },
];

const testimonialContent: TestimonialContent[] = [
  {
    id: "01",
    testimonial:
      "I was particularly impressed by his structured approach to prototyping — Poom thoughtfully evaluated multiple options and clearly laid out the trade-offs.",
    source: "End-Term Recommendation",
    company: "Kinsol",
    date: "April 22, 2025",
  },
  {
    id: "02",
    testimonial:
      "Poom has demonstrated well that he was going out of his comfort zone by learning new domains, new technology stacks, and different software development practices, which were highly focused on quality.",
    source: "End-Term Review",
    company: "Arista Network",
    date: "December 16, 2024",
  },
  {
    id: "03",
    testimonial:
      "Poom... managed the release of a critical feature, followed best coding practices, taken on feedback in an agile way, and has become an effective software developer.",
    source: "End-Term Review",
    company: "Visier",
    date: "April 11, 2023",
  },
  {
    id: "04",
    testimonial:
      "Poom created several automated functional tests... many of which required designing novel solutions and new page objects.",
    source: "End-Term Review",
    company: "VertiGIS",
    date: "January 12, 2022",
  },
];

const projectContent: ProjectContent[] = [
  {
    title: "Nightrader, Stock Trading Platform",
    description:
      "Built a full-stack trading platform with a Go backend and React frontend for \
        FIFO matching, order executions, and wallet transactions, scaling it via Microservices, Docker, \
        Concurrency, and RabbitMQ to support 5,000+ concurrent users and 100,000+ transactions.",
    skills: ["Golang", "JavaScript", "React", "Docker", "PostgreSQL", "API"],
    image: "/Nightrader.jpg",
  },
  {
    title: "BiasAnalyzer, Software for Detecting Bias in LLMs",
    description:
      "Won the JCURA award for developing software with Python to analyze 100,000+ words \
        for gender and race bias detection, quantifying and visualizing the real-world impacts of societal \
        biases using Pandas, NumPy, Matplotlib, and word embeddings from Microsoft, OpenAI, Google, Cohere, \
        and BGE models, with findings published by Springer Media.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "API"],
    image: "/BiasAnalyzer.jpg",
  },
];

const contents = {
  hero: heroContent,
  experience: {
    heading: "Experience",
    experiences: experienceContent,
  },
  project: {
    heading: "Project",
    projects: projectContent,
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
export type { Contents, HeroContent, ExperienceContent, EducationContent, ProjectContent };
