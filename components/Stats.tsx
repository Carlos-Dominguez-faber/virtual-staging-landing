import React from 'react';
import { TrendingUp, Clock, Zap } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-8 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          <div className="flex items-center justify-center gap-4 py-4 md:py-0">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <TrendingUp size={32} />
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">1.2M+</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Rooms Staged</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 py-4 md:py-0">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl">
              <Clock size={32} />
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">&lt;60s</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Turnaround Time</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 py-4 md:py-0">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
              <Zap size={32} />
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">4K</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Ultra HD Quality</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;