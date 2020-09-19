import React, {useContext} from 'react'
import { Form, Input, Button, Select } from "antd"
import { Redirect } from 'react-router-dom';
import axios from "axios"
import { signup } from '../services/auth';
import { Context } from "../context" 

const {Option} = Select

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


const Signup = ({ history }) => {
	const [form] = Form.useForm();
	const { user } = useContext(Context)

	async function onFinish(values){
		await signup(values);
		history.push("/login")
	}

    return  !user ? ( 
		<div className="card" style={{backgroundColor: '#DEECDD'}} >
			<div style={{backgroundColor: 'white', padding: '20px'}}>
			<Form {...layout} form={form} onFinish={onFinish}>
				<Form.Item label="Username" name="username">
					<Input />
				</Form.Item>
				<Form.Item label="Password" name="password" >
					<Input.Password />
				</Form.Item>
				<Form.Item label="campus" name="campus" >
                    <Select allowClear>
                        <Option value="Barcelona">Barcelona</Option>
                        <Option value="Miami">Miami</Option>
                        <Option value="Berlin">Berlin</Option>
                        <Option value="Amsterdam">Amsterdam</Option>
                        <Option value="México">México</Option>
                        <Option value="Sao Paulo">Sao Paulo</Option>
                        <Option value="Lisbon">Lisbon</Option>
                    </Select>
				</Form.Item>
				<Form.Item label="Course" name="course" >
					<Select allowClear>
						<Option value="Web Dev">Web Dev</Option>
						<Option value="UX/UI">UX/UI</Option>
						<Option value="Data Analytics">Data Analytics</Option>
					</Select>
				</Form.Item>
                <Form.Item {...tailLayout}>
				<Button htmlType='submit'>Signup</Button>
                </Form.Item>
			</Form>
			</div>
			<div className="green" style={{height:'100%'}}>

			</div>
		</div>
		):
		(
			<Redirect to ="/" /> 
		)
}

export default Signup