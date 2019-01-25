import React from "react"
import { Usercard } from "../components/Usercard";
import { connect } from 'react-redux';

const _Home = ({user})=>{
    console.log(user)
    return (
        <React.Fragment>
            {user ? <Usercard user={user}></Usercard>:<p>Not logged</p>}

        </React.Fragment>
        
    )
}

export const Home = connect(store=>({user:store.user}))(_Home)