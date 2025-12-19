export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  summary: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string[];
  technologies: string[];
  highlights?: string[];
  awards?: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface TechnicalSkills {
  category: string;
  skills: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  technicalSkills: TechnicalSkills[];
}
