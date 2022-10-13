import PropTypes from "prop-types";

export const profileType = {
  userId: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  aboutMe: PropTypes.string.isRequired,
  lookingForAJob: PropTypes.bool.isRequired,
  lookingForAJobDescription: PropTypes.string,
  photos: PropTypes.exact({
    small: PropTypes.string,
    large: PropTypes.string,
  }).isRequired,
  contacts: PropTypes.exact({
    facebook: PropTypes.string,
    github: PropTypes.string,
    instagram: PropTypes.string,
    mailLink: PropTypes.string,
    twitter: PropTypes.string,
    vk: PropTypes.string,
    website: PropTypes.string,
    youtube: PropTypes.string,
  }).isRequired,
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
