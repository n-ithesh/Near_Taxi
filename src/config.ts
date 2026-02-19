// Site configuration for Near Taxi Service - Goa
// Based on original website: https://neartaxiservice.com/

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Near Taxi service | Goa | Call:- 8262908873",
  description: "Near Taxi offers premier taxi services in South Goa, including Margao. Our reliable fleet and experienced drivers ensure comfortable rides for locals and tourists alike. Whether it's airport transfers, sightseeing tours, or point-to-point travel, we guarantee prompt and efficient service.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "NEAR TAXI",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#destinations" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  contactLabel: "Book Now",
  contactHref: "tel:+918262908873",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "NEAR TAXI",
  roles: ["Airport Transfers", "Railway Pickups", "Goa Tours", "24/7 Service"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "Our Company",
  description: "Near Taxi Services provides comprehensive transportation solutions, including airport and railway station pick-up and drop-off, guided tours to South Goa, North Goa, and waterfalls. Our reliable service and disposal duty options guarantee a stress-free travel experience, ensuring utmost convenience and satisfaction for our valued customers.",
  experienceValue: "10+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "50+", label: "Vehicles in Fleet" },
    { value: "10K+", label: "Happy Customers" },
    { value: "24/7", label: "Available Service" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Professional taxi driver" },
    { src: "/images/about-2.jpg", alt: "Premium car interior" },
    { src: "/images/about-3.jpg", alt: "Taxi fleet" },
    { src: "/images/about-4.jpg", alt: "Goa beach scenery" },
  ],
};

// Features section configuration (Why Choose Us)
export interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
}

export interface FeaturesConfig {
  label: string;
  heading: string;
  features: FeatureItem[];
}

export const featuresConfig: FeaturesConfig = {
  label: "Features",
  heading: "Why Choose Us",
  features: [
    {
      iconName: "Sparkles",
      title: "Sanitized Car",
      description: "Near Taxi Services: Sanitized cars for safe travels. Airport, railway pickups, guided tours in Goa. Hassle-free transportation.",
    },
    {
      iconName: "Shield",
      title: "Safety",
      description: "Near Taxi Services prioritizes safety with sanitized cars for airport, railway, and guided tour transportation.",
    },
    {
      iconName: "Banknote",
      title: "No Hidden Charge",
      description: "Near Taxi Services: Transparent pricing, no hidden charges for airport, railway, and guided tour transportation.",
    },
    {
      iconName: "Clock",
      title: "24*7 Available",
      description: "Near Taxi Services: 24/7 availability for airport, railway, and guided tour transportation, ensuring convenience around the clock.",
    },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Our Services",
  heading: "We Provide",
  services: [
    {
      iconName: "Plane",
      title: "Airport pick & drop",
      description: "Near Taxi Services offers reliable airport pick-up and drop-off solutions, ensuring punctuality and comfort. With sanitized cars and 24/7 availability, your airport transfers are hassle-free and convenient.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Train",
      title: "Railway Station pick & drop",
      description: "Near Taxi Services provides prompt railway station pick-up and drop-off services. With sanitized vehicles and 24/7 availability, we ensure a stress-free and comfortable transportation experience for your railway travels.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "MapPin",
      title: "South Goa Tour",
      description: "Explore the beauty of South Goa with Near Taxi Services' guided tours. Our experienced drivers will take you to iconic landmarks and hidden gems, ensuring an unforgettable and immersive travel experience.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Compass",
      title: "North Goa Tour",
      description: "Discover the vibrant attractions of North Goa with Near Taxi Services' guided tours. From pristine beaches to historic forts, our experienced drivers will ensure a memorable and enjoyable exploration of this captivating region.",
      image: "/images/portfolio-1.jpg",
    },
    {
      iconName: "Droplets",
      title: "Waterfall Tour",
      description: "Near Taxi Services offers a captivating Waterfall Tour, guiding you through scenic routes to mesmerizing waterfalls. Experience the serene beauty of nature with our expertly curated tour.",
      image: "/images/service-4.jpg",
    },
    {
      iconName: "Car",
      title: "Disposal Duty",
      description: "Near Taxi Services provides convenient disposal duty services, ensuring flexible transportation solutions tailored to your needs. Whether for business or leisure, rely on us for seamless and reliable travel experiences.",
      image: "/images/portfolio-2.jpg",
    },
    {
      iconName: "Sun",
      title: "All day Package",
      description: "Discover Goa with ease! Near Taxi offers all-day package service for uninterrupted exploration. Leave the driving to us and make the most of your time in this vibrant destination. Book now for a hassle-free adventure!",
      image: "/images/portfolio-3.jpg",
    },
    {
      iconName: "Route",
      title: "Out of station",
      description: "Planning a trip out of town? Near Taxi's all-day package service extends beyond Goa! Enjoy seamless transportation wherever your journey takes you. Book now for a stress-free travel experience!",
      image: "/images/portfolio-4.jpg",
    },
  ],
};

// Portfolio section configuration (Destinations / Goa Places)
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Goa Places",
  heading: "Most Popular Places In Goa",
  description: "Discover the most beautiful destinations in Goa with our expert-guided tours. From vibrant beaches to historic landmarks, experience the best of Goa.",
  projects: [
    {
      title: "Aguada Fort",
      category: "Heritage",
      year: "2024",
      image: "/images/portfolio-2.jpg",
      featured: true,
    },
    {
      title: "Basilica of Bom Jesus",
      category: "Heritage",
      year: "2024",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "Chapora Fort",
      category: "Viewpoint",
      year: "2024",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "Se Cathedral",
      category: "Heritage",
      year: "2024",
      image: "/images/portfolio-5.jpg",
    },
    {
      title: "Sinquerim Beach",
      category: "Beach",
      year: "2024",
      image: "/images/about-4.jpg",
    },
  ],
  cta: {
    label: "Custom Tours",
    heading: "Plan Your Perfect Goa Trip",
    linkText: "Contact Us",
    linkHref: "tel:+918262908873",
  },
  viewAllLabel: "View More",
};

