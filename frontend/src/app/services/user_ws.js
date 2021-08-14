import {_api} from './api'

export const editEnpoint = (data) => _api.post("/auth/edit", data);

export const logoutEndpoint = () => _api.get("/auth/logout");

export const getUserEndpoint = () => _api.get("/auth/logged-in");

//router.post('/upload', uploader.single("image"), uploadProcess);