import React from "react";

interface GreetingContent {
  greeting: string;
  brief: React.ReactNode;
}

interface ExperienceContent {
  company: string;
  position: string;
  location: string;
  date: string;
  achievements: string[] | React.ReactNode[];
  isWorkExperience: boolean;
  skills: string[];
}

interface EducationContent {
  description: string;
  date: string;
  isWorkExperience: boolean;
}

interface ProjectContent {
  title: string;
  description: string | React.ReactNode;
  skills: string[];
  image: string;
}

const greetingContent: GreetingContent = {
  greeting: "Hi, I'm Poom Chuthamsatid",
  brief: (
    <>
      I'm a fifth-year software engineering student with 2 years of industry
      experience.
      <br />
      Specializing in data-intensive and scalable systems.
    </>
  ),
};

const experienceContent: (ExperienceContent | EducationContent)[] = [
  {
    company: "Kinsol Research Inc",
    position: "AI Software Developer Intern",
    location: "Victoria BC, Canada",
    date: "Jan 2025 - Apr 2025",
    achievements: [
      <p>
        Driving development of AI-powered classification pipeline using Python,
        Docker, Parallelization, Google Cloud, and YOLOv8 for marine diversity
        analysis, securing $30,000 in initial funding to build vision-based
        tracking software.
      </p>,
      <p>
        Optimized tracking annotation runtime by 72% per server for 30K+ videos
        using parallelism, GPUs, and distributed computing.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    company: "Arista Networks",
    position: "Software Developer Intern",
    location: "Vancouver BC, Canada",
    date: "Sep 2024 - Dec 2024",
    achievements: [
      <p>
        Streamlined automated first-boot setup using Kotlin, Python, Mockito,
        Pytest, Docker, improving VM provisioning process for Arista's global
        customer base of 10,000+ with a declarative preview and ISO generation
        system.
      </p>,
      <p>
        Improved security by implementing ISO validation and YANG protocols for
        compliance with Arista’s network standards.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    company: "University of Victoria",
    position: "Algorithms Teaching Assistant",
    location: "Victoria BC, Canada",
    date: "May 2023 - Aug 2024",
    achievements: [
      <p>
        Guided and clarified concepts in Algorithms & Data Structures II for
        over 300 undergraduate students, including topics in Hash Table, Dynamic
        Programming, String Searching, Tree, and Graph Theory.
      </p>,
      <p>
        Led weekly labs to teach algorithm implementation in Java, earning 3
        contract extensions for outstanding performance.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    company: "Visier Inc",
    position: "Software Developer Intern",
    location: "Vancouver BC, Canada",
    date: "Sep 2022 - Apr 2023",
    achievements: [
      <p>
        Developed secure code for data processing pipeline using Scala,
        TypeScript, SQL, Mockito, Docker, AWS S3 to transform customer data from
        15,000+ organizations into a validated, structured format.
      </p>,
      <p>
        Streamlined customer data downloads by introducing three methods—single,
        multiple, and combined—for CSV, XLSX, and Parquet formats, reducing
        network traffic by 90% through efficient zip compression.
      </p>,
      <p>
        Built De-Identification Tool to anonymize personal data, manage backups,
        and enforce secure restoration/deletion process, safeguarding over 12
        million customer records.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    company: "VertiGIS North America",
    position: "Software Test Engineer Intern",
    location: "Victoria BC, Canada",
    date: "Sep 2021 - Dec 2021",
    achievements: [
      <p>
        Created automated and manual testing scripts with TypeScript,
        WebdriverIO, Jest to increase test coverage of Geocortex Web/Mobile
        Designer software that serves over 5,000 customers across industries.
      </p>,
      <p>
        Boosted team productivity by 14% by raising QA bug detection coverage
        from 50% to 64% during regression testing.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
  {
    company: "Ruboss Technology",
    position: "Software Developer Intern",
    location: "Victoria BC, Canada",
    date: "Jan 2021 - Apr 2021",
    achievements: [
      <p>
        Modernized Leanpub storefront by migrating from legacy JavaScript, React
        Classes, REST APIs to next generation with TypeScript, React Hooks,
        EmotionJS, GraphQL/Apollo, supporting over 2 million users.
      </p>,
      <p>
        Created reusable React components to reduce redundancy in hierarchical
        navigation menu codebase.
      </p>,
    ],
    isWorkExperience: true,
    skills: [],
  },
];

const projectContent: ProjectContent[] = [
  {
    title: "Nightrader, Stock Trading Platform",
    description:
      "Built a full-stack trading platform with a Go backend and React frontend for \
        FIFO matching, order executions, and wallet transactions, scaling it via Microservices, Docker, \
        Concurrency, and RabbitMQ to support 5,000+ concurrent users and 100,000+ transactions.",
    skills: [],
    image: "",
  },
  {
    title: "BiasAnalyzer, Software for Detecting Bias in LLMs",
    description:
      "Won the JCURA award for developing software with Python to analyze 100,000+ words \
        for gender and race bias detection, quantifying and visualizing the real-world impacts of societal \
        biases using Pandas, NumPy, Matplotlib, and word embeddings from Microsoft, OpenAI, Google, Cohere, \
        and BGE models, with findings published by Springer Media.",
    skills: [],
    image: "",
  },
];

const contents = {
  greeting: greetingContent,
  experiences: {
    heading: "Experience",
    experience: experienceContent,
  },
  projects: {
    heading: "Project",
    project: projectContent,
  },
};

const ContentsContext = React.createContext(contents);

const ContentsProvider: React.FC<ContentsProviderProps> = ({
  contents,
  children,
}: ContentsProviderProps) => {
  return (
    <ContentsContext.Provider value={contents}>
      {children}
    </ContentsContext.Provider>
  );
};

const useContents = () => React.useContext(ContentsContext);

type Contents = typeof contents;
type ContentsProviderProps = React.PropsWithChildren<{ contents: Contents }>;

export default contents;
export { ContentsProvider, useContents };
export type {
  Contents,
  GreetingContent,
  ExperienceContent,
  EducationContent,
  ProjectContent,
};
