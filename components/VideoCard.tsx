
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { VideoConfig, VideoMetadata } from '../types';
import { fetchVideoMetadata } from '../services/youtubeService';

interface VideoCardProps {
  config: VideoConfig;
}

export const VideoCard: React.FC<VideoCardProps> = ({ config }) => {
  const [metadata, setMetadata] = useState<Partial<VideoMetadata>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const getMeta = async () => {
      setLoading(true);
      const data = await fetchVideoMetadata(config.youtubeUrl);
      if (mounted) {
        setMetadata(data);
        setLoading(false);
      }
    };
    getMeta();
    return () => { mounted = false; };
  }, [config.youtubeUrl]);

  if (loading) {
    return (
      <div className="bg-slate-100 dark:bg-slate-900 rounded-[2rem] overflow-hidden animate-pulse aspect-video mb-6 border border-slate-200 dark:border-slate-800">
      </div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/40 dark:shadow-black/20 transition-all duration-500"
    >
      <div className="aspect-video relative overflow-hidden group">
        <iframe
          src={`${metadata.embedUrl}?rel=0&modestbranding=1`}
          title={metadata.title}
          className="w-full h-full relative z-10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 -z-0" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 leading-tight tracking-tight">
          {metadata.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-base line-clamp-3 font-light leading-relaxed">
          {metadata.description}
        </p>
      </div>
    </motion.div>
  );
};
