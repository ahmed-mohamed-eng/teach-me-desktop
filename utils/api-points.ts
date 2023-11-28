const BASE_API = process.env.BACKEND_URL || "http://localhost:8000";

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
  },
};
