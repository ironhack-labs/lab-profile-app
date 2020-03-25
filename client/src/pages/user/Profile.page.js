import React from "react";

import { Profile } from "../../components/Profile/index";

import { withProtected } from "../../../lib/withProtected";

export const ProfilePage = withProtected(Profile, {});
