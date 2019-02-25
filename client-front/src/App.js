import React, { Component } from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Profile from './components/contents/Profile';
import Navbar from './components/navbar/Navbar';

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
	//en el tiempo de construcción de la aplicación, creamos una instancia del authservice
	constructor(props) {
		super(props);
		//arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
		this.state = { loggedInUser: null };
		this.service = new AuthService();
	}

	getUser = (userObj) => {
		this.setState({
			loggedInUser: userObj
		});
	};

	logout = () => {
		this.service.logout().then(() => {
			this.setState({ loggedInUser: null });
		});
	};

	//este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
	fetchUser() {
		if (this.state.loggedInUser === null) {
			//utilizamos el método loggedin para cualquier momento que deseemos obtener la información del usuario quede guardada en el state de app
			this.service
				.loggedin()
				.then((response) => {
					this.setState({
						loggedInUser: response
					});
				})
				.catch((err) => {
					this.setState({
						loggedInUser: false
					});
				});
		}
	}

	render() {
		//al hacer render, almacenamos la información del usuario existente en el state de app
		this.fetchUser();

		//aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
		if (this.state.loggedInUser) {
			//en este caso mostramos los contenidos ya que hay usuario
			return (
				<div className="padre">
					<header className="header">
						<Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
						{/* aqui simplemente se muestra un lorem ipsum genérico para que veáis contenidos que solo se muestran a usuarios logeados */}
						<Profile />
					</header>
				</div>
			);
		} else {
			//si no estás logeado, mostrar opcionalmente o login o signup
			return (
				<div className="padre">
					<header className="header">
						<Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
						<Switch>
							<Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
							<Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
						</Switch>
					</header>
				</div>
			);
		}
	}
}

export default App;
