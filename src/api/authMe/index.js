import instance from "../instance";

const authMe = {
  async getAuthMe() {
    return instance.get("auth/me").then(({ data }) => data);
  },
};

export default authMe;
