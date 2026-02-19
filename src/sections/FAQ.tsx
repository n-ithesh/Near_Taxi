import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { faqConfig } from '@/config';
import { ChevronDown } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className={cn(
        'border border-exvia-border rounded-xl overflow-hidden bg-white transition-all duration-300',
        isOpen && 'shadow-md'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-exvia-subtle/30 transition-colors"
      >
        <span className="font-semibold text-exvia-black pr-4">{question}</span>
        <div
          className={cn(
            'flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-exvia-border bg-white transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        >
          <ChevronDown className="w-4 h-4 text-exvia-black" />
        </div>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-6 text-sm text-exvia-black/60 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQ({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
             <div className="space-y-4">
               <Skeleton className="h-4 w-16" />
               <Skeleton className="h-12 w-3/4" />
               <Skeleton className="h-20 w-full" />
               <Skeleton className="h-12 w-32 rounded-full mt-4" />
             </div>
             <div className="space-y-4">
               {[1, 2, 3, 4].map((i) => (
                 <Skeleton key={i} className="h-20 w-full rounded-xl" />
               ))}
             </div>
          </div>
        </div>
      </section>
    );
  }

  if (!faqConfig.heading && faqConfig.faqs.length === 0) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 lg:py-32 bg-white">
      <div className="container-large px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Header - Left Side */}
          <div ref={headerRef} className="lg:sticky lg:top-32 lg:self-start">
            {faqConfig.label && (
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  {faqConfig.label}
                </span>
              </div>
            )}

            {faqConfig.heading && (
              <h2
                className={cn(
                  'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                {faqConfig.heading}
              </h2>
            )}

            <p
              className={cn(
                'text-exvia-black/60 mt-6 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              Can't find the answer you're looking for? Please contact our friendly support team.
            </p>

            <a
              href="tel:+918262908873"
              className={cn(
                'inline-flex items-center gap-2 mt-6 px-6 py-3 bg-exvia-black text-white text-sm font-medium rounded-full hover:bg-exvia-black/90 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '300ms' }}
            >
              Contact Support
            </a>
          </div>

          {/* FAQ Items - Right Side */}
          <div
            ref={faqRef}
            className={cn(
              'space-y-4 transition-all duration-800 ease-out-quart',
              faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {faqConfig.faqs.map((faq, idx) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
