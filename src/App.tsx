import { } from 'react';
import { Navigation } from '@/components/Navigation';
// import { PageOverlay } from '@/components/PageOverlay';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Features } from '@/sections/Features';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { FAQ } from '@/sections/FAQ';
import { Testimonials } from '@/sections/Testimonials';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { usePageLoad } from '@/hooks/usePageLoad';

function App() {
  const { isLoaded } = usePageLoad(500);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Load Overlay */}
      {/* <PageOverlay isVisible={showOverlay} /> // Disabled in favor of Skeleton UI */}
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero isLoading={!isLoaded} />
        <About isLoading={!isLoaded} />
        <Features isLoading={!isLoaded} />
        <Services isLoading={!isLoaded} />
        <Portfolio isLoading={!isLoaded} />
        <FAQ isLoading={!isLoaded} />
        <Testimonials isLoading={!isLoaded} />
        <CTA isLoading={!isLoaded} />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
