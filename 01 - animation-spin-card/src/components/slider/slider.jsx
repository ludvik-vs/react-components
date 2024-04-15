import { useState, useEffect } from "react"
import { CircularTraversal } from "../../utils/circularTraversal"
import { handleClick } from "../../utils/handleClickEv"
import {Card} from "../card/card"
import { PrevBtn } from "../btn/prev"
import { NextBtn } from "../btn/next"
import "./slider.scss"

export default function Slider({data}){

    // States
    const [nextEff, setNextEff] = useState(false)
    const [prevEff, setPrevEff] = useState(false)
    const [index, setIndex] = useState(0)
    const [items, setItems] = useState([0])

    // Cycles
    useEffect(() => {   
        CircularTraversal(data, 1, index, setItems)       
    }, [index])
    
    // Functions
    function setAction(action){
        handleClick(action, index, data, setNextEff, setPrevEff, setIndex)
    }

    return(
        <div className="slider">
            <div className="slider-perspective">
                <Card item={items[0]} cardClass='slider--first' nextEff={nextEff} prevEff={prevEff} />
                <Card cardClass='slider--second' />
                <Card cardClass='slider--third' />
                <Card cardClass='slider--forth' />
            </div>
            <div className="slider-action">
                <PrevBtn setAction={setAction} />
                <NextBtn setAction={setAction} />
            </div>

        </div>
    )
}
