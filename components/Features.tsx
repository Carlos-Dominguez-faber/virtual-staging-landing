import React from 'react';
import { Cpu, DollarSign, Palette } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-slate-900 text-3xl md:text-5xl font-black tracking-tight mb-6">Master Every Detail</h2>
          <p className="text-slate-500 text-lg">
            Our AI doesn't just place furniture; it understands architecture, lighting, and materials to create photorealistic results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <Cpu className="text-blue-600 group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Processing</h3>
            <p className="text-slate-500 leading-relaxed">
              Proprietary neural networks render complex lighting and shadows in under a minute, 100x faster than traditional manual editing.
            </p>
          </div>

          <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
              <DollarSign className="text-green-600 group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cost Efficient</h3>
            <p className="text-slate-500 leading-relaxed">
              Replace expensive physical staging. Save up to $2,500 per property listing while unlimited revisions allow you to get the perfect look.
            </p>
          </div>

          <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
              <Palette className="text-purple-600 group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Design Library</h3>
            <p className="text-slate-500 leading-relaxed">
              Access over 5,000+ 3D assets curated by professional interior designers. From Mid-Century Modern to Contemporary Chic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;