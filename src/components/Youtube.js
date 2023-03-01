import YouTube from "react-youtube"
import { isMobile } from "react-device-detect";

export default function YoutubeVideo(props) {
    const {src} = props
    const opts = {
        height: isMobile?"185":"390",
        width: isMobile?"320":"640",
        playerVars: {
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    }

    return (
        <div>
            <YouTube videoId={src}
                opts={opts} onReady={onReady} />
        </div>
    );
}
