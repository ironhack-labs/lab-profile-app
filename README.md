![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React IronProfile


Profile page is one of the most common features you will need to add to your projects, so today we are going to practice creating one.

## Introduction

We will create a backend REST API using NodeJS and a front-end app using React where users will be able to **signup, login, upload a profile picture, check their profiles and edit it.**

## Setup

- Fork this repo
- Clone this repo

```shell
$ cd lab-profile-app
$ npm install
$ npm start
```

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 1 | The REST API

You will start by creating the backend REST API. Create a new _server_ app using the [Ironlauncher](https://www.npmjs.com/package/ironlauncher) with the command `npx ironlauncher choose-app-name --json`.

Once done, create the **user model** in the `user.model.js` file having the following fields:

- **username**: String,
- **password**: String
- **campus**: String. Possible values: `"Madrid"`, `"Barcelona"`, `"Miami"`, `"Paris"`, `"Berlin"`, `"Amsterdam"`, `"México"`, `"Sao Paulo"`, `"Lisbon"`, `"Remote"`.
- **course**: String. Possible values: `"Web Dev"`, `"UX/UI"`, `"Data Analytics"`,`"Cyber Security"`.
- **image**: String.

The server should have the following routes:

| Method | Endpoint       | Request                                        | Return Value         |
| ------ | -------------- | ---------------------------------------------- | -------------------- |
| POST   | `/auth/signup` | { `username`, `password`, `campus`, `course` } | User object          |
| POST   | `/auth/login`  | { `username`, `password` }                     | Authentication Token |
| GET    | `/auth/verify` |                                                | User logged          |
| PUT    | `/api/user`    | {`username`, `campus`, `course`, `image`}      | Updated user object  |
| POST   | `/api/upload`  | form-data with the image file                  | Image URL            |

:::info
Remember to test the REST API using Postman, to make sure everything is working! :wink:
:::



### Iteration 2 | The React App

Create a new React App using the command `npx create-react-app choose-app-name`. 

Once done, set up the app routing using the `react-router-dom`. Create a page component called `HomePage` that displays two buttons: `Sign up` and `Log in`. Buttons should redirect to the front-end routes `/signup` and `/login` respectively.

![image](https://user-images.githubusercontent.com/23629340/43786924-1c5d3d5a-9a6a-11e8-90c4-7ff2f92ef983.png)

:::
All the assets you need for the design are stored inside the `assets/` folder, but for now, don't worry about that, focus on the functionality!
:::




### Iteration 3 | Signup/Login Components

You should create the `Signup` and `Login` page components, where the user will be able to fill the form with the specified fields.

If the *signup* or *login* is successful, the user must be redirected to the **Home Page** page.

![image](https://user-images.githubusercontent.com/23629340/43787810-2c9dc94e-9a6c-11e8-8854-0993c5de16a3.png)

![image](https://user-images.githubusercontent.com/23629340/43787823-37a22ed4-9a6c-11e8-9c8e-70cd622f4d96.png)



### Iteration 4 | Implement the authentication logic

You should create a new folder named `context/` and inside of it a file `auth.context.js`. Inside of the file you should create a new *Context* object and the `AuthProviderWrapper` component.

1. To create a *Context* object use the method `React.createContext()` ([example](https://github.com/ironhack-labs/lesson-code-h-react-authentication-frontend/blob/master/src/context/auth.context.js#L5)).

2. The `AuthProviderWrapper` component should have the following state variables for storing the user information and the authentication state: `isLoggedIn`, `isLoading` and `user` ([example](https://github.com/ironhack-labs/lesson-code-h-react-authentication-frontend/blob/master/src/context/auth.context.js#L8-L10)).

3. The `AuthProviderWrapper` component should also have functions `verifyStoredToken`, `logInUser` and `logOutUser` used for handling the authentication logic ([example](https://github.com/ironhack-labs/lesson-code-h-react-authentication-frontend/blob/master/src/context/auth.context.js#L13-L64)). 
   You will need to provide the above mentioned state values and functions through the `value` prop ([example](https://github.com/ironhack-labs/lesson-code-h-react-authentication-frontend/blob/master/src/context/auth.context.js#L73)).

4. Finally, remember to wrap the `<App />` component with the `<AuthProviderWrapper></AuthProviderWrapper>` ([example](https://github.com/ironhack-labs/lesson-code-h-react-authentication-frontend/blob/master/src/index.js#L13-L15)).
5. Use the React hook `useContext()` to access the values coming from the `AuthProviderWrapper`  and to finish implementing the log in ([example](https://github.com/ironhack-labs/lesson-code-h-react-authentication-frontend/blob/812bdce8d55cdad3d428dc9a8f4b3fdd8e3f6fd0/src/pages/LoginPage.js#L14)).




### Iteration 5 | Upload the Photo

On the profile route, the user should be able to upload a photo to the profile. In this iteration, you should create all that is necessary to upload a new profile picture and store it in the database.

![image](https://user-images.githubusercontent.com/23629340/43787903-6a370928-9a6c-11e8-89b1-15e86e0397e4.png)



### Iteration 6 | Auth Service

Create an `authService` file, where you will have the methods to abstract the axios requests to your REST API. Create the following methods:

- **signUp** that makes a `POST` request to the server endpoint `/auth/signup` passing _username_, _password_, _campus_ and _course_ info,
- **logIn** that makes a `POST` request to the server endpoint `/auth/login` passing _username_ and _password_,
- **verifyToken** that makes a `GET` request to the server endpoint `/auth/verify` to check if a user is logged in.
- **uploadPhoto** that makes a `POST` request to the server endpoint `/api/upload` and sends the _file_,
- **editUser** that makes a `PUT` request to the server endpoint `/api/user` passing _username_, _campus_, _course_ and _image_.



### Iteration 7 | Bonus| Styling your App

Feel free to style it how ever you want. :art:
Or you can use `.png` inside of the `assets` folder that you can use as a background image. Don't forget to copy (or move) the image inside public folder of your React app. Here you can check the colors:

- Gradient background color: `#C1DFC4` to `#DEECDD`
- Green: `#638165`
- Red: `#D0021B`

Happy coding! :heart:
