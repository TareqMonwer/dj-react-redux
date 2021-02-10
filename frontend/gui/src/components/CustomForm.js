import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useHistory} from 'react-router-dom';

const CustomForm = ({ method, articleID }) => {
    const history = useHistory();

    const onFinish = (values) => {
        const title = values.title;
        const content = values.content;
        const reqType = values.type;
        
        switch (reqType) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                    .then((response) => {
                        history.go();
                    })
                    .catch(err => console.error(err));
                break;
            case 'put':
                axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                    .then((response) => {
                        history.go();
                    })
                    .catch(err => console.err(err));
                break;
            default:
                console.log('no valid method provided');
        }
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item
                name='title'
                label="Title"
                required
            >
                <Input />
            </Form.Item>
            <Form.Item name='content' label="Content" required>
                <Input.TextArea />
            </Form.Item>
            <Form.Item name="type" initialValue={ method } hidden={true}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Publish
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CustomForm;