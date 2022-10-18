import React from "react";
import PropTypes from "prop-types";

import Avatar from "../../Users/assets/avatar.jpeg";
import { profileType } from "../../../types";

import s from "./ProfileInfo.module.scss";

const ProfileInfo = ({ profile }) => {
  const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, photos, contacts } =
    profile;
  const { small, large } = photos;

  return (
    <>
      {large && (
        <div className={s.mainImg}>
          <img src={large} alt="" />
        </div>
      )}

      <div className={s.profile}>
        <div className={s.profileAvatar}>
          <img src={small || Avatar} alt="" />
        </div>

        <div className={s.profileDesc}>
          <h3 className={s.profileName}>{fullName}</h3>
          <dl className={s.profileList}>
            <dt>About me:</dt>
            <dd>{aboutMe}</dd>

            {lookingForAJob && (
              <>
                <dt>Looking for a job:</dt>
                <dd>{lookingForAJobDescription}</dd>
              </>
            )}

            <dt>Contacts:</dt>
            <dd>
              <ul>
                {Object.entries(contacts).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
};

ProfileInfo.defaultProps = {
  profile: null,
};

ProfileInfo.propTypes = {
  profile: PropTypes.exact(profileType),
};

export default ProfileInfo;
