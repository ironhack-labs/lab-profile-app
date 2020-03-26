import { withLogged } from "../../../lib/protectedRoutes";
import { Profile } from "../../components/Profile/index";

export const ProfilePage = withLogged(Profile, {});
