import React from 'react'
import { formatViews, timeAgo } from '../utils/helper';

const VideoCard = (props) => {
    const { snippet, statistics } = props.videoData;
    const { thumbnails, channelTitle, title, publishedAt} = snippet;
    const { viewCount } = statistics;
    
    return (
    <div className='rounded-lg w-80'>
        <img className='rounded-2xl' src={thumbnails?.medium?.url} alt = "vodThumbnail"/>
        <p className='font-bold text-wrap'>{title.slice(0, 50)}...</p>
        <p className='text-gray-600 text-sm'>{channelTitle}</p>
        <div className='flex text-gray-600 text-sm gap-2'>
            <p className=''>{formatViews(viewCount)} views</p>
            <p>{timeAgo(publishedAt)}</p>
        </div>
    </div>
  )
}

export default VideoCard