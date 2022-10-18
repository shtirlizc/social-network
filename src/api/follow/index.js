import instance from "../instance";

const follow = {
  async follow(userId) {
    return instance.post(`follow/${userId}`, null).then(({ data }) => data);
  },
  async unFollow(userId) {
    return instance.delete(`follow/${userId}`).then(({ data }) => data);
  },
};

export default follow;
