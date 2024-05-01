import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ratingTextMap } from "../../constants/prductRatingText";

function ProductReviewRatingChart({ reviews }) {

    const countRatingReviews = (reviews) => {
        const ratingCounts = {};
        for (let i = 1; i <= 5; i++) {
            ratingCounts[i] = 0;
        }
        reviews.forEach((review) => {
            const rating = review.productCommentRatingValue;
            ratingCounts[rating]++;
        });
        return ratingCounts;
    };

    
    const ratingCounts = countRatingReviews(reviews);
     
    const chartData = Object.keys(ratingCounts)
        .reverse() 
        .map((rating) => ({
            rating: ratingTextMap[rating],  
            value: ratingCounts[rating] 
        }));

    return (
        <ResponsiveContainer width="60%" height={200} >
            <BarChart layout="vertical" data={chartData}>
                <XAxis type="number" tick={{ fontSize: 10 }}/>
                <YAxis dataKey="rating" type="category"  tick={{ fontSize: 10 }} />
                <Tooltip/>
                <Bar dataKey="value" fill="#00005cff" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ProductReviewRatingChart;
