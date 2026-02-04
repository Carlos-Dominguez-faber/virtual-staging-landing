import React from 'react';
import { Box } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="text-blue-600">
              <Box size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">Virtual Staging Pro</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">Legal</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Status</a>
          </div>

          <p className="text-sm text-slate-400">
            © 2024 Virtual Staging Pro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;