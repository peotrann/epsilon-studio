
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { View, Theme, CategoryId } from './types';
import { CATEGORIES, VIDEOS, DOCUMENTS } from './config';
import { ThemeToggle } from './components/ThemeToggle';
import { VideoCard } from './components/VideoCard';
import { DocumentItem } from './components/DocumentItem';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme');
    return (stored as Theme) || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const filteredVideos = useMemo(() => {
    if (!selectedCategory) return [];
    return VIDEOS.filter(v => v.category === selectedCategory);
  }, [selectedCategory]);

  const handleGoHome = () => {
    setView('home');
    setSelectedCategory(null);
  };

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-700 font-sans selection:bg-pink-100 dark:selection:bg-pink-900/30 relative overflow-hidden">
      
      {/* Hiệu ứng nền động tinh tế */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40 dark:opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[45%] h-[45%] rounded-full bg-pink-400/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, -50, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-amber-400/20 blur-[120px]" 
        />
      </div>

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-24">
        
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center justify-center min-h-[60vh] text-center"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter flex flex-wrap justify-center gap-x-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-600 via-pink-500 via-rose-400 via-rose-300 via-amber-300 to-amber-500 drop-shadow-sm">
                  Epsilon
                </span>
                <span className="text-blue-600 dark:text-blue-500">
                  Studio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-14 max-w-2xl leading-relaxed font-light">
                Luôn đồng hành cùng bạn!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                <button
                  onClick={() => setView('videos')}
                  className="flex-1 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-bold text-lg shadow-2xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Xem video ngay
                </button>
                <button
                  onClick={() => setView('documents')}
                  className="flex-1 px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-pink-300 dark:hover:border-pink-500 text-slate-900 dark:text-white rounded-3xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-slate-200/50 dark:shadow-black/20"
                >
                  Lấy tài liệu học
                </button>
              </div>
            </motion.div>
          )}

          {view === 'videos' && (
            <motion.div
              key="videos"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <div className="flex items-center justify-between mb-12">
                <button 
                  onClick={handleGoHome}
                  className="flex items-center text-slate-500 hover:text-blue-500 transition-colors font-semibold group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Trang chủ
                </button>
                <h2 className="text-3xl font-bold tracking-tight">Thư viện Video</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Categories Sidebar */}
                <div className="md:col-span-1 space-y-3">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold mb-4">Danh mục</h3>
                  {CATEGORIES.map((cat, idx) => (
                    <motion.button
                      key={cat.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-5 py-4 rounded-2xl transition-all font-semibold ${
                        selectedCategory === cat.id 
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 translate-x-1' 
                        : 'hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 border border-transparent hover:border-slate-200 dark:hover:border-slate-800'
                      }`}
                    >
                      {cat.name}
                    </motion.button>
                  ))}
                </div>

                {/* Videos Content */}
                <div className="md:col-span-3 min-h-[400px]">
                  <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                      <motion.div 
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center h-full text-slate-400 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] bg-white/40 dark:bg-slate-900/10"
                      >
                        Chọn một danh mục để bắt đầu học
                      </motion.div>
                    ) : filteredVideos.length === 0 ? (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center h-full text-center p-12 bg-white/50 dark:bg-slate-900/20 backdrop-blur-sm rounded-[2.5rem] border border-slate-100 dark:border-slate-800"
                      >
                        <div className="text-5xl mb-4 opacity-40">📂</div>
                        <p className="text-xl text-slate-500 italic">“No videos available yet”</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 gap-10"
                      >
                        {filteredVideos.map((video, idx) => (
                          <VideoCard key={video.youtubeUrl + idx} config={video} />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'documents' && (
            <motion.div
              key="documents"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-4xl mx-auto w-full"
            >
              <div className="flex items-center justify-between mb-16">
                <button 
                  onClick={handleGoHome}
                  className="flex items-center text-slate-500 hover:text-blue-500 transition-colors font-semibold group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Trang chủ
                </button>
                <h2 className="text-3xl font-bold tracking-tight">Kho Tài Liệu</h2>
              </div>

              <div className="space-y-6">
                {DOCUMENTS.map((doc, idx) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <DocumentItem doc={doc} />
                  </motion.div>
                ))}
              </div>

              <div className="mt-20 p-10 bg-gradient-to-br from-blue-50/50 to-pink-50/50 dark:from-slate-900 dark:to-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 text-center">
                <p className="text-slate-600 dark:text-slate-400 font-light italic text-lg leading-relaxed">
                  Tất cả tài liệu được tuyển chọn kỹ lưỡng và sắp xếp khoa học để phục vụ tốt nhất cho quá trình nghiên cứu của bạn.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <footer className="relative z-10 py-16 text-center text-slate-400 dark:text-slate-600 text-sm font-medium tracking-wide border-t border-slate-100 dark:border-slate-900 mt-12">
        <p>© 2026 Epsilon Studio.</p>
      </footer>
    </div>
  );
};

export default App;
