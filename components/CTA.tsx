import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto rounded-[3rem] p-12 md:p-20 text-center flex flex-col items-center gap-8 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl">
        {/* Abstract Background Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col gap-4">
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight">Ready to Close More Deals?</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Listings with virtual staging sell 30% faster and for 5-10% more. Start transforming your properties today.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-4">
          <a href="https://virtual-staging.systemizemybiz.com/signup" className="flex min-w-[200px] items-center justify-center rounded-2xl h-16 px-8 bg-white text-blue-700 text-lg font-black shadow-xl hover:scale-105 transition-transform">
            Claim Free Trial
          </a>
          <a href="#gallery" className="flex min-w-[200px] items-center justify-center rounded-2xl h-16 px-8 bg-blue-800/40 text-white border border-blue-400/30 text-lg font-bold hover:bg-blue-800/60 transition-all backdrop-blur-sm">
            View Showcase
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;