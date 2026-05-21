import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-800 mx-8 md:mx-24 lg:mx-40">
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-500 font-mono text-sm">
          Conçu et développé par <span className="text-blue-400">Mehdi ABAKRI</span> | 06 89 34 85 05
        </p>
        <p className="text-slate-600 font-mono text-[10px]">
          Propulsé par React 19 & TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;