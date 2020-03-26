import { connect } from "react-redux";

import { withoutLogged } from "../../lib/protectedRoutes";

import { Login } from "../../components/Login/index";

export const LoginPage = connect()(withoutLogged(Login));
