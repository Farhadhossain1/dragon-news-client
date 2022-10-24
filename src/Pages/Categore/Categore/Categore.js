import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Share/NewsSummaryCard/NewsSummaryCard';

const Categore = () => {
    const categoriesNews = useLoaderData();
    return (
        <div>
             <h2>This is category : {categoriesNews.length}</h2>
             {
                categoriesNews.map(news => <NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)
             }
        </div>
    );
};

export default Categore;