import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import styled from 'styled-components';

interface YouTubeThumbnailProps {
  videoUrl: string;
}

const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({ videoUrl }) => {
  const [thumbnail, setThumbnail] = useState<string>('');
  const [videoTitle, setVideoTitle] = useState<string>('');

  useEffect(() => {
    const getThumbnailAndTitle = async () => {
      try {
        const videoId = getVideoIdFromUrl(videoUrl);
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet`
        );

        const thumbnailUrl = response.data.items[0].snippet.thumbnails.medium.url;
        const title = response.data.items[0].snippet.title;
        setThumbnail(thumbnailUrl);
        setVideoTitle(title);
      } catch (error) {
        console.error('유튜브 썸네일 Fetching Error:', error);
      }
    };

    getThumbnailAndTitle();
  }, [videoUrl]);

  const getVideoIdFromUrl = (url: string): string | null => {
    const match = url.match(/(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/);
    return (match && match[2]) || null;
  };

  return thumbnail ? (
    <ThumbnailContainer>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <ThumbnailImage src={thumbnail} alt="YouTube Thumbnail" />
      </a>
      <VideoTitle>
        <TitleLink href={videoUrl} target="_blank" rel="noopener noreferrer">
          {videoTitle.length > 15 ? videoTitle.slice(0, 15) + '...' : videoTitle}
        </TitleLink>
      </VideoTitle>
      <YouTube videoId={getVideoIdFromUrl(videoUrl) || ''} />
    </ThumbnailContainer>
  ) : null;
};

export default YouTubeThumbnail;

const ThumbnailContainer = styled.div`
  width: 170px;
  height: 110px;
  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoTitle = styled.div`
  width: 100%;
  height: auto;
  padding: 2px 5px;
  background: #F3F2F8; 
  border: 0.5px solid #bebebe;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TitleLink = styled.a`
  color: var(--text-default);
  font-size: 13px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
