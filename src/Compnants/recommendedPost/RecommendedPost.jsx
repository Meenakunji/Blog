import React, { useEffect, useState } from "react";

//components
import Card from "../Card";

//css
import "../card.css"


function filterDataBasedOnLikes(data) {
    const filteredData = [...data];

    filteredData.sort((a,b)=>{
        const likesOfA = a.likes || 0;
        const likesOfB = b.likes || 0;
        return likesOfB-likesOfA;
    })

    return filteredData;
}

const RecommendedPost = ({ data }) => {
    const [topPost, setTopPost] = useState(data);

    useEffect(()=>{
        const topPostBasedOnLikes = filterDataBasedOnLikes(data);
        setTopPost(topPostBasedOnLikes);
    }, []);


    return (
        <div> 
            <h2>Recommended Post: </h2>
            <div className="cardbox">
                {topPost.map((post) => <Card item={post} />)}
            </div>
        </div>
    )
}

export { RecommendedPost }