interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
}

// Use Vite's import.meta.env instead of process.env
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = '@AlexKaymakanovAI';

export async function fetchLatestVideos(maxResults: number = 2): Promise<YouTubeVideo[]> {
  // If no API key is available, return mock data
  if (!YOUTUBE_API_KEY) {
    console.warn('No YouTube API key found. Using mock data.');
    return [
      {
        id: 'demo1',
        title: 'How to Automate Your Business with AI',
        description: 'Learn the fundamentals of business automation using artificial intelligence.',
        publishedAt: new Date().toISOString(),
        thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800'
      },
      {
        id: 'demo2',
        title: 'AI Integration Best Practices',
        description: 'Discover the best practices for integrating AI into your existing systems.',
        publishedAt: new Date().toISOString(),
        thumbnailUrl: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=1800'
      }
    ];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch YouTube videos');
    }

    const data = await response.json();
    
    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnailUrl: item.snippet.thumbnails.high.url
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

export async function fetchVideoDetails(videoId: string): Promise<YouTubeVideo | null> {
  if (!YOUTUBE_API_KEY) {
    console.warn('No YouTube API key found. Using mock data.');
    return {
      id: videoId,
      title: 'Sample Video Title',
      description: 'This is a sample video description.',
      publishedAt: new Date().toISOString(),
      thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800'
    };
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoId}&part=snippet`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch video details');
    }

    const data = await response.json();
    
    if (data.items.length === 0) {
      return null;
    }

    const video = data.items[0];
    return {
      id: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      publishedAt: video.snippet.publishedAt,
      thumbnailUrl: video.snippet.thumbnails.high.url
    };
  } catch (error) {
    console.error('Error fetching video details:', error);
    return null;
  }
} 