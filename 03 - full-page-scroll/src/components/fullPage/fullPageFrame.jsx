import "./fullPage.scss"

export default function FullPageFrame({ refComponent, pageId, bgColor, keyId, children }) {

    return (
        <div
            ref={refComponent}
            id={pageId}
            key={keyId}
            className="fullPage"
        >
            <div 
                className="fullPage-container"
                style={{ backgroundColor: bgColor }}
            >
                {children}
            </div>
        </div>
    )
}
