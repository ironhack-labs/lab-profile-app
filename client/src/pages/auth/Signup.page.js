import { withoutLogged } from "../../../lib/protectedRoutes";

import { Signup } from "../../components/Signup/index";

export const SignupPage = withoutLogged(Signup);
