import { Form,Input } from "antd";

const InputForm = ({label,name,type}) => (
    <Form.Item name={name} label={label} >
        <Input/>
    </Form.Item>
)

export default InputForm