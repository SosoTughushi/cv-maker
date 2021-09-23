import Moment from "react-moment";
import { Period } from "../../cv/Period";
import "./Period.scss"

export default function PeriodComponent({ period }: PeriodProps) {
    return <div className="period-component">
        <Moment format="MMM YYYY">{period.dateFrom}</Moment>
        -
        {period.dateTo ? <Moment format="MMM YYYY">{period.dateTo}</Moment> : "Today"}
    </div>
}

interface PeriodProps {
    period: Period;
}