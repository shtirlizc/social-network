import PropTypes from "prop-types";

export const matchType = {
  isExact: PropTypes.bool.isRequired,
  params: PropTypes.exact({
    userId: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

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
  photos: PropTypes.exact({
    small: PropTypes.string,
    large: PropTypes.string,
  }),
};

export const authData = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

export const friendItem = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export const sidebarLink = {
  id: PropTypes.number,
  link: PropTypes.string,
  text: PropTypes.string,
};

export const postItem = {
  id: PropTypes.number,
  likesCount: PropTypes.number,
  message: PropTypes.string,
};
