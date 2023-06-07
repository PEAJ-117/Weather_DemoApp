import React from "react";
import Spinner from "./Spinner";

const ShowCard = (loadingData, showData, weather, forecast) => {
    if (loadingData) {
        return <Spinner/>;
    }
    return (
        <h1></h1>
    );
}

export default ShowCard;