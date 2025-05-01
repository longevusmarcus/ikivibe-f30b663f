
import React from 'react';
import { EvervaultCard } from './ui/evervault-card';

interface EnhancedCardProps {
  title: string;
  subtitle?: string;
  description: string;
  hoverText: string;
  className?: string;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({ 
  title,
  subtitle,
  description,
  hoverText,
  className
}) => {
  return (
    <div className={`relative bg-studio-gray/10 p-8 overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full">
        <EvervaultCard text={hoverText} />
      </div>
      <div className="relative z-10">
        {subtitle && (
          <span className="text-studio-lightgray text-sm uppercase tracking-wider">{subtitle}</span>
        )}
        <h3 className="text-2xl font-display font-bold mt-2 mb-4">{title}</h3>
        <p className="text-studio-lightgray">
          {description}
        </p>
      </div>
    </div>
  );
};
