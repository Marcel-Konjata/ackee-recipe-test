import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const StarRatingDipslay = ({ score = 0, color = "purple", scale=1, width }) => {
    const stars = [];
    if (score > 0) {
        for (let index = 0; index < score; index++) {
            stars.push(index);
        }

        return (
            <div>{
                stars.map((star, id) => (
                <TiStarFullOutline key={id} style={{ color, transform: `scale(${scale})`, width }} />
                ))
            }
            </div>)
    } else return <span>zatím bez hodnocení</span>;
};
export default StarRatingDipslay;
