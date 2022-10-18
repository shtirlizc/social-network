import instance from "../instance";

const users = {
  async getUsers(pageSize, pageNumber) {
    return instance.get(`users?count=${pageSize}&page=${pageNumber}`).then(({ data }) => data);
  },
};

export default users;
