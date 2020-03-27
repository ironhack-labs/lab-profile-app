import { withoutLogged } from "../../lib/protectedRoutes";

import { Home } from "../components/Home/index";

export const HomePage = withoutLogged(Home);
