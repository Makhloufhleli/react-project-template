function path(root: String, sublink: String) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  maintenance: {
    root: path(ROOTS_DASHBOARD, "/maintenance"),
    show: path(ROOTS_DASHBOARD, "/maintenance/:id"),
  },
  integration: {
    root: path(ROOTS_DASHBOARD, "/integration"),
    new: path(ROOTS_DASHBOARD, "/integration/new"),
    show: path(ROOTS_DASHBOARD, "/integration/:id"),
  },
};
