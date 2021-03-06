import { useState } from "react";
import "./Collapsable.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Collapsable({ children, collapsedContent }: CollapsableProps) {
    const [collapsed, setCollapsed] = useState(false);

    let arrowIcon = faMinus;
    if (collapsed) {
        arrowIcon = faPlus;
    }

    return <div className="collapsable">
        <div className="collapsed-content">
            <div className={"toggle-button" + (collapsed ? " collapsed" : "")} onClick={() => setCollapsed(!collapsed)}>
                <FontAwesomeIcon icon={arrowIcon} />
            </div>
            {collapsedContent}
        </div>

        {!collapsed && <>
            <div className="start">{"{"}</div>
            <div className="expanded-content" >

                {children}
            </div>
            <div className="end">{"}"}</div>
        </>}
        {collapsed && <div className="content-hidden" onClick={() => setCollapsed(false)}>
            <span className="start">{"{"}</span> ... <span className="end">{"}"}</span>
        </div>}

    </div>
}

interface CollapsableProps {
    collapsedContent: React.ReactNode;
    children: React.ReactNode;
}



function collapseBehavior() {
    // stuff
    // stuff
    // stuff
    // stuff
    // stuff
    // stuff
    // stuff
    // stuff
    // stuff
    // stuff
    // stuff
}