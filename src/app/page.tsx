'use client';

import React, { useState } from 'react';
import { PageType, ContentType } from '@/types';
import LandingPage from '@/components/pages/LandingPage';
import ContentLayout from '@/components/layout/ContentLayout';
import AboutPageContent from '@/components/pages/AboutPageContent';
import ProjectsPageContent from '@/components/pages/ProjectsPageContent';
import WorkHistoryPageContent from '@/components/pages/WorkHistoryPageContent';
import ContactPageContent from '@/components/pages/ContactPageContent';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [themeColor, setThemeColor] = useState<string>('emerald');
  const [contentType, setContentType] = useState<ContentType>(null);

  const handleEnterPortfolio = (selectedTheme: string, type: string) => {
    setThemeColor(selectedTheme);
    setContentType(type as ContentType);
    setCurrentPage('content');
  };

  const handleGoBack = () => {
    setCurrentPage('landing');
    setContentType(null);
  };

  const renderContentPage = () => {
    switch (contentType) {
      case 'work_history':
        return (
          <ContentLayout key={contentType} title="Work Experience" themeColor={themeColor} onGoBack={handleGoBack}>
            <WorkHistoryPageContent themeColor={themeColor} />
          </ContentLayout>
        );
      case 'about':
        return (
          <ContentLayout key={contentType} title="About" themeColor={themeColor} onGoBack={handleGoBack}>
            <AboutPageContent themeColor={themeColor} />
          </ContentLayout>
        );
      case 'projects':
        return (
          <ContentLayout key={contentType} title="Projects" themeColor={themeColor} onGoBack={handleGoBack}>
            <ProjectsPageContent themeColor={themeColor} />
          </ContentLayout>
        );
      case 'contact':
        return (
          <ContentLayout key={contentType} title="Contact" themeColor={themeColor} onGoBack={handleGoBack}>
            <ContactPageContent themeColor={themeColor} />
          </ContentLayout>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {currentPage === 'landing' ? (
        <LandingPage onEnterPortfolio={handleEnterPortfolio} />
      ) : (
        renderContentPage()
      )}
    </>
  );
}
