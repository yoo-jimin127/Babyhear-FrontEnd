import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import styled from "styled-components";

interface YouTubeThumbnailProps {
  videoUrl: string;
}

const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({ videoUrl }) => {
  const [thumbnail, setThumbnail] = useState<string>('');

  useEffect(() => {
    const getThumbnail = async () => {
      try {
        const videoId = getVideoIdFromUrl(videoUrl);
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet`
        );

        const thumbnailUrl = response.data.items[0].snippet.thumbnails.medium.url;
        setThumbnail(thumbnailUrl);
      } catch (error) {
        console.error('유튜브 썸네일 Fetching Error:', error);
      }
    };

    getThumbnail();
  }, [videoUrl]);

  const getVideoIdFromUrl = (url: string): string | null => {
    const match = url.match(/(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/);
    return (match && match[2]) || null;
  };

  return thumbnail ? (
    <ThumbnailContainer>
      <ThumbnailImage src={thumbnail} alt="YouTube Thumbnail" />
      <YouTube videoId={getVideoIdFromUrl(videoUrl) || ''} />
    </ThumbnailContainer>
  ) : null;
};

export default YouTubeThumbnail;

const ThumbnailContainer = styled.div`
  width: 170px;
  height: 95px;
  border-radius: 10px;
  overflow: hidden;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
