import { Form, Input } from "antd"

const MyForm = ({name}) => {
    return <Form>
        <Form.Item label='姓名' name='name' initialValue={name}>
           <Input />
        </Form.Item>
    </Form>
}

export default MyForm