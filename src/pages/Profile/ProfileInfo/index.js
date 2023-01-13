import React from "react";
import PropTypes from "prop-types";

import Avatar from "../../Users/assets/avatar.jpeg";
import { profileType } from "../../../types";
import ProfileStatus from "./ProfileStatus";

import s from "./ProfileInfo.module.scss";

const ProfileInfo = ({ profile }) => {
  const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, photos, contacts } =
    profile;
  const { small, large } = photos;
  const contactsList = Object.entries(contacts);

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
          <ProfileStatus />
          <dl className={s.profileList}>
            {aboutMe && (
              <>
                <dt>About me:</dt>
                <dd>{aboutMe}</dd>
              </>
            )}

            {lookingForAJob && (
              <>
                <dt>Looking for a job:</dt>
                <dd>{lookingForAJobDescription}</dd>
              </>
            )}

            {contactsList.some(([, value]) => value) && (
              <>
                <dt>Contacts:</dt>
                <dd>
                  <ul>
                    {contactsList.map(([key, value]) => {
                      if (!value) {
                        return null;
                      }

                      return (
                        <li key={key}>
                          <strong>{key}:</strong> {value}
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </>
            )}
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
