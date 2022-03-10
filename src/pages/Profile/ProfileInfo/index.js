import React from "react";
import { connect } from "react-redux";

import s from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  const { name, avatar, bg, birthday, city, education, webSite } = props.info;
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
              <a href={webSiteAddress} target="_blank" rel="noopener noreferrer">
                {webSite}
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    info: state.profilePage.info,
  };
};

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;
