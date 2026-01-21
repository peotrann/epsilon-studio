
import React from 'react';
import { motion } from 'framer-motion';
import { Document } from '../types';

interface DocumentItemProps {
  doc: Document;
}

const getIconForType = (type: string) => {
  switch (type) {
    case 'PDF': return <span className="text-red-500 font-black">PDF</span>;
    case 'Word': return <span className="text-blue-500 font-black">DOC</span>;
    case 'Excel': return <span className="text-green-500 font-black">XLS</span>;
    case 'PowerPoint': return <span className="text-orange-500 font-black">PPT</span>;
    default: return <span className="text-slate-500 font-black">FILE</span>;
  }
};

export const DocumentItem: React.FC<DocumentItemProps> = ({ doc }) => {
  return (
    <motion.div 
      whileHover={{ x: 8 }}
      className="flex flex-col md:flex-row items-center justify-between p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-blue-400 dark:hover:border-blue-500/50 transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
    >
      <div className="flex items-center space-x-6 w-full mb-4 md:mb-0">
        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
          {getIconForType(doc.fileType)}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
            {doc.title}
          </h4>
          <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
            Định dạng: {doc.fileType}
          </span>
        </div>
      </div>
      <div className="w-full md:w-auto mt-2 md:mt-0 flex-shrink-0">
        <a
          href={doc.filePath}
          download
          className="w-full inline-flex items-center justify-center px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white rounded-2xl text-base font-bold transition-all active:scale-95 shadow-lg shadow-black/5 whitespace-nowrap overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            Tải tài liệu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
        </a>
      </div>
    </motion.div>
  );
};
