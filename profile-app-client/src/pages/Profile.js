import { useState, useEffect } from 'react';
import { useAuthInfo } from '../hooks/authContext';
import {
  Typography,
  Col,
  Row,
  Avatar,
  Button,
  Modal,
  Upload,
  Rate,
  Card,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { uploadAvatar, logoutFn } from '../services/auth';

const { Title, Text } = Typography;

function Profile() {
  //TODO: Complementar

  const { user, setUser } = useAuthInfo();
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     async function loadData() {
  //       const { data } = await getArtistInfo(user.artist);
  //       setArtistInfo(data);
  //     }

  //     loadData();
  //   }, []);

  const uploadButton = (
    <div style={{display: 'flex', alignItems: 'center'}}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginLeft: 8 }}>Upload</div>
    </div>
  );

  const handleChange = async (file) => {
    console.log(file.name)
    setLoading(true);
    const fdata = new FormData();
    fdata.append('image', file);
    console.log({fdata})
    
   const {data: user} = await uploadAvatar(fdata);
      setUser(user);
      setLoading(false);
      
  };

  const handleLogout = async () =>{
    const user = await logoutFn()
    setUser(user)
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 12 }}>
        <Card style={{ width: '100%' }}>
          <Title level={1}>Profile:</Title>

          <Col span={24}>
            <Text>Username: {user.username}</Text>
          </Col>
          <Col span={24}>
            <Text>Country: {user.campus}</Text>
          </Col>
          <Col span={24}>
            <Text>Course: {user.course}</Text>
          </Col>
          <Col span={24}>
            <Avatar size={80} src={user.image} />
          </Col>
          <Col span={24}>
            <Upload
              name="avatar"
              showUploadList={false}
              beforeUpload={handleChange}
              // listType="picture-card"
              // className="avatar-uploader"
            >
              <Button>{uploadButton}</Button>
            </Upload>
          </Col>
        </Card>
      </Col>
      <Row>
        <Button type='primary' onClick={handleLogout}>Logout</Button>
      </Row>
    </Row>
  );
}

export default Profile;
