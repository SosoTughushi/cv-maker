import { ContentType } from "./ContentType";

export default PersonalInfo;

type PersonalInfo = {
    fullName: string;
    address: string;
    phoneNo: string;
    email: string;
    position: string;
    imageUrl: string;
    skypeId?: string;
    linkedInUrl?: string;
    personalWebsite?: string;
    githubUrl?: string;
    summary?: ContentType;
}