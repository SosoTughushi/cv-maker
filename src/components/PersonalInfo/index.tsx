import PersonalInfo from "../../cv/personalInfo";
import "./PersonalInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';

export default function PersonalInfoComponent({ personalInfo }: PersonalInfoProps) {
    return <div className="personal-info">
        <div className="row">
            <div className="col-md-4 col-sm-4">
                <div className="image-section">
                    <img src={personalInfo.imageUrl} />
                </div>
            </div>
            <div className="col-md-8 col-sm-8">
                <div className="section-title">Personal Information</div>
                <div className="full-name">{personalInfo.fullName}</div>
                <div className="info-line">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{personalInfo.address}
                </div>
                <div className="info-line">
                    <FontAwesomeIcon icon={faMobileAlt} />{personalInfo.phoneNo}
                </div>
                <div className="info-line">
                    <FontAwesomeIcon icon={faEnvelope} />{personalInfo.email}
                </div>
                {personalInfo.skypeId && <div className="info-line">
                    <span className="fa fa-skype" />{personalInfo.skypeId}
                </div>}
                {personalInfo.linkedInUrl && <div className="info-line">
                    <span className="fa fa-linkedin" />{personalInfo.linkedInUrl}
                </div>}
                {personalInfo.githubUrl && <div className="info-line">
                    <span className="fa fa-github" />{personalInfo.githubUrl}
                </div>}

                <div>
                    <span className="position-title">Position </span> <span className="position">{personalInfo.position}</span>
                </div>
            </div>
        </div>
        <div>
            {personalInfo.summary && <div className="summary">
                <div className="section-title">Summary</div>
                <div className="summary-text">{personalInfo.summary}</div>
            </div>}

        </div>

    </div>
}

interface PersonalInfoProps {
    personalInfo: PersonalInfo
}