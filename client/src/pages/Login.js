import React, { useState, useContext } from 'react'
import { login } from '../services/auth'
import { Context } from "../context"
import { Redirect } from "react-router-dom"
import { Form, Item, Input, Button, message, notification } from "antd"
import axios from "axios"

const Login = ({ history }) => {
    const [form] = Form.useForm();
		const [error] = useState(null);
		const { loginUser, user } = useContext(Context)

		async function onFinish(values){
			const user = await login(values).catch(err => {
                console.dir(err.response.data.message)
                openNotification(err.response.data.message)
			})
			delete user.password;
			loginUser(user)
		}

		const openNotification = message => {
			notification.warning({
				message:"ERROR",
				description:message,
			})
		}

    return !user ?(
		<div className="card" style={{backgroundColor: '#DEECDD'}} >
			<div style={{backgroundColor: 'white', padding: '20px'}}>
			<Form onFinish={onFinish}>
				<Form.Item label="Username" name="username">
						<Input />
				</Form.Item>
				<Form.Item label="Password" name="password">
						<Input.Password />
				</Form.Item>
				<Form.Item>
					<Button htmlType='submit'>Login</Button>
				</Form.Item>
			</Form>
			</div>
			<div className="green" style={{height:'100%'}} >
			</div>
		</div>
		):
		(
            <Redirect to='/profile' />
		)
}

export default Login