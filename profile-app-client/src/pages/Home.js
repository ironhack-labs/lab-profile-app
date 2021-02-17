import { Col, Row, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;

function Home() {
  return (
    <div>
    <Row gutter={[16, 16]}>
      <Col span={6} style={{display:'flex', flexDirection: 'column', margin: '10px'}}>
        <Title>IronProfile</Title>
        <h4>
          Today we will create an app with authorization, adding some cool
          styles!
        </h4>
        <Button type="primary" style={{margin: '10px'}} >
          <Link to={'/signup'}>Signup</Link>
        </Button>
        <Button type="primary" style={{margin:'10px'}}>
          <Link to={'/login'}>Login</Link>
        </Button>
      </Col>
    </Row>
    </div>
  );
}

export default Home;
