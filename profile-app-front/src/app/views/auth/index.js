import React ,{useContext,useState} from 'react';
import {Ctx} from '../../hooks/context'
import {
    Row,
    Col,
    Typography,
    Form,
    Input,
    Button,
    Divider,
    message
} from 'antd'

//services
//useState,useEffect
import { loginWS,signupWS } from '../../services/auth-endpoint';//importamos los webservices

import {InputForm} from '../../components'
const {Title} = Typography

    //hacemos asincrono



            //props = {match,history,location,...} restProps es todo lo que no esta listado
function Auth ({match,history,location,...restProps}){
        const {login} = useContext(Ctx)//jala el contexto de nuestro archivo en hooks
        const [data, setData] = useState({})

        const handleSubmit = async (user) => {
            try{
                const registro = match.path === "/signup" ? signupWS : loginWS
                const {data} = await registro(user)
                history.push('/profile')
                if(match.path === '/auth'){
                    login(data.result)
                }
                
            }
            catch(error){
                        console.log(error,"error")
            }
    
        }

        const uploadFile = (e) => {
            console.log(e.target.files)
            setData({...data, avatar:e.target.files[0]})
          }

        return(
            <div className="auth backgroundimg">
            <Row gutter={[16,16]} className="insideauth">
                <Col sm={24} md={12}  >
                    <h1 className="h1 form"> {match.path === '/signup' ? 'Signup' : 'Login'} </h1> 
                    <Form onFinish={handleSubmit}> {/* Aqui aplicamos el handle para mandar datos al back */}
                    <div className="form">
                    <Form.Item className="formitem"
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input className="input" />
                    </Form.Item>
                       <Form.Item className="formitem"
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password className="input"/>
                    
                        </Form.Item>
                        {match.path === '/signup' ? <Form.Item className="formitem"
                        label="Campus"
                        name="campus"
                        rules={[{ required: true, message: 'Please input your campus!' }]}
                    >
                    <Input className="input"/>
                    </Form.Item>: ''}
                    {match.path === '/signup' ? <Form.Item className="formitem"
                        label="Course"
                        name="course"
                        rules={[{ required: true, message: 'Please input your course!' }]}
                    > 
                    <Input className="input"/>
                    </Form.Item>: ''}
                        <Input  className="input"type="file" name="avatar" onChange={uploadFile}/>
                    </div>
                    
                    <div >
                        
                    <button className="button" type="primary" htmlType="submit" block htmlType="submit">
                    {match.path === '/signup' ? 'Create the Account' : 'Login'}
                    </button>
                    </div> 
                        </Form>
                </Col>
                <Col span={24}>
                
                </Col>
                {/* Signup con red social */}
                <Col className="greenzone" span={10} offset={3}>
                    <h1 className="title2">Hello!</h1>
                    {match.path === '/signup' ? <h3 className="titlesmall">Welcome to IronProfile!</h3> : <h3 className="titlesmall">Awesome to have at IronProfile again!</h3>}
                    <p className="titlesmall greentext">If you signup,you agree with all our<br/>terms and conditions where we can<br/>do whatever we want with the data!</p>
                <Button block className="button2">
                    <a className="title2" href="http://localhost:3001/api/auth/google/callback">Inicia con Google </a>
                </Button>
                </Col>
            </Row>

            </div>
        )
}

export default Auth;