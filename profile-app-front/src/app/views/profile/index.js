import { Row,Col,Typography,Divider,Button } from "antd";
import {useContext} from 'react'
import { Redirect } from "react-router-dom";
import {Ctx} from '../../hooks/context'


const {Title} = Typography;
const Profile = () => {
const {user,logout} = useContext(Ctx)
        //este ternario verifica si existe el usuario y sino manda a registrarse
    return /* user ? */ (
        <div className='profilecard'>
        <Row >
            <Col offset={3} span={21}>
                <h1 className="profiletitle" level={1}> Profile</h1>
            
            
            
                <h3 className="profiletitle2">Username</h3>
                <Title level={2}>Username {}</Title>
                
                <h3 className="profiletitle2">Campus</h3>
                <Title level={2}>Campus {}</Title>
                
                <h3 className="profiletitle2">Course</h3>
                <Title level={2}>Course {}</Title>
                
                
                <Button className="profilebutton" onClick={()=>logout()}>
                    Logout
                </Button>
            </Col>
            <Col className="profilerow">
            <img className="profileimg" src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'} alt={"avatar"} width={200}/>
            <Button className="button3" >
                    Edit Photo
                </Button>
                <p className="greentext2">The user is able to upload a new <br/>profile photo using NodeJS and <br/> Multer uploader.</p>
            </Col>
        </Row>
        </div>
    ) /* : ( <Redirect to={'/auth'}/> ) */
}
export default Profile;