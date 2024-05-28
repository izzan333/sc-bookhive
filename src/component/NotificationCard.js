import "./NotificationCardStyle.css";

function NotificationCard({notifImg, notifName, notifTime, txtNotifMsg}) {
    return (
        <div className="NotificationCard">
            <div className="notification-wrapper">
                <div className="notif-profile">
                    <img className="notif-img" src={notifImg}/>
                </div>
                <div className="notif-msg-wrapper">
                    <div className="notif-header">
                        <p className="txt-notif-name">{notifName}</p>
                        <p className="txt-notif-time">{notifTime}</p>
                    </div>
                    <div className="notif-msg">
                        <p className="txt-notif-msg">{txtNotifMsg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationCard;