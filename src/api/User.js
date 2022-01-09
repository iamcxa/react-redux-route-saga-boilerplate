import config from '~/config';

const version = config.API_VERSION;
const prefix = `/api${version}/app`;

const api = {
  getUsers: ({ page = 1, pageSize = 30, keyword }) =>
    `/api/users/all?page=${page}&pageSize=${pageSize}${keyword ? `&keyword=${keyword}` : ''}`,

  getFriends: ({ page = 1, pageSize = 30 }) =>
    `/api/users/friends?page=${page}&pageSize=${pageSize}`,

  getTags: ({ page = 1, pageSize = 10 }) => `/api/tags?page=${page}&pageSize=${pageSize}`,
};

export default api;
