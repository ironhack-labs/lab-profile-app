import React, {useState} from 'react'
import axios from "axios";
import { Redirect, Link } from 'react-router-dom'
import { Typography, Row, Col, Button, Upload, message, Image } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { useContextInfo } from '../hooks/context'
import { logoutFn } from '../services/auth'

const Profile = ({history}) => {
    const { user } = useContextInfo()
    const [image, setImage] = useState(null)
    const [status, setStatus] = useState('Select a file')
    const { addProfilePic } = useContextInfo()

    const onChange = async ({file}) => {
        setStatus('Loading...')
       
        const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/tomiscattini/image/upload'
    
            const data = new FormData()
            data.append('file', file)
            data.append('upload_preset', 'Varios formatos')
        
            const { data: { secure_url } } = await axios.post(cloudinaryAPI, data)
            console.log(secure_url);
            setImage(secure_url)

            addProfilePic(image)
        
            setStatus('Add picture')
        }
      

    function logout() {
        logoutFn()
        history.push("/")
    }

    return  user ? (
        <Row style={{position: "relative", top: "150px", padding: "30px"}}>
            <Col offset={6} span={5}>
                <Typography.Title level={1} style={{color: '#638165', marginBottom: "70px"}}>Profile</Typography.Title>
                <Typography.Title level={4} type="secondary" style={{color: '#638165'}}>Username:</Typography.Title>
                <Typography.Title level={3} style={{color: '#638165'}}>{user.username}</Typography.Title>
                <Typography.Title level={4} type="secondary" style={{color: '#638165'}}>Campus:</Typography.Title>
                <Typography.Title level={3} style={{color: '#638165'}}>{user.campus}</Typography.Title>
                <Typography.Title level={4} type="secondary" style={{color: '#638165'}}>Course:</Typography.Title>
                <Typography.Title level={3} style={{color: '#638165', marginBottom: "50px"}}>{user.course}</Typography.Title>
                <Link to="" onClick={logout} style={{marginLeft: "80px",color: "#D0021B", fontWeight: "bold", textAlign: "center", fontSize: "20px"}}>Logout</Link>
            </Col>
            <Col offset={3} span={4}>
                <div style={{width: "250px", borderRadius: "50%", overflow: "hidden", margin: "0 auto"}}> 
                <Image
                    width={"inherit"}
                    src={user.image}
                    /></div>
                <div style={{display: "flex", justifyContent: "center",marginTop: "50px"}}>
                <Upload name="image" onChange={onChange}>
                    <Button style={{width: "250px"}} icon={<UploadOutlined />}>Edit photo</Button>
                </Upload>
                </div>
                <Typography.Title level={4} style={{marginTop: "80px"}} type="secondary">The user is able to upload a new profile photo using NodeJs and Multer Uploader</Typography.Title>
            </Col>
        </Row>
    ) : (
        <Redirect to='/' />

    )
}

export default Profile
