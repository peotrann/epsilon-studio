
import { VideoMetadata } from '../types';

export const extractVideoId = (url: string): string | null => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
};

export const fetchVideoMetadata = async (url: string): Promise<Partial<VideoMetadata>> => {
  const videoId = extractVideoId(url);
  if (!videoId) return {};

  try {
    // Using YouTube oEmbed endpoint (no API key required)
    const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
    const data = await response.json();
    
    return {
      id: videoId,
      title: data.title || 'Untitled Video',
      description: `Video từ kênh ${data.author_name || 'YouTube'}.`,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      id: videoId,
      title: 'YouTube Video',
      description: 'Không thể lấy thông tin mô tả.',
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/0.jpg`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`
    };
  }
};
