import './side_bar.css'


function Side_bar() {
    return (
         <div class="sidebar">
                <aside id="menu">
                    <a class="home">
                        <img id="home_ico" src=" /sidebar_icons/ui-71.png" alt=""/>
                        <div id="home">Home</div>
                    </a>
                    <a class="trending">
                        <img id="trending_ico" src="/sidebar_icons/Path-957-Copy.png" alt=""/>
                        <div id="trending">Trending</div>
                    </a>
                    <a class="subscriptions">
                        <img id="subscriptions_ico" src=" /sidebar_icons/ui-45.png" alt=""/>
                        <div id="subscriptions">Subscriptions</div>
                    </a>
                    <a></a>
                    <a class="library">
                        <img id="library_ico" src=" /sidebar_icons/documents-11.png" alt=""/>
                        <div id="library">Library</div>
                    </a>
                    <a class="history">
                        <img id="history_ico" src=" /sidebar_icons/others-07.png" alt=""/>
                        <div id="history">History</div>
                    </a>
                    <a class="watch_later">
                        <img id="watch_later_ico" src=" /sidebar_icons/tech-25.png" alt=""/>
                        <div id="watch_later">Watch later</div>
                    </a>
                    <a class="favourites">
                        <img id="favourites_ico" src=" /sidebar_icons/ui-02.png" alt=""/>
                        <div id="favourites">Favourites</div>
                    </a>
                    <a class="liked_videos">
                        <img id="liked_videos_ico" src=" /sidebar_icons/ui-03.png" alt=""/>
                        <div id="liked_videos">Liked videos</div>
                    </a>
                    <a class="music">
                        <img id="music_ico" src=" /sidebar_icons/ui-80.png" alt=""/>
                        <div id="music">Music</div>
                    </a>
                    <a class="games">
                        <img id="games_ico" src=" /sidebar_icons/tech-02.png" alt=""/>
                        <div id="games">Games</div>
                    </a>
                    <a class="show_more">
                        <img id="show_more_ico" src=" /sidebar_icons/chevron-down.png" alt=""/>
                        <div id="show_more">Show more</div>
                    </a>
                </aside>
                <aside id="subscriptions_menu">
                    <div id="subscriptions_title">Subscriptions</div>
                    <div id="subs">
                        <a class="sub1">
                            <img id="sub1_pic" src=" /sidebar_icons/subscriprions/Oval1.png" alt=""/>
                            <div id="sub1">Gussie Singleton</div>
                        </a>
                        <a class="sub2">
                            <img id="sub2_pic" src=" /sidebar_icons/subscriprions/Oval2.png" alt=""/>
                            <div id="sub2">Nora Francis</div>
                        </a>
                        <a class="sub3">
                            <img id="sub3_pic" src=" /sidebar_icons/subscriprions/Oval3.png" alt=""/>
                            <div id="sub3">Belle Briggs</div>
                        </a>
                        <a class="sub4">
                            <img id="sub4_pic" src=" /sidebar_icons/subscriprions/Oval4.png" alt=""/>
                            <div id="sub4">Eunice Cortez</div>
                        </a>
                        <a class="sub5">
                            <img id="sub5_pic" src=" /sidebar_icons/subscriprions/Oval5.png" alt=""/>
                            <div id="sub5">Emma Hanson</div>
                        </a>
                        <a class="sub6">
                            <img id="sub6_pic" src=" /sidebar_icons/subscriprions/Oval6.png" alt=""/>
                            <div id="sub6">Leah Berry</div>
                        </a>
                    </div>
                </aside>
                <a class="settings">
                    <img id="settings_ico" src=" /sidebar_icons/ui-46.png" alt="settings icon"/>
                    <div id="settings">Setting</div>
                </a>
            </div>
    )
}

export default Side_bar