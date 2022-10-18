import instance from "../instance";

const profile = {
  async getProfile(userId) {
    return instance.get(`profile/${userId}`).then(({ data }) => data);
  },
};

export default profile;
