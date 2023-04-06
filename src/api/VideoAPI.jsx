import Axios from 'axios';

const API_KEY = 'AIzaSyCVHMlCgqAHScpo4yoT5XPB9py5Lb0wSQQ';

const VideoAPI = async (query) => {
    try {
        const response = await Axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
                params: {
                    part: "snippet",
                    type: "video",
                    q: query,
                    key: API_KEY,
                    maxResults: 10
                },
            }
        );
        const videos = response.data.items.map((item) => {
            return {
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.default.url,
                channel: item.snippet.channelTitle,
            };
        });
        return videos;
    } catch (error) {
        console.log(error);
    }
};


export default VideoAPI;
