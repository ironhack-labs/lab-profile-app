import { withoutLogged } from "../../../lib/protectedRoutes";

import { Login } from "../../components/Login/index";

export const LoginPage = withoutLogged(Login);
