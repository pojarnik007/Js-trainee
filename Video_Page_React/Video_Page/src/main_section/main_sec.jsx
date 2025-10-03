import './main_sec.css'

function Main_section() {
    return (
    <section className='main'>
        <div id='main_video'>
            <div  id='video_screen'>
                <div id='main_video_prev'>
                    <img src="/main_video/Cover.png" alt="" />
                </div>
                <div id='main_nav'>
                    <div id='time_sec'>
                        <div id='start_time'>1:34</div>
                        <div id='end_time'>19:00</div>
                    </div>
                    <div id='timeline_sec'>
                        <div id='progress'></div>
                    </div>
                    <div id='video_nav_sec'>
                        <div id='left_part'>
                            <img id='pause_ico' src="/main_video/Pause.png" alt="" />
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
                        <img id='pause_mob' src="/main_video/Pause.png" alt="" height='12px' />
                        <div id='mob_center'>
                            <div id='start_time_mob'>1:34</div>
                            <div id='timeline_mob'>
                                <div id='progress_mob'></div>
                            </div>
                            <div id='end_time_mob'>-10:00</div>
                        </div>
                        <img id='volume_mob' src="/main_video/Volume.png" alt="" height='12px' />
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