import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 text-4xl md:text-5xl font-black mb-4">Pricing for Every Agent</h2>
          <p className="text-slate-500 text-lg">Scale your listing presentation with our flexible plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Free</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">$0</span>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-500">Try before you buy</p>
            </div>
            <ul className="flex flex-col gap-4 text-sm flex-grow">
              <li className="flex items-center gap-3 font-medium text-slate-700"><Check size={18} className="text-blue-500" /> 1 HD Render</li>
              <li className="flex items-center gap-3 font-medium text-slate-700"><Check size={18} className="text-blue-500" /> 2 Design Styles</li>
              <li className="flex items-center gap-3 text-slate-400 line-through"><X size={18} /> No Watermark</li>
            </ul>
            <a href="https://virtual-staging.systemizemybiz.com/signup" className="w-full py-3.5 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-colors text-center block">
              Choose Free
            </a>
          </div>

          {/* Starter Plan */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Starter</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">$19.99</span>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-500">Perfect for individuals</p>
            </div>
            <ul className="flex flex-col gap-4 text-sm flex-grow">
              <li className="flex items-center gap-3 font-medium text-slate-700"><Check size={18} className="text-blue-500" /> 10 HD Renders</li>
              <li className="flex items-center gap-3 font-medium text-slate-700"><Check size={18} className="text-blue-500" /> All Design Styles</li>
              <li className="flex items-center gap-3 font-medium text-slate-700"><Check size={18} className="text-blue-500" /> No Watermark</li>
            </ul>
            <a href="https://virtual-staging.systemizemybiz.com/pricing" className="w-full py-3.5 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-colors text-center block">
              Get Started
            </a>
          </div>

          {/* Professional Plan (Popular) */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 border-2 border-blue-600 shadow-xl relative transform md:-translate-y-2">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl">
              Popular
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600">Professional</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">$29.99</span>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-500">Our best value</p>
            </div>
            <ul className="flex flex-col gap-4 text-sm flex-grow">
              <li className="flex items-center gap-3 font-bold text-slate-900"><Check size={18} className="text-blue-600" /> 30 HD Renders</li>
              <li className="flex items-center gap-3 font-bold text-slate-900"><Check size={18} className="text-blue-600" /> Priority Rendering</li>
              <li className="flex items-center gap-3 font-bold text-slate-900"><Check size={18} className="text-blue-600" /> 4K Ultra HD Export</li>
            </ul>
            <a href="https://virtual-staging.systemizemybiz.com/pricing" className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors text-center block">
              Get Pro Now
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">$75</span>
                <span className="text-sm font-medium text-slate-400">/mo</span>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-500">For large teams</p>
            </div>
            <ul className="flex flex-col gap-4 text-sm flex-grow">
              <li className="flex items-center gap-3 font-medium text-slate-700"><Check size={18} className="text-blue-500" /> Unlimited Renders</li>
              <li className="flex items-center gap-3 font-medium text-slate-700"><Check size={18} className="text-blue-500" /> API Access</li>
              <li className="flex items-center gap-3 font-medium text-slate-700"><Check size={18} className="text-blue-500" /> Dedicated Support</li>
            </ul>
            <a href="https://virtual-staging.systemizemybiz.com/pricing" className="w-full py-3.5 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-colors text-center block">
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;