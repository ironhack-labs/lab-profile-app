import { connect } from "react-redux";

import { withoutLogged } from "../../lib/protectedRoutes";

import { Signup } from "../../components/Signup/index";

export const SignupPage = connect()(withoutLogged(Signup));
