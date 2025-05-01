
import React from 'react';
import { EvervaultCard } from '@/components/ui/evervault-card';

interface UseEvervaultCardOptions {
  hoverText: string;
  className?: string;
}

export function useEvervaultCard({ hoverText, className }: UseEvervaultCardOptions) {
  const cardBackground = React.useMemo(() => {
    return (
      <div className="absolute inset-0 w-full h-full">
        <EvervaultCard text={hoverText} className={className} />
      </div>
    );
  }, [hoverText, className]);

  return { cardBackground };
}
