import React from 'react';

export function ClayCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div 
      className={`
        bg-[#25252d] 
        rounded-3xl 
        p-8 
        /* Outer drop shadow for elevation */
        shadow-[8px_8px_16px_#18181d,-8px_-8px_16px_#32323d]
        /* Inner shadows for the soft 'clay' effect */
        shadow-[inset_2px_2px_4px_rgba(255,255,255,0.05),inset_-2px_-2px_4px_rgba(0,0,0,0.4)]
        transition-all 
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}