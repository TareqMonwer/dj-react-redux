import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Articles from '../components/Article';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                setArticles(res.data);
            })
    }, [articles.length])

    return (
        <Articles data={articles} />
    );
}

export default ArticleList;