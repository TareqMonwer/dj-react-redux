import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import CustomForm from '../components/CustomForm';


const ArticleDetails = (props) => {
    const [article, setArticle] = useState({});
    const { articleID } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                setArticle(res.data);
            })
    }, [articleID])

    return (
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <Card title="Edit Article">
                <CustomForm method="put" articleID={ articleID } />
            </Card>
        </div>
    );
}

export default ArticleDetails;