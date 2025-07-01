export interface Project {
  name: string;
  technologies: string;
  description: string;
  github: string;
  live?: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  details: string[];
}

export interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  themeColor: string;
  onGoBack: () => void;
}

export interface PageContentProps {
  themeColor: string;
}

export interface LandingPageProps {
  onEnterPortfolio: (theme: string, type: string) => void;
}

export type PageType = 'landing' | 'content';
export type ContentType = 'work_history' | 'about' | 'projects' | 'contact' | null; 