// FAQ section configuration
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  label: string;
  heading: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  label: "FAQ",
  heading: "Frequently Asked Questions",
  faqs: [
    {
      question: "What is NearTaxi?",
      answer: "NearTaxi is a convenient and reliable taxi-hailing service that connects passengers with nearby available taxis through our mobile app or direct booking. We operate extensively in South Goa.",
    },
    {
      question: "How do I pay for my NearTaxi ride?",
      answer: "We accept various payment methods including cash, UPI, and major credit/debit cards. You can choose your preferred method at the end of the trip.",
    },
    {
      question: "Are there any additional fees or surcharges?",
      answer: "Our pricing is transparent. Any tolls or parking fees incurred during the trip are typically paid by the passenger. Night charges may apply for trips during late hours, which will be communicated beforehand.",
    },
    {
      question: "Can I schedule a ride in advance?",
      answer: "Yes! You can book a taxi in advance for airport transfers, railway station pickups, or day tours. Simply call us or use our booking form to schedule your ride.",
    },
  ],
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Our Client Says",
  testimonials: [
    {
      quote: "Near Taxi Service consistently delivers exceptional service, with prompt pickups, courteous drivers, and a user-friendly booking system. Their reliability and professionalism make them my preferred choice for transportation. Highly recommended to all. Thank you for your outstanding service!",
      author: "Sachin Upadhyay",
      role: "Customer",
      company: "Mumbai",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "Near Taxi Service continually exceeds expectations with their reliable, friendly, and efficient service. From seamless booking to punctual arrivals, they make every ride a pleasure. I highly recommend them to anyone in need of trustworthy transportation. Thank you for your exceptional service!",
      author: "Ambalika Singh",
      role: "Customer",
      company: "Delhi",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "Near Taxi Service sets the standard for exceptional transportation. Their prompt arrivals, courteous drivers, and user-friendly booking system make every journey stress-free. I wholeheartedly recommend them to anyone in need of reliable and convenient transportation services. Thank you for your outstanding service!",
      author: "Pankaj Kumar",
      role: "Customer",
      company: "Bangalore",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
    {
      quote: "Near Taxi Service consistently impresses with their professionalism and reliability. Their drivers are courteous, vehicles clean, and booking process seamless. I highly recommend their services to anyone seeking a convenient and trustworthy transportation option. Thank you for your excellent service!",
      author: "Nishu Singh",
      role: "Customer",
      company: "Pune",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "Near Taxi Service stands out for its reliability, efficiency, and excellent customer service. From easy booking to prompt arrivals, they consistently exceed expectations. I enthusiastically recommend them to anyone needing reliable transportation. Thank you for your consistently outstanding service!",
      author: "Vishal Pandey",
      role: "Customer",
      company: "Hyderabad",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Airport Transfer", "Goa Tours", "24/7 Service"],
  heading: "Ready to Explore Goa?",
  description: "Book your ride today and experience the best taxi service in South Goa. Call us or WhatsApp for instant booking and special tour packages.",
  buttonText: "Book Your Ride",
  buttonHref: "tel:+918262908873",
  email: "purushottamnaiker8@gmail.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "NEAR TAXI",
  description: "Near Taxi Service offers reliable transportation solutions across Goa. Our fleet and experienced drivers ensure comfortable and timely travel for tourists and locals alike. Book your ride with us today!",
  columns: [
    {
      title: "Useful Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "FAQ", href: "#faq" },
        { label: "All day Package", href: "#services" },
        { label: "Out of station", href: "#services" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Our Service",
      links: [
        { label: "Airport Pick & Drop", href: "#services" },
        { label: "Railway Station Pick & Drop", href: "#services" },
        { label: "South Goa Tour", href: "#services" },
        { label: "North Goa Tour", href: "#services" },
        { label: "Waterfall Tour", href: "#services" },
        { label: "Disposal Duty", href: "#services" },
      ],
    },
    {
      title: "Address",
      links: [
        { label: "H.No.103., A1 Village VARCA Church,", href: "#" },
        { label: "Margao, Goa - 403721", href: "#" },
        { label: "+91-8262908873", href: "tel:+918262908873" },
        { label: "purushottamnaiker8@gmail.com", href: "mailto:purushottamnaiker8@gmail.com" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Facebook", href: "#", label: "Facebook" },
    { iconName: "Instagram", href: "#", label: "Instagram" },
    { iconName: "Twitter", href: "#", label: "Twitter" },
    { iconName: "Youtube", href: "#", label: "YouTube" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe for special offers and travel tips for Goa.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "Copyright 2024: Near Taxi Service | All Rights Reserved.",
  credit: "Design By: Infotech Mantra",
};
