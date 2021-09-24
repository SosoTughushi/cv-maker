import Collapsable from "../Collapsable";
import "./Section.scss";

export default function Section({ title, children }: SectionProps) {
    return <div className="section">
        <Collapsable collapsedContent={<div className="section-title">{title}</div>}>
            <div className="section-content">
                {children}
            </div>
        </Collapsable>
    </div>
}

interface SectionProps {
    title: React.ReactNode;
    children: React.ReactNode
}