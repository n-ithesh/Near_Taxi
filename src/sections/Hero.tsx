import { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config';
import { ChevronDown } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const initialBoxSize = 400;

export function Hero({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <section className="relative w-full min-h-screen overflow-hidden bg-neutral-900 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8 w-full max-w-4xl px-6">
          <Skeleton className="h-32 w-3/4 bg-neutral-800 rounded-lg" />
          <div className="flex gap-4">
             <Skeleton className="h-8 w-24 bg-neutral-800 rounded-full" />
             <Skeleton className="h-8 w-24 bg-neutral-800 rounded-full" />
             <Skeleton className="h-8 w-24 bg-neutral-800 rounded-full" />
          </div>
        </div>
      </section>
    );
  }

  if (!heroConfig.name && heroConfig.roles.length === 0) return null;

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [lensSize, setLensSize] = useState(initialBoxSize);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setLensSize(Math.min(initialBoxSize, window.innerWidth - 48));
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const halfBox = lensSize / 2;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use CSS custom properties for GPU-accelerated transforms
    section.style.setProperty('--mouse-x', `${x - halfBox}px`);
    section.style.setProperty('--mouse-y', `${y - halfBox}px`);
    
    // Parallax values for text
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (e.clientX - centerX) / 50; // Subtle movement
    const moveY = (e.clientY - centerY) / 50;
    
    section.style.setProperty('--text-x', `${moveX}px`);
    section.style.setProperty('--text-y', `${moveY}px`);
  }, [halfBox]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-neutral-900 cursor-none"
      onMouseMove={handleMouseMove}
      style={{ 
        '--mouse-x': `calc(50vw - ${halfBox}px)`, 
        '--mouse-y': `calc(50vh - ${halfBox}px)`,
        '--text-x': '0px',
        '--text-y': '0px'
      } as React.CSSProperties}
    >
      {/* Background Image with Blur */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-[1800ms]',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <img
          src={heroConfig.backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover scale-105" // Slight scale to avoid edge issues
          style={{ filter: 'blur(12px) brightness(0.6)' }}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Sharp Image Container - Circular Lens */}
      <div
        className={cn(
          'absolute top-0 left-0 overflow-hidden pointer-events-none z-20 rounded-full shadow-2xl',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: lensSize,
          height: lensSize,
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
          boxShadow: '0 0 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.5)'
        }}
      >
        {/* Sharp image fills the entire section, offset to align with background */}
        <div
          className="absolute inset-0"
          style={{
            transform: 'translate3d(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1), 0)',
            width: '100vw',
            height: '100vh',
            willChange: 'transform',
          }}
        >
          <img
            src={heroConfig.backgroundImage}
            alt="Hero Sharp"
            className="w-full h-full object-cover scale-105" // Match scale
          />
        </div>
      </div>

      {/* Circular Border Frame */}
      <div
        className={cn(
          'absolute top-0 left-0 pointer-events-none z-20 rounded-full',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: lensSize,
          height: lensSize,
          border: '1px solid rgba(255,255,255,0.3)',
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
        }}
      >
        {/* Center Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
           <div className="w-1.5 h-1.5 bg-white rounded-full" />
           <div className="absolute w-8 h-8 border border-white/40 rounded-full" />
        </div>
      </div>

      {/* Role labels on sides with Parallax */}
      {heroConfig.roles[0] && (
        <div
          className={cn(
            'absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 z-30 transition-all duration-[1200ms] ease-out-quart hidden md:block',
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          )}
          style={{ 
            transitionDelay: '800ms',
            transform: 'translate3d(calc(var(--text-x) * -2), calc(var(--text-y) * -2), 0)'
          }}
        >
          <span className="vertical-rl text-xs font-geist-mono uppercase tracking-[0.4em] text-white/60 [writing-mode:vertical-rl] rotate-180">
            {heroConfig.roles[0]}
          </span>
        </div>
      )}
      {heroConfig.roles[1] && (
        <div
          className={cn(
            'absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-30 transition-all duration-[1200ms] ease-out-quart hidden md:block',
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          )}
          style={{ 
            transitionDelay: '900ms',
            transform: 'translate3d(calc(var(--text-x) * -2), calc(var(--text-y) * -2), 0)'
          }}
        >
          <span className="vertical-rl text-xs font-geist-mono uppercase tracking-[0.4em] text-white/60 [writing-mode:vertical-rl]">
            {heroConfig.roles[1]}
          </span>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-30 flex flex-col items-center justify-end min-h-screen px-6 lg:px-12 pointer-events-none pb-24 lg:pb-32">
        {/* Main Heading - large and impactful */}
        <div
          className={cn(
            'text-center transition-all duration-[1200ms] ease-out-quart transform',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{ 
            transitionDelay: '600ms',
            transform: 'translate3d(var(--text-x), var(--text-y), 0)'
          }}
        >
          <h1 className="text-[clamp(3rem,11vw,11rem)] font-black text-white tracking-[-0.03em] leading-[0.9] select-none drop-shadow-2xl">
            {heroConfig.name}
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-4 opacity-80 md:hidden">
             {/* Mobile roles */}
             {heroConfig.roles.slice(0, 2).map((role, i) => (
                <span key={i} className="text-xs font-geist-mono uppercase tracking-widest text-white/70 border border-white/20 px-3 py-1 rounded-full">
                  {role}
                </span>
             ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
           className={cn(
             "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000",
             isLoaded ? "opacity-70 translate-y-0" : "opacity-0 -translate-y-4"
           )}
           style={{ transitionDelay: '1400ms' }}
        >
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
