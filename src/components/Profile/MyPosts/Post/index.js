import React from "react";

import { ReactComponent as LikeSvg } from "./assets/heart.svg";
import s from "./Post.module.css";

const Post = (props) => {
  const { message, likes } = props;

  return (
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
};

export default Post;
