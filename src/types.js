import PropTypes from "prop-types";

export const profileType = {
  userId: PropTypes.number,
  fullName: PropTypes.string,
  aboutMe: PropTypes.string,
  lookingForAJob: PropTypes.bool,
  lookingForAJobDescription: PropTypes.string,
  photos: PropTypes.exact({
    small: PropTypes.string,
    large: PropTypes.string,
  }),
  contacts: PropTypes.exact({
    facebook: PropTypes.string,
    github: PropTypes.string,
    instagram: PropTypes.string,
    mailLink: PropTypes.string,
    twitter: PropTypes.string,
    vk: PropTypes.string,
    website: PropTypes.string,
    youtube: PropTypes.string,
  }),
};

export const usersItem = {
  id: PropTypes.number,
  name: PropTypes.string,
  followed: PropTypes.bool,
  status: PropTypes.string,
  uniqueUrlName: PropTypes.string,
  photos: PropTypes.shape({
    small: PropTypes.string,
    large: PropTypes.string,
  }),
};