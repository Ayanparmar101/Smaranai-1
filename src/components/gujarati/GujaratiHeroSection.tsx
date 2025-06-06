import React from 'react';
import { BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const GujaratiHeroSection = () => {
  return (
    <section className={cn(
      "relative overflow-hidden py-24 md:py-32 lg:py-40 bg-gradient-to-br from-purple-900 to-blue-900",
    )}>
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-tr from-blue-600 to-pink-600 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-between text-center">
        <div className="text-left relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-shadow-lg">
            Dive into Gujarati
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white max-w-2xl text-shadow-lg">
            Discover the beauty of the Gujarati language and culture. Explore literature, grammar, and conversational skills with our engaging tools and resources.
          </p>
        </div>
        <div className="text-white hidden md:block relative z-10">
          <BookOpen size={128} className="opacity-60 text-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default GujaratiHeroSection;

