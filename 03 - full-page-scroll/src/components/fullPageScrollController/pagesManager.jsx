import { cloneElement } from "react"
import "./pagesManager.scss"

export default function PagesManager({mainComponentsList}){

    return(
        <div className="pageManager">

            {
                mainComponentsList.map((item, index) => cloneElement(item, { key: index }))
            }
        
        </div>
    )
    
}
