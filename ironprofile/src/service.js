import axios from 'axios';

const base_url = "http://localhost:3000"

// signup that makes a POST request to the auth/signup route passing username, password, campus and course info,


export const signup = (auth,history) => {
    console.log(auth)
    axios.post(`${base_url}/auth/signup`,auth)
        .then(res=> {
            console.log(res)
            history.push("/login")
            
        })
        .catch (err => {
            console.error(err);
        })
}



// login that makes a POST request to the auth/login route passing username and password,

export const login = (auth,history) => {
    axios.post(`${base_url}/auth/login`, auth)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            history.push("/login")
            //history.push(`/profile/${res.data.user._id}`);
        })
        .catch(err => {
            console.error(err);
        })
};



// upload that makes a PATCH request to the auth/upload route passing the file,

export const update = (id, form) => {
    let formData = new FormData();
    Object.keys(form).forEach(key => {
      formData.append(key, form[key])
    });
    axios.patch(`${base_url}/auth/upload/${id}`,formData,{
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    })
        .then(user => {
            console.log(user);
        })
};





// edit that makes a PATCH request to the auth/edit route passing username, campus and course,
export const edit = (auth,history,user) => {
    axios.patch(`${base_url}/auth/edit/${user._id}`,auth)
        .then(res=> {
            console.log(res)
            history.push(`/profile/${user._id}`)
        })
        .catch (err => {
            console.error(err);
        })
}


// logout that makes a GET request to the auth/logout route to destroy user session,

export const logout = () => (
    localStorage.removeItem("token")
);


