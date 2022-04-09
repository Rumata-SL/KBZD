import React, {useState} from "react";
import {actions} from "@storybook/addon-actions";
import {Rating} from "./Rating";
import {RatingType} from "../UncontrolledRating/UncontrolledRating";

export default {
    title: 'Rating',
    component:Rating,
}

export const EmptyStars = ()=> <Rating value={0} onClick={x=>x}/>
export const Rating11 = ()=> <Rating value={1} onClick={x=>x}/>
export const Rating22 = ()=> <Rating value={2} onClick={x=>x}/>
export const Rating33 = ()=> <Rating value={3} onClick={x=>x}/>
export const Rating44 = ()=> <Rating value={4} onClick={x=>x}/>
export const Rating55 = ()=> <Rating value={5} onClick={x=>x}/>
export const ChangedRating = ()=>{
    const [rating, setRating] = useState<RatingType>(3)
    return<Rating value={rating} onClick={setRating}/>
}