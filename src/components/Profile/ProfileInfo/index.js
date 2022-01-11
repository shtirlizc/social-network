import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  const { state } = props;
  const { name, avatar, bg, birthday, city, education, webSite } = state;
  const webSiteAddress = `https://${webSite}`;

  return (
    <>
      <div className={s.mainImg}>
        <img src={bg} alt="" />
      </div>

      <div className={s.profile}>
        <div className={s.profileAvatar}>
          <img src={avatar} alt="" />
        </div>

        <div className={s.profileDesc}>
          <h3 className={s.profileName}>{name}</h3>
          <dl className={s.profileList}>
            <dt>Date of Birth:</dt>
            <dd>{birthday}</dd>
            <dt>City:</dt>
            <dd>{city}</dd>
            <dt>Education:</dt>
            <dd>{education}</dd>
            <dt>Web Site:</dt>
            <dd>
              <a href={webSiteAddress} target="_blank" rel="noreferrer">
                {webSite}
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
