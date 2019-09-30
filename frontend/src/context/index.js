import React, { Component, createContext } from 'react'
// Importamos el servicio
import AUTH_SERVICE from '../services/auth'

// Exportamos el contexto
export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    loggedUser: null
  }

  logUser = (loggedUser) => {
    this.setState({ loggedUser })
  }

  logOut = async () => {
    try {
      await AUTH_SERVICE.logOut()
      this.setState({ loggedUser: null })
    }
    catch (err) {
      console.log(`There was an error loggin out: ${err}`)
    }
  }

  render() {
    const { state, logUser, logOut } = this
    return (
      <MyContext.Provider value={{ state, logUser, logOut }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider