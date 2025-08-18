'use client';

import React from 'react';
import { sections } from '@/data/sections';
import { getThemedColorHex } from '@/utils/styling';
import { useColor } from '@/contexts/ColorContext';
import AboutSection from '@/components/sections/AboutSection';
import WorkSection from '@/components/sections/WorkSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import { ColorCube } from '@/components/ColorCube';

const sectionComponents = {
  about: AboutSection,
  work: WorkSection,
  projects: ProjectsSection,
  skills: SkillsSection,
  contact: ContactSection,
};

export default function Home() {
  const { currentColor } = useColor();

  return (
    <main className="min-h-screen bg-black md:py-20 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-24">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-white/90 uppercase">Justin Im</h1>
            <ColorCube />
          </div>
        </header>
        <div className="space-y-12">
          {sections.map(section => {
            const SectionComponent = sectionComponents[section.key as keyof typeof sectionComponents];
            return (
              <section key={section.key}>
                <h2
                  className="text-xl md:text-2xl font-bold mb-4 tracking-widest"
                  style={{ color: currentColor || getThemedColorHex(section.color) }}
                >
                  {section.title}
                </h2>
                <div className="text-gray-200 text-base md:text-lg leading-relaxed">
                  <SectionComponent />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
