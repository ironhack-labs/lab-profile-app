![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# IronProfile

## Introduction

Having a profile is one of the most commons features you will need to add on your projects, so today we are going to practice creating one.

We will create a Backend REST API using NodeJS and a React Application where users will be able to **Signup, Login, upload a profile picture, check their profiles and edit it.**

## Requirements

- Fork this repo
- Clone this repo


## Submission

- Upon completion, run the following commands

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Deliverables

### Iteration 1 - The REST API

You will start building the app creating the REST API. Create the `app` using the `irongenerator` with the `--auth` flag. Then, modify the **model** so the `User.js` have the following fields:

- **username**. String 
- **password**. String
- **campus**. String. Possible values: `Madrid`, `Barcelona`, `Miami`, `Paris`, `Berlin`, `Amsterdam`, `México`, `Sao Paulo`
- **course**. String. Possible values: `WebDev`, `UX/UI`, `Data Science`.
- **image**. String

The app will need the following routes: 

| Method  |  Endpoint         |  Parameters               | Return Value |
|---------|-------------------|---------------------------|--------------|
| POST    | `/auth/login`     | username, password        | User logged  |
| POST    | `/auth/signup`    | username, password, campus, course  | User created |  
| POST    | `/auth/upload`    | file                      | User updated |
| POST    | `/auth/edit   `   | username, campus, course  | User updated |
| GET     | `/auth/logout`    |                           | OK Message   |
| GET     | `/auth/loggedin`  |                           | User logged  |

:::info
Remember to test the REST API using Postman, to make sure everything is working! :wink:
:::

### Iteration 2 - The React App

You should create a React App using the `create-react-app`. On the `HomePage` you only need to display two buttons: `Signup` and `Login`. Each of them should redirect to the routes `/signup` and `login`.

![image](https://user-images.githubusercontent.com/23629340/43786924-1c5d3d5a-9a6a-11e8-90c4-7ff2f92ef983.png)

:::
All the assets you need for the design it's stored on the `assets` folder, but for now, do not worry about that, focus on the functionality!
:::

### Iteration 3 - Auth Service

You should create an `authService` file, where you will have all the methods to call your REST API (the same way we learned in class). You have to create the following methods:

- **Signup**. Make a POST request to the `auth/signup` route passing *username*, *password*, *campus* and *course* info.
- **Login**. Make a POST request to the `auth/login` route passing *username* and *password*.
- **Upload**. Make a POST request to the `auth/upload` route passing the *file*.
- **Edit**. Make a POST request to the `auth/edit` route passing *username*, *campus* and *course*.
- **Logout**. Make a GET request to the `auth/logout` route to destroy user session.
- **Loggedin**. Make a GET request to the `auth/loggedin` route to check if a user is logged.


### Iteration 4 - Signup/Login Components

You should create the `signup` and `login` components, where the user will be able to fill the form with the specified fields.

If the `signup` or `login` is successful, the user must be redirected to the `profile` route.

![image](https://user-images.githubusercontent.com/23629340/43787810-2c9dc94e-9a6c-11e8-8854-0993c5de16a3.png)

![image](https://user-images.githubusercontent.com/23629340/43787823-37a22ed4-9a6c-11e8-9c8e-70cd622f4d96.png)

### Iteration 5 - Upload the Photo

On the profile route, the user should be able to upload a photo to the profile. In this iteration, you should create all that is necessary to upload a new profile picture and store it in the database.

![image](https://user-images.githubusercontent.com/23629340/43787903-6a370928-9a6c-11e8-89b1-15e86e0397e4.png)

### Iteration 5 - Styling your App

Finally, you can style your app. On the `assets` folder, you will find all the files you need. And here, you can check the color:

- Gradient background color: #C1DFC4 to #DEECDD
- Green ---> #638165
- Red ---> #D0021B
