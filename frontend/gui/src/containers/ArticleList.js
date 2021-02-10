import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Articles from '../components/Article';
import CustomForm from '../components/CustomForm';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                setArticles(res.data);
            })
    }, [articles.length])

    return (
        <div>
            <Articles data={articles} />
            <h2>Publish New Article</h2>
            <CustomForm method="post" />
        </div>
    );
}

export default ArticleList;