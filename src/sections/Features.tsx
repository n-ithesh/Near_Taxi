import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { featuresConfig } from '@/config';
import { Sparkles, Shield, Banknote, Clock, type LucideIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Shield,
  Banknote,
  Clock,
};

function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Sparkles;
}

export function Features({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <section className="w-full py-24 lg:py-32 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
           <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
             <Skeleton className="h-4 w-24 mx-auto" />
             <Skeleton className="h-12 w-64 mx-auto" />
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-exvia-border space-y-4">
                   <Skeleton className="h-14 w-14 rounded-xl" />
                   <Skeleton className="h-6 w-32" />
                   <div className="space-y-2">
                     <Skeleton className="h-4 w-full" />
                     <Skeleton className="h-4 w-5/6" />
                   </div>
                </div>
             ))}
           </div>
        </div>
      </section>
    );
  }

  if (!featuresConfig.heading && featuresConfig.features.length === 0) return null;

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" className="w-full py-24 lg:py-32 bg-exvia-subtle/30">
      <div className="container-large px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          {featuresConfig.label && (
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {featuresConfig.label}
              </span>
            </div>
          )}

          {featuresConfig.heading && (
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {featuresConfig.heading}
            </h2>
          )}
        </div>

        {/* Features Grid */}
        {featuresConfig.features.length > 0 && (
          <div
            ref={featuresRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuresConfig.features.map((feature, index) => {
              const Icon = getIcon(feature.iconName);
              return (
                <div
                  key={feature.title}
                  className={cn(
                    'group bg-white p-8 rounded-2xl border border-exvia-border transition-all duration-500 ease-out-quart hover:shadow-xl hover:-translate-y-1 hover:border-exvia-accent/50',
                    featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-exvia-border rounded-xl bg-exvia-subtle/50 mb-6 transition-colors duration-300 group-hover:bg-exvia-accent/10 group-hover:border-exvia-accent/20">
                    <Icon className="w-6 h-6 text-exvia-black transition-colors duration-300 group-hover:text-exvia-accent" />
                  </div>
                  <h3 className="text-h5 font-semibold text-exvia-black mb-3">{feature.title}</h3>
                  <p className="text-sm text-exvia-black/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
