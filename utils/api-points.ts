const BASE_API = process.env.BACKEND_URL || "http://localhost:3000/api";

export const EndPoints = {
  base: BASE_API,
  admin: {
    base() {
      return `${BASE_API}/admins`;
    },
    login() {
      return `${BASE_API}/admins/login`;
    },
    getOne(id: string) {
      return `${BASE_API}/admins/one/${id}`;
    },
    getStat(id: string) {
      return `${BASE_API}/admins/stats/${id}`;
    },
    update(id: string) {
      return `${BASE_API}/admins/${id}`;
    },
  },
  center: {
    base() {
      return `${BASE_API}/centers`;
    },
    getPage(page: number) {
      return `${BASE_API}/centers/${page}`;
    },
    count() {
      return `${BASE_API}/centers/count`;
    },
  },
};
