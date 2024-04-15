import { useEffect, useState, useRef } from "react";
import { handleScroll } from "../../utils/handleScrollEv"
import { CircularTraversal } from "../../utils/circularTraversal"
import "./horizontalNavComponent.scss";

export default function HorizontalNavComponent({ data }) {

    const containerCardRef = useRef();
    const [goEff, setGoEff] = useState(false);
    const [backEff, setBackEff] = useState(false);
    const [wheelValue, setWheelValue] = useState(0);
    const [index, setIndex] = useState(0)
    const [cardItems, setCardItems] = useState([])

    useEffect(() => {

        CircularTraversal(data, 5, index, setCardItems)
        
        const container = containerCardRef.current;
        container.addEventListener("wheel", (e) => handleScroll(e, index, data, setGoEff, setBackEff, setIndex, setWheelValue));

        return () => {
            container.removeEventListener("wheel", (e) => handleScroll(e, index, data, setGoEff, setBackEff, setIndex, setWheelValue));
        };
        
    }, [wheelValue, index]);

    return (
        <div className="horizontalNavFrame">
            <div
                ref={containerCardRef}
                className={`cardsContainer ${goEff ? "goEffect" : ""} ${backEff ? "backEffect" : ""}`}
            >
                <div className="card" style={{ backgroundImage: `url(${cardItems[0]?.image})` }}></div>
                <div className="card" style={{ backgroundImage: `url(${cardItems[1]?.image})` }}></div>
                <div className="card" style={{ backgroundImage: `url(${cardItems[2]?.image})` }}></div>
                <div className="card" style={{ backgroundImage: `url(${cardItems[3]?.image})` }}></div>
                <div className="card" style={{ backgroundImage: `url(${cardItems[4]?.image})` }}></div>
            </div>
        </div>
    );
}
