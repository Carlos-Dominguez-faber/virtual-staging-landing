import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
         <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 left-1/4 w-full h-full bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-10">Watch the Magic Happen</h3>
                
                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative aspect-video bg-black">
                    <video 
                        className="w-full h-full object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        poster="https://lh3.googleusercontent.com/aida-public/AB6AXuD1PMheIa_0XEFJRKpdk8mIERH0yJ986bmo1krwFLp4nbOZybc6uS1Y4OxXQ-4pROW9HAYxbk_JNZc459n-oq5DE6ebOVHG7TSJ15Fq-HMrRQebiPH4I3XLywl64ch-HAQR5dBYCFrnINXMQ8Tq9A29W05QDH2237qDe3mpFrHvFaI0X1dZwliyTdtKeYK1zreKPpwn8bXpO9bQvELiv64D8AwAmfMsBpJnKEodAu_N5jZl0bUVItFN7SffgoBv-mzXvfeLPc0Ts00"
                    >
                        <source src="https://storage.googleapis.com/msgsndr/bfilCH1kUaWjdh22WREh/media/6969259ae4cf742b9b12dc94.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    {/* Overlay gradient for cinematic look */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
                </div>
                
                <p className="mt-8 text-slate-400 text-sm font-medium uppercase tracking-widest">
                    Real-time rendering preview
                </p>
            </div>
         </div>
      </div>
    </section>
  );
};

export default VideoSection;