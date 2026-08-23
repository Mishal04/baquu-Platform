import React from 'react';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  showWatermark?: boolean;
  watermarkPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'center';
}

export const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  aspectRatio,
  showWatermark = true,
  watermarkPosition = 'bottom-right',
}) => {
  const positionClasses = {
    'bottom-right': 'bottom-2 right-2.5',
    'bottom-left': 'bottom-2 left-2.5',
    'top-right': 'top-2 right-2.5',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className={`relative overflow-hidden group select-none ${aspectRatio ? aspectRatio : ''}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={`transition-transform duration-500 group-hover:scale-105 ${className}`}
        onError={(e) => {
          // Fallback image if unsplash link fails
          (e.target as HTMLImageElement).src =
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/1280px-Flame_towers_from_Baku_boulevard.JPG';
        }}
      />
      {showWatermark && (
        <div
          className={`absolute ${positionClasses[watermarkPosition]} pointer-events-none z-10`}
          title="SIRFPK Official Visual Asset"
        >
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/70 backdrop-blur-md border border-amber-400/30 text-[11px] font-medium tracking-wider text-amber-300 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>www.sirfpk.com</span>
          </div>
        </div>
      )}
    </div>
  );
};
