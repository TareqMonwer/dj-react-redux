import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';


const ArticleDetails = (props) => {
    const [article, setArticle] = useState({});
    const { articleID } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                setArticle(res.data);
            })
    }, [])

    return (
        <Card title={article.title}>
            <p>{article.content}</p>
        </Card>
    );
}

export default ArticleDetails;