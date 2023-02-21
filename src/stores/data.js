import { writable } from 'svelte/store'

let jobs_ = [
  {
    id: 1,
    title: "Environmental practitioner",
    img: "/images/jobs/job-01.png",
    valueChains: [1, 2, 6],
    desc: `Assesses, improves, and gives advice to companies on environmental strategies. Measures the carbon footprint being left by logistics in the FoodBev industry and advises efficient practices to cut it back`,
    hardSkills: ["Environmental engineering", "geography", "meteorology"],
    softSkills: ["Negotiation", "teamwork", "multicultural"],
  },
  {
    id: 4,
    title: "Digital Twin Ecosystem Architect",
    img: "/images/jobs/job-04.png",
    valueChains: [1, 2, 10, 8],
    desc: `An IT professional who creates a digital twin for a certain food plant`,
    hardSkills: ["IT", "engineering", "design"],
    softSkills: ["System thinking", "cross-disciplinary thinking", "project-management", "System thinking", "Process thinking"],
  },
  {
    id: 5,
    title: "Digital Twin Ecosystem manager",
    img: "/images/jobs/job-05.png",
    valueChains: [1, 2, 10, 8],
    desc: `A specialist whose responsibility is to manage the digital twin of food plant to optimize the production process`,
    hardSkills: ["Software design", "AutoCAD 3D", "digital twin operation", "management in food manufacturing"],
    softSkills: ["System thinking", "Process thinking"],
  },
  {
    id: 8,
    title: "Circulated economy designer",
    img: "/images/jobs/job-08.png",
    valueChains: [1, 2, 6],
    desc: `Elaborates a strategy for full production cycle management, helps managers to implement it, and provides consulting support.`,
    hardSkills: ["Engeneering", "recycling technologies"],
    softSkills: ["System thinking", "communication", "lean manufacturing", "project-management", "teamwork"],
  },
  {
    id: 15,
    title: "Climate change data analyst",
    img: "/images/jobs/job-15.png",
    valueChains: [1, 2, 6, 10],
    desc: `A professional, who compiles, analyzes and clarifies data regarding environmental management and climate change that could influence the FoodBev industry. Improves decision-making, including 3D and geospatial visualization, simulation models, system dynamics, and computer-assisted tools for collecting data from different sources, including global data.`,
    hardSkills: ["Ecology", "Geography", "digital modeling", "data science"],
    softSkills: ["Decision-making", "analytical thinking"],
  },
  {
    id: 20,
    title: "System risk manager",
    img: "/images/jobs/job-20.png",
    valueChains: [1, 2, 6],
    desc: `Conducts risk assessments, collecting and analyzing documentation, statistics, reports, and market trends using AI. Recommends and implements risk management solutions such as insurance, safety, and security policies. Reviews and analyzes various metrics and employee activity that could uncover fraudulent behavior.`,
    hardSkills: ["Risk Management", "IT", "data science", "security", "documentation in FoodBev"],
    softSkills: ["Analytical thinking", " system thinking", " communication"],
  },
];

let valueChains_ = [
  {
    id: 1,
    name: "Producers",
    logo: "images/graph/01.png",
    map: "/images/maps/map-1.png",
  },
];

const valueChains = writable(valueChains_);
const jobs = writable(jobs_);

export { valueChains, jobs };