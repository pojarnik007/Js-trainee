import './top_bar.css'

function Top_bar() {
  return (
    <div id="top_section">
        <div class="topbar-left">
            <a id="menu_button">
                <img src="/topbar_icons/Menu.png" alt="menu button"/>
            </a> 
            <a>
                <img id="logo" src="/topbar_icons/Logo/Black.png" alt="logo"/>
            </a>
        </div>
        
        <div class="search">
            <div id="search_field">
                <div id="search_text">Search</div>
            </div>
            <a class="search_icon">
                <img id="search_icon" src="/topbar_icons/Shape.png" alt="search logo"/>
            </a>
        </div>

        <div class="topbar-right">
            <div class="icons">
                <a>
                    <img src="/topbar_icons/icons/phone-18.png" alt="meeting"/>
                </a>
                <a>
                    <img src="/topbar_icons/icons/Combined Shape.png" alt="apps"/>
                </a>
                <a id="notifications">
                    <img src="/topbar_icons/icons/ui-11.png" alt="notifies"/>
                    <img id="notify_oval" src="/topbar_icons/icons/Oval.png" alt="notify alert"/>
                    <div id="notify_count">3</div>
                </a>
            </div>
            <a class="user_pic">
                <img id="user_img" src="/topbar_icons/Userpic.png" alt="User picture"/>
                <img id="more_top_channel" src="/topbar_icons/more_top_channel.png" alt="more options"></img>
            </a>
        </div>
    </div>
  )
}

export default Top_bar
