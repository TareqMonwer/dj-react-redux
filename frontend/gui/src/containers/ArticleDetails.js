import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Card } from 'antd';
import CustomForm from '../components/CustomForm';


const ArticleDetails = (props) => {
    const [article, setArticle] = useState({});
    const { articleID } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                setArticle(res.data);
            })
    }, [articleID])

    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
        history.push('/');
    }

    return (
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <Card title="Edit Article">
                <CustomForm method="put" articleID={articleID} />
                <form>
                    <Button htmlType="submit" onClick={handleDelete}>Delete</Button>
                </form>
            </Card>
        </div>
    );
}

export default ArticleDetails;