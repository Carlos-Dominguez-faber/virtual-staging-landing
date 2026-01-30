import React from 'react';
import { Box } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 mb-12">
          
          <div className="flex items-center gap-2">
            <div className="text-blue-600">
               <Box size={28} strokeWidth={3} />
            </div>
            <h3 className="font-bold text-xl tracking-tight text-slate-900">Virtual Staging Pro</h3>
          </div>

          <div className="flex justify-center gap-8 text-sm text-slate-500 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Legal</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Status</a>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-400 font-medium">
              © 2024 Virtual Staging Pro. Built with AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;