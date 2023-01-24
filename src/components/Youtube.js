import YouTube from "react-youtube"

export default function YoutubeVideo(props) {
    const {src} = props
    const opts = {
        height: "390",
        width: "640",
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
