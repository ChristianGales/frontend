import React from 'react';

interface BasePageLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const BasePageLayout = ({ title = "Page Title", children }: BasePageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-136px)] rounded-xl border border-dashed p-6 mb-4">
      
      {/* Page Header Area */}
      <div className="mb-6 pb-4 ">
        <h1 className="text-3xl font-bold tracking-tight ">
          {title}
        </h1>
      </div>

      {/* COMPONENT PASTE ZONE: The main container for your content */}
      <div className="flex-1 w-full h-full">
        {children}
      </div>

    </div>
  );
};

export default BasePageLayout;