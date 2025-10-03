import './top_bar.css'

function Top_bar() {
  return (
    <div id="top_section">
        <a id="menu_button">
            <img src="/topbar_icons/Menu.png" alt="menu button" height="17px" width="20px"></img>
        </a>
        <a>
            <img id="logo" src="/topbar_icons/Logo/Black.png" alt="logo" height="25px" width="116px"></img>
        </a>
        <div className="search">
            <div id="search_field">
                <div id="search_text">Search</div>
            </div>
            <a className="search_icon">
                <img id="search_icon" src="/topbar_icons/Shape.png" alt="search logo" height="19px" width="19px"></img>
            </a>
        </div>
        <div className="icons">
            <a>
                <img src="/topbar_icons/icons/phone-18.png" alt="meeting" height="20px" width="27px"></img>
            </a>
            <a>
                <img src="/topbar_icons/icons/Combined Shape.png" alt="apps" height="21px" width="21px"></img>
            </a>
            <a id="notifications">
                <img src="/topbar_icons/icons/ui-11.png" alt="notifies" height="26px" width="22px"></img>
                <img id="notify_oval" src="/topbar_icons/icons/Oval.png" alt="notify alert" height="18px" width="18px"></img>
                <div id="notify_count">3</div>
            </a>
        </div>
        <a className="user_pic">
            <img id='user_img' src="/topbar_icons/Userpic.png" alt="User picture" height="40px" width="40px"></img>
            <img id='more_top_channel' src="/topbar_icons/more_top_channel.png" alt="" />
        </a>
    </div>
  )
}

export default Top_bar
