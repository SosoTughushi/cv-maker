import { Language } from "../../cv/language";
import Collapsable from "../Collapsable";
import "./Languages.scss";

export default function Languages({ languages }: LanguagesProps) {
    return <div className="languages">
        <Collapsable collapsedContent={<div className="languages-title">Languages</div>}>
            <div className="languages-content">
                <table>
                    <thead>
                        <th></th>
                        <th>Listening</th>
                        <th>Reading</th>
                        <th>Spoken interaction</th>
                        <th>Spoken production</th>
                        <th>Writing</th>
                    </thead>
                    <tbody>
                        {languages.map(language => <tr>
                            <td className="language-name">{language.name}</td>
                            <td>{language.listening}</td>
                            <td>{language.reading}</td>
                            <td>{language.spokenInteraction}</td>
                            <td>{language.spokenProduction}</td>
                            <td>{language.writing}</td>
                        </tr>)}
                    </tbody>
                </table>
                <div className="clarification">
                    Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2: Proficient user
                </div>
            </div>
        </Collapsable>
    </div>
}

interface LanguagesProps {
    languages: Language[]
}