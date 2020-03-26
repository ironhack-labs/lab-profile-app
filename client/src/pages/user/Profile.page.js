import { connect } from "react-redux";

import { withLogged } from "../../../lib/protectedRoutes";
import { Profile } from "../../components/Profile/index";

export const ProfilePage = connect(state => ({ user: state.user }))(
  withLogged(Profile, {})
);
