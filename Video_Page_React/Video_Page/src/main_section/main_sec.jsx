import './main_sec.css'
import video from "/video.mp4";
import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiPlay, BiSkipNext, BiSkipPrevious, BiPause } from "react-icons/bi";



function Main_section() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState([0, 0]);
    const [currentTimeSec, setCurrentTimeSec] = useState(0);
    const [duration, setDuration] = useState([0, 0]);
    const [durationSec, setDurationSec] = useState(0);

    const sec2Min = (sec) => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
        return {
        min: min,
        sec: secRemain
        };
    };

    useEffect(() => {
        const { min, sec } = sec2Min(videoRef.current.duration);
        setDurationSec(videoRef.current.duration);
        setDuration([min, sec]);

        console.log(videoRef.current.duration);
        const interval = setInterval(() => {
        const { min, sec } = sec2Min(videoRef.current.currentTime);
        setCurrentTimeSec(videoRef.current.currentTime);
        setCurrentTime([min, sec]);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handlePlay = () => {
        if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        } else {
        videoRef.current.play();
        setIsPlaying(true);
        }
    };

    const handleMetadataLoaded = () => {
        if (videoRef.current) {
            const { min, sec } = sec2Min(videoRef.current.duration);
            setDurationSec(videoRef.current.duration);
            setDuration([min, sec]);
        }
    };


    return (
    <section className='main'>
        <div id='main_video'>
            <div className="container">
                <div className="playerContainer">
                    <video className="videoPlayer" ref={videoRef} src={video}></video>
                    <div className="controlsContainer">
                        <div className="duration">
                            <div id='durationLeft'>{currentTime[0]}:{currentTime[1]}</div>
                            <div id='durationRight'>{duration[0]}:{duration[1]}</div> 
                        </div>
                        <input
                            type="range"
                            min="0"
                            max={durationSec || 0}
                            default="0"
                            onLoadedMetadata={handleMetadataLoaded}
                            value={currentTimeSec}
                            className="timeline"
                            onChange={(e) => {
                            videoRef.current.currentTime = e.target.value;
                            }}
                        />
                        <div className="controls">
                            <div id='left_part'>
                                {isPlaying ? (
                                    <button className="controlButton" onClick={handlePlay}>
                                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                        <img id='pause_ico' src="/main_video/Pause.png" alt="" />
                                        </IconContext.Provider>
                                    </button>
                                    ) : (
                                    <button className="controlButton" onClick={handlePlay}>
                                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                        <img id='pause_ico' src="/main_video/Play.png" alt="" />
                                        </IconContext.Provider>
                                    </button>
                                )}
                                <img id='next_ico' src="/main_video/Next.png" alt="" />
                                <div id='volume_sec'>
                                    <img id='volume_ico' src="/main_video/Volume.png" alt="" />
                                    <div id='volume_bar'>
                                        <div id='volume_progress'></div>
                                    </div>
                                </div>
                            </div>
                            <div id='right_part'>
                                <img id='sub_ico' src="/main_video/Subtitles.png" alt="" />
                                <img id='set_ico' src="/main_video/Settings.png" alt="" />
                                <img id='size_ico' src="/main_video/Size.png" alt="" />
                                <img id='screen_ico' src="/main_video/Full Screen.png" alt="" />
                            </div>
                        </div>
                            <div id='mobile_video_nav_sec'>
                                {isPlaying ? (
                                    <button className="controlButton" onClick={handlePlay}>
                                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                        <img id='pause_ico' src="/main_video/Pause.png" alt="" />
                                        </IconContext.Provider>
                                    </button>
                                    ) : (
                                    <button className="controlButton" onClick={handlePlay}>
                                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                        <img id='pause_ico' src="/main_video/Play.png" alt="" />
                                        </IconContext.Provider>
                                    </button>
                                )}
                                <div id='mob_center'>
                                    <div id='start_time_mob'>{currentTime[0]}:{currentTime[1]}</div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={durationSec || 0}
                                        default="0"
                                        onLoadedMetadata={handleMetadataLoaded}
                                        value={currentTimeSec}
                                        className="timeline_mob"
                                        onChange={(e) => {
                                        videoRef.current.currentTime = e.target.value;
                                        }}
                                    />
                                    <div id='end_time_mob'>{duration[0]}:{duration[1]}</div> 
                                </div>
                                <img id='volume_mob' src="/main_video/Volume.png" alt="" height='12px' />
                            </div>
                    </div>
                </div>
            </div>
            <div id='name_sec'>
                <div id='name'>Dude You Re Getting A Telescope</div>
                <img id='arrow' src="/main_video/Right Arrow.png" alt="" height='7px'/>
            </div>
            <div id='under_vid_section'>
                <div id='views'>123k views</div>
                <div id='right'>
                    <div id='likes'>
                        <div className='cover'>
                            <img id='like_ico' src="/main_video/like.png" alt="" />
                            <div>123k</div>
                        </div>
                    </div>
                    <div id='dislikes'>
                        <div className='cover'>
                            <img id='dislike_ico' src="/main_video/dislike.png" alt="" />
                            <div>435k</div>
                        </div>
                    </div>
                    <div id='share'>
                        <div className='cover'>
                            <img id='share_ico' src="/main_video/share.png" alt="" />
                            <div>Share</div>
                        </div>
                    </div>
                    <div id='more'>
                        <img id='more_ico' src="/main_video/More.png" alt="" />
                    </div>
                </div>
            </div>
            <div id='hr'></div>
            <div className='description_section'>
                <div id='description'>
                    <img src="/description/foodLogo.png" alt="" id='author_logo' height='80px'/>
                    <div id='description_right_sec'>
                        <div id='desc_auth_name'>Food & Drink</div>
                        <div id='published_data'>Published on 14 Jun 2019</div>
                        <div id='subscribed'>245K subscribed</div>
                        <div id='description_text'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </div>
                        <a id='show_button'>Show more</a>
                    </div>
                </div>
                <a id='subscribe_button'><div id='desc'>Subscribe 2.3m</div><div id='mob'>Subscribe</div></a>
            </div>
        </div>
        <div id='hr2'></div>
        <div id='rec_videos'> 
            <div id='rec_top_sec'>
                <div id='next_text'>Next</div>
                <div id='autoplay_sec'>
                    <div id='autoplay_text'>Autoplay</div>
                    <div id='switch'><div id='switch_in'></div></div>
                </div>
            </div>
            <div id='video_sec'>
                <div id='video'>
                    <div id='preview_sec'>
                        <img src="/rec_videos/Cover1.png" alt="" id='preview' />
                        <div id='video_time'><div id='time_text'>8:00</div></div>
                    </div>
                    <div id='video_name'>Baby Monitor Technology</div>
                    <div id='video_inf'>
                        <div id='views_rec'>123k views</div>
                        <div id='author'>Dollie Blair</div>
                    </div>
                </div>
                <div id='video'>
                    <div id='preview_sec'>
                        <img src="/rec_videos/Cover2.png" alt="" id='preview' />
                        <div id='video_time'><div id='time_text'>8:00</div></div>
                    </div>
                    <div id='video_name'>Baby Monitor Technology</div>
                    <div id='video_inf'>
                        <div id='views_rec'>123k views</div>
                        <div id='author'>Dollie Blair</div>
                    </div>
                </div>
                <div id='video'>
                    <div id='preview_sec'>
                        <img src="/rec_videos/Cover.png" alt="" id='preview' />
                        <div id='video_time'><div id='time_text'>8:00</div></div>
                    </div>
                    <div id='video_name'>Baby Monitor Technology</div>
                    <div id='video_inf'>
                        <div id='views_rec'>123k views</div>
                        <div id='author'>Dollie Blair</div>
                    </div>
                </div>
                <div id='video'>
                    <div id='preview_sec'>
                        <img src="/rec_videos/Cover4.png" alt="" id='preview'/>
                            <div id='video_time'>
                                <div id='time_text'>8:00</div>
                            </div>
                    </div>
                    <div id='video_name'>Baby Monitor Technology</div>
                    <div id='video_inf'>
                        <div id='views_rec'>123k views</div>
                        <div id='author'>Dollie Blair</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Main_section