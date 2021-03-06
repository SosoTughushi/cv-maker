import { Education } from "../education"
import { Job } from "../job"
import { Language } from "../language"
import PersonalInfo from "../personalInfo"
import Skill from "../skill"

const lykke: Job = {
    company: "Lykke",
    location: "Remote",
    projects: [
        {
            role: "C# Architect",
            period: { dateFrom: new Date(2018, 3, 1), dateTo: new Date(2019, 4, 1) },
            description: "I was member of integrations team. Our focus was to adapt Lykke's existing margin trading platform to external customer's needs. We wrote wide range of services.",
            responsibilities: [
                "Design and development of most services and code review",
                "Onboarding new developers by explaining domain, mentoring, existing components, team coding conventions and workflow",
                "I was scrum master (for 3 months)"],
            scope: [
                "Transforming/decorating data coming from one component and feeding it to another (via http calls, via rabbit exchanges/queues or via tcp sockets)",
                "Producing reports for customers",
                "Monitoring activities of system and pushing them to customer",
                "Managing complex workflows"
            ],
            stack: [
                "ReactJs", "ASP.NET core", "RabbitMq", "SignalR", "MsSql"
            ]
        },

        {
            role: "C# Architect / Team Lead",
            period: { dateFrom: new Date(2017, 1, 1), dateTo: new Date(2018, 3, 1) },
            description: <>I with my team have designed and implemented high frequency margin trading platform with <b>CQRS</b> and
                <b>Event Sourcing</b> using <b>Apache Kafka</b> as event store, <b>MongoDb</b> as storage for snapshots of aggregates,
                <b>Redis/Mongo/Elasticsearch</b> for projections, asp.net core mvc for http endpoints, wamp for server to client communication and React on FE side.</>,
            responsibilities: [
                "With help of BAs, I've modeled domain",
                <><b>Wrote event sourcing framework</b> for internal usage</>,
                "Explained co-workers business, explained design of system",
                "Established coding and testing practices",
                "Actively reviewed Pull Requests",
                "Distributed the work",
                "Implemented massive amount of features"
            ],
            scope: [],
            stack: [
                <b>CQRS</b>, <b>Event Sourcing</b>, "Apache Kafka", "MongoDb", "Redis", "ElasticSearch",
                "ReactJs", "ASP.net core mvc", "wamp"
            ]
        },

        {
            role: "C# Engineer",
            period: { dateFrom: new Date(2016, 8, 1), dateTo: new Date(2017, 1, 1) },
            description: "I created reporting application. It used background jobs to pull data periodically from multiple sources and form materialized views",
            stack: ["Azure Table Storage", "Asp.net core mvc with razor", "jquery"],
            responsibilities: [],
            scope: []
        },
    ]
}

const amazon: Job = {
    company: "Amazon",
    location: "Luxembourg, Luxembourg",
    projects: [
        {
            role: "Software Engineer",
            description: <>
                <p>I was member of dVat team, which was focused on rethinking and redesigning of vat calculation system.
                    I???ve designed a microservice, which consumes messages from sqs, sends request to dependent service and writes result in Dynamo DB.</p>
                <p>I also wrote front end for internal tool to query data about order movement.</p>
            </>,
            responsibilities: ["Analysis of problem at hand.",
                "Analysis of metrics",
                "Designing microservice",
                "Writing supporting documentation",
                "Estimation of cost",
                "Creation of pipelines for all environment stages",
                "Implemention of microservice",
                "Negotiation with dependancy teams"],
            stack: ["EC2", "ECS", "AWS SQS", "DynamoDb", "AWS Lambda", <b>React/Redux</b>, "AWS s3 bucket",
                "Coral (internal java framework for creating web service)", "datapath (internal platform for precomputation and joining key-value tables)"],
            scope: [],
            period: { dateFrom: new Date(2019, 10, 1), dateTo: new Date(2021, 1, 1) }
        }
    ]
}

const aurea: Job = {
    company: "Aurea Software",
    location: "Remote",
    projects: [
        {
            description: 'Our team was called "Code cleanup". We were using code analysis tools to refactor existing code, improve unit test coverage and fix code smells.',
            stack: ["SonarCube", "C#", "Java"],
            period: { dateFrom: new Date(2016, 4, 1), dateTo: new Date(2016, 6, 1) },
            role: "C# Engineer"
        }
    ]
}

const topTal: Job = {
    company: "Toptal",
    location: "remote",
    projects: [
        {
            description: <><b>I am proud member of Toptal since 2019. </b>
                Toptal is an exclusive network of the top freelance software developers, designers, finance experts, product managers, and project managers in the world.
                Top companies hire Toptal freelancers for their most important projects. </>,
            period: { dateFrom: new Date(2019, 6, 1), dateTo: undefined },
            role: "Freelance Software Developer",
            stack: [],
        },

    ]
}

const altaSoftware: Job = {
    company: "Alta Software",
    location: "Tbilisi, Georgia",
    projects: [
        {
            description: "Worked on development of Internet Bank, which was launched in 3 local banks.",
            period: { dateFrom: new Date(2015, 9, 1), dateTo: new Date(2016, 3, 1) },
            stack: ["Asp.net MVC with razor", "bootstrap", "jquery", "WCF", "ADO.NET", "MsSql"],
            role: ".Net Developer"
        }
    ]
}

const georgianPost: Job = {
    company: "Georgian Post",
    location: "Tbilisi, Georgia",
    projects: [
        {
            period: { dateFrom: new Date(2013, 11, 1), dateTo: new Date(2015, 10, 1) },
            description: <>
                <div>Worked on maintenance and adding new features to existing system which implied WinForms applications with WCF services as back end and Oracle as Database.
                    Also few Asp.Net Web applications and Mobile client for Pocket PC (Compact Framework).
                    Developed big range of Asp.Net MVC Applications for internal usage.
                    Worked on developing new web based postal system. Wrote new client for Pocket PC.
                    Worked on integration with IPS (International Post System). </div>
                <div>Created DataGrid component for razor, which had <b>server side pagination and filtration</b>. </div>
            </>,
            role: ".Net Developer",
            stack: ["WCF", "ASP.NET MVC with razor", "bootstrap", "jquery", "Oracle", "WinForms", "Compact Framework"]
        }
    ]
}

const allicanceGroupHolding: Job = {
    company: "Alliance Group Holding",
    location: "Tbilisi, Georgia",
    projects: [
        {
            period: { dateFrom: new Date(2013, 7, 1), dateTo: new Date(2013, 10, 1) },
            role: ".Net Developer",
            stack: []
        }
    ]
}

const ibs: Job = {
    company: "Integrated Business Solutions",
    location: "Tbilisi, Georgia",
    projects: [
        {
            period: { dateFrom: new Date(2013, 0, 1), dateTo: new Date(2013, 6, 1) },
            role: "1C Programmer",
            stack: [],
        }
    ]
}

export const jobs: Job[] = [
    topTal,
    amazon,
    lykke,
    aurea,
    altaSoftware,
    georgianPost,
    allicanceGroupHolding,
    ibs
];


export const education: Education[] = [{
    period: { dateFrom: new Date(2009, 8, 1), dateTo: new Date(2014, 5, 1) },
    faculty: "Computer Science",
    degree: "Bachelor",
    location: "Tbilisi, Georgia",
    university: "Tbilisi State University"
}]



export const languages: Language[] = [
    { name: "English", listening: "C1", reading: "C1", spokenInteraction: "C1", spokenProduction: "C1", writing: "B2" },
    { name: "Russian", listening: "C1", reading: "C1", spokenInteraction: "B2", spokenProduction: "B2", writing: "B2" },
    { name: "German", listening: "B1", reading: "B1", spokenInteraction: "B1", spokenProduction: "B1", writing: "B1" }
]

export const personalInfo: PersonalInfo = {
    fullName: "Soso Tughushi",
    position: "Software Developer",
    address: "Tbilisi (Georgia)",
    phoneNo: "+995 577 777760",
    email: "mryemama@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/soso-tughushi-627518b5/",
    githubUrl: "https://github.com/SosoTughushi/",
    imageUrl: window.location.origin + "/cv-images/SosoCvImage.jpg",
    summary: <>I am .Net stack based Software Developer with 8+ years of work experience, with big passion for programming, well
        organized, friendly, creative, highly motivated, with great curiousity and creativity, always up for challanges, always striving
        for excellence and self improvement.</>,
};

export const skills: Skill[] = [
    {
        skill: <>Fluent in <b>C#</b>.</>
    }, {
        skill: <>Experience in using following <b>.NET libraries</b>:</>,
        subskills: [
            <b>Linq</b>,
            <b>System.Reflection</b>,
            <b>Expression Trees</b>,
            <b>System Reactive</b>,
            <b>ASP.NET MVC</b>,
            <b>ASP.NET CORE MVC</b>,
            <b>Razor</b>,
            <b>ADO.NET</b>,
            <b>Entity Framework</b>,
            <b>StructureMap</b>,
            <b>Xunit</b>,
            <b>NSubstitute</b>,
            <b>Moq</b>,
            "and many more"
        ]
    },
    {
        skill: <>Good understanding of <b>SOLID</b> principles and <b>Design Patterns</b>.</>
    }, {
        skill: <>Familiar with <b>Functional Programming</b> approaches.</>
    }, {
        skill: <>Experience writing <b>Front End</b> with:</>,
        subskills: [
            <b>React.js</b>,
            <b>Typescript</b>,
            <b>Redux</b>,
            <b>sass</b>,
            <b>jQuery</b>,
            "razor"
        ]
    }, {
        skill: <>Good knowledge of following <b>Message Brokers</b>:</>,
        subskills: [
            <b>Apache Kafka</b>,
            <b>RabbitMq</b>,
            <><b>AWS SQS</b> (Standard Queues)</>,
        ]
    },
    {
        skill: <>Experienced writing <b>automated tests</b> (unit, integration,
            acceptance).</>
    },
    {
        skill: <>Experienced in <b>designing</b> and working with <b>distributed</b> and
            <b> scalable</b> systems with high availability, high throughput and
            low latency.</>
    },
    {
        skill: <>Good understanding of <b>Event Sourcing</b> and <b>CQRS</b>.</>
    },
    {
        skill: <>Good understanding and experience designing systems with <b>Streaming Architecture</b>.</>
    },
    {
        skill: <>Experience working with <b>Docker</b>.</>
    },
    {
        skill: <>Experience working with <b>TeamCity</b>.</>
    }, {
        skill: <>Highly motivated, creative, open minded, friendly and helpful person
            with big passion for software development.</>
    }
]

// <></>