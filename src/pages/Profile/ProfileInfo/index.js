import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import s from "./ProfileInfo.module.scss";

const ProfileInfo = ({ info }) => {
  const { name, avatar, bg, birthday, city, education, webSite } = info;
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

const mapStateToProps = (state) => ({
  info: state.profilePage.info,
});

ProfileInfo.propTypes = {
  info: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    bg: PropTypes.string,
    birthday: PropTypes.string,
    city: PropTypes.string,
    education: PropTypes.string,
    webSite: PropTypes.string,
  }).isRequired,
};

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;
