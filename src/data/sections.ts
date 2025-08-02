export type SectionColor = 'blue' | 'purple' | 'emerald' | 'amber' | 'rose';

export interface Section {
  key: string;
  title: string;
  color: SectionColor;
}

export const sections: Section[] = [
  {
    key: 'about',
    title: 'About',
    color: 'blue',
  },
  {
    key: 'work',
    title: 'Work Experience',
    color: 'purple',
  },
  {
    key: 'projects',
    title: 'Projects',
    color: 'emerald',
  },
  {
    key: 'skills',
    title: 'Skills',
    color: 'amber',
  },
  {
    key: 'contact',
    title: 'Contact',
    color: 'rose',
  }
]; 