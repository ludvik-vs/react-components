import { useState, useEffect } from "react"
import "./slider.scss"

export default function Slider({data}){

    // States
    const [nextEff, setNextEff] = useState(false)
    const [prevEff, setPrevEff] = useState(false)
    const [index, setIndex] = useState(1)
    const [items, setItems] = useState([0])

    // Functions
    function next() {
        setNextEff(true);
        setTimeout(() => {
            if (index >= data.length - 1) {
                setIndex(0);
                updateItemsSet(0);
            } else {
                const newIndex = index+1
                setIndex(newIndex);
                updateItemsSet(newIndex);
            }
            setNextEff(false);
        }, 1000);
    }

    function prev() {
        setPrevEff(true);
        setTimeout(() => {
            if (index <= 0) {
                setIndex(data.length - 1);
                updateItemsSet(data.length - 1);
            } else {
                setIndex(index - 1);
                updateItemsSet(index - 1);
            }
            setPrevEff(false);
        }, 1000);
    }

    function updateItemsSet(nextIndex) {

        let newItems = []

        if (nextIndex === 0) {
            newItems = [data.length - 1, 0, 1, 2];
        } else if (nextIndex === data.length - 1) {
            newItems = [data.length - 2, data.length - 1, 0, 1];
        } else {
            newItems = [nextIndex - 1, nextIndex, nextIndex + 1, nextIndex + 2];
        }

        setItems(newItems)

    }

    // Cycles
    useEffect(() => {   
        
    }, [nextEff, prevEff, index, items])

    return(
        <div className="slider">

            <div className="slider-perspective">

                <div 
                    className={`
                        slider--card slider--first 
                        ${nextEff ? "next_anim" : ""} 
                        ${prevEff ? "prev_anim" : ""}`}
                >
                    <div
                        className="card-banner"
                        style={{
                            backgroundImage: `url(${data[items[0]]?.image})`,
                        }}
                    ></div>
                    <div className="card-body">
                        {data[items[0]]?.name}
                    </div>
                    <div className="card-footer">
                        {data[items[0]]?.description}
                    </div>

                </div>

                <div 
                    className={`
                        slider--card slider--second
                    `}
                >
                    <div
                        className="card-banner"
                        style={{
                            background: '#c9c8c3',
                        }}
                    ></div>
                    
                    <div className="card-body">
                        
                        <div style={{
                            height: '10px',
                            width: '100%',
                            background: '#c9c8c3',
                        }}></div>
                        
                    </div>

                    <div className="card-footer">
                        
                        <div style={{
                            height: '10px',
                            width: '100%',
                            background: '#c9c8c3',
                        }}></div>

                    </div>
                </div>

                <div 
                    className={`
                        slider--card slider--third
                    `}
                ></div>

                <div 
                    className={`
                        slider--card slider--forth
                    `}
                ></div>
                
            </div>

            <div className="slider-action">
                <div className="btn-container prev-btn" onClick={() => prev()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
                    </svg>
                </div>
                <div className="icon next-btn" onClick={() => next()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
                    </svg>
                </div>
            </div>

        </div>
    )
}
