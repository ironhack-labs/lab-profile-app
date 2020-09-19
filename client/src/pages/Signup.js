import React, { useContext, useState } from "react"
import { Form, Input, Button, Select } from "antd"
import { signup } from "../services/auth"
import { Redirect } from "react-router-dom"
import { Context } from "../context"


const Signup = ({ history }) => {
    const [form] = Form.useForm()

    const { user } = useContext(Context)

    const [myCampus, setMyCampus] = useState('Madrid')
    const [myCourse, setMyCourse] = useState('Web Dev')

    async function onFinish(values) {
        values.campus = myCampus
        values.course = myCourse
        await signup(values)
        history.push("/login")
    }

    return !user ? (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '700px', height: '100%', alignItems: 'flex-start', padding: 40 }}>
            <h1 style={{ color: 'rgb(99, 129, 101)', fontSize: '2.8rem' }}>Sign Up</h1>

            <Form layout='vertical' form={form} onFinish={onFinish}>
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password />
                </Form.Item>


                {/* <Form.Item
                    name="campus"
                    label="Select campus:"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please select your campus!',
                        },
                    ]}
                >
                    <Select placeholder="Please select a campus">
                        <Option value="Madrid">Madrid</Option>
                        <Option value="Barcelona">Barcelona</Option>
                        <Option value="Miami">Miami</Option>
                        <Option value="Paris">Paris</Option>
                        <Option value="Berlin">Berlin</Option>
                        <Option value="Amsterdam">Amsterdam</Option>
                        <Option value="México">México</Option>
                        <Option value="Sao Paulo">Sao Paulo</Option>
                        <Option value="lisbon">Lisbon</Option>
                    </Select>
                </Form.Item> */}

                <label for="campus">Select your campus:</label>
                <select id="campus" name="campus" form="profile" value={myCampus} onChange={(e) => setMyCampus(e.target.value)}>
                    <option value="Madrid"> Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Miami">Miami</option>
                    <option value="Paris">Paris</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="México">México</option>
                    <option value="Sao Paulo">Sao Paulo</option>
                    <option value="lisbon">Lisbon</option>
                </select>

                <br />

                {/* <Form.Item
                    name="course"
                    label="Select your course:"
                    hasFeedback
                    rules={[
                        {
                            required: false,
                            message: 'Select your course!',
                        },
                    ]}
                >

                    <Select placeholder="Select your course">
                        <Option value='Web Dev'>Web dev</Option>
                        <Option value='UX/UI'>UX/UI</Option>
                        <Option value='Data Analytics'>Data Analytics</Option>

                    </Select>
                </Form.Item> */}

                <label for="course">Select your course:</label>
                <select id="course" name="course" form="profile" value={myCourse} onChange={(e) => setMyCourse(e.target.value)}>
                    <option value="Web Dev">Web Dev</option>
                    <option value="UX/UI">'UX/UI'</option>
                    <option value="Data Analytics">Data Analytics</option>
                </select>
            </Form>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '700px', height: '100%', alignItems: 'flex-end', padding: 40 }}>
                <div>
                    <h2>Hello!</h2>
                    <p>Welcome to IronProfile!</p>
                </div>
                <div>
                    <p>If you signup, you agree with al our<br />terms and conditions where we can<br />do whatever we want whit the data!</p>
                    <Button style={{ width: 200, height: 30, border: 'none', backgroundColor: 'rgb(255, 255, 255)', margin: "60px" }} type='primary' htmlType='submit'>
                        Create the Account
                        </Button>
                </div>
            </div>

        </div>
    ) : (
            <Redirect to='/profile' />
        )

}

export default Signup   