import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as LikeSvg } from "./assets/heart.svg";
import s from "./Post.module.scss";

const Post = ({ message, likes }) => (
  <div className={s.postItem}>
    <div className={s.postAvatar}>
      <img
        src="https://sun9-47.userapi.com/impg/rTgw7T7n13coqYr4RBTihjxnUCwjyqdyVk7_jQ/MsfZ_BSiDGc.jpg?size=519x400&quality=96&proxy=1&sign=f1c988783fd5cce0d899203b5c958130&type=album"
        alt=""
      />
    </div>
    <p className={s.postText}>{message}</p>
    <p className={s.postLike}>
      {likes}
      <LikeSvg />
    </p>
  </div>
);

Post.propTypes = {
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Post;
