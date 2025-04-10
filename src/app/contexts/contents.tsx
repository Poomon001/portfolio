import React from "react";

interface GreetingContent {
  heading: React.ReactNode;
  brief: String;
}

interface WorkExperienceContent {
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
  description: string;
  skills: string[];
  image: string;
}

const greetingContent: GreetingContent = {
  heading: "Hi, I'am Poom Chuthamsatid",
};

const contents = {
  welcome: {},
};

const ContentsContext = React.createContext(contents);

const ContentContext = () => React.useContext(ContentContext);
