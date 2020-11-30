import { useEffect } from 'react';
import { loggedinFn, uploadFn } from '../services/auth';
import { useContextInfo } from '../hooks/auth';
import { Upload, message, Button, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const {Title, Text} = Typography;

const Profile = ({ history }) => {
  const { user, login } = useContextInfo();
  useEffect(() => {
    async function getProfile() {
      const { data } = await loggedinFn();
      console.log('user',user);
      console.log('data', data);
      if (!data) return history.push('/login');
      login(data);
      console.log('User logged');
    }
    getProfile();
  }, []);
  
  const handleSubmit = (file) => {console.log('onChange',file[0])}

  return user ? (
    <div>
      <Title level={1}>  Welcome {user.username}</Title>

      <Text type="secondary">Update your profile pic here </Text>
      <Upload 
        onChange={handleSubmit}
        action={(file) => console.log('action',file)}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  ) : <p>Loading...</p>;
};

export default Profile;
