export interface IWorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const workExperience: IWorkExperience[] = [
  {
    company: "Canoo",
    title: "Full-Stack Engineer",
    startDate: "December 2021",
    endDate: "September 2023",
    location: "Los Angeles, CA - Remote",
    technologies: [
      "React",
      "Typescript",
      "Node.JS",
      "AWS DynamoDB",
      "AWS Timestream",
      "AWS IoT Core",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    description: [
      "Led frontend development efforts of four internal tools and one key backend micro-service, working cross-functionally with stakeholders, backend & vehicle software teams and users",
      "Spearheaded development of application used for ensuring vehicle readiness in manufacturing facility",
      "Developed fleet management app used for diagnostics, over-the-air software updates, data visualization, vehicle monitoring, remote commands and vehicle servicing; developed end-to-end test automation for this application",
      "Worked with and mentored team members to improve code quality, application usability, and reduce development time",
    ],
  },
  {
    company: "nano.dev",
    title: "Full-Stack Engineer",
    location: "New York, NY",
    startDate: "January 2021",
    endDate: "October 2021",
    technologies: [
      "React",
      "Node.JS",
      "PostgreSQL",
      "Laravel",
      "PHP",
      "AWS Lambda",
    ],

    description: [
      "Created web applications on tight deadlines, collaborating directly with clients, engineers and designers",
      "Maintained and improved legacy applications, refactoring code and delivering an improved user experience",
      "Improved client and developer experience by utilizing serverless architecture",
      "Developed CI/CD pipelines and managed provisioning of AWS cloud resources",
    ],
  },
  {
    company: "Noir Gallery",
    title: "Full Stack Engineer, Co-Founder",
    location: "New York, NY",
    startDate: "July 2016",
    endDate: "January 2021",
    technologies: ["Svelte", "Node.JS", "Electron"],
    description: [
      "Automated the previously manual process of art procurement by building a self-service portal for artists to upload and manage their work on the platform",
      "Reduced the need for manual customer service tasks by developing internal tools for platform management",
      "Doubled conversion rate and increased AOV by creating a custom e-commerce platform to replace Shopify",
      "Collaborated directly with UI/UX designer to develop clean, easy-to-use interfaces",
      "Automated syncing of products and orders with marketplaces such as Walmart, and Amazon, built integrations with Google & Bing Merchant Center, Klayivo, PayPal, Stripe, and others",
    ],
  },
  {
    company: "Jon Bilous Photography",
    title: "Photographer",
    location: "New York, NY",
    startDate: "February 2016",
    endDate: "Present",
    technologies: ["Puppeteer"],
    description: [
      "Built web automations for monetization of imagery through various web platforms",
      "Developed a custom platform for selling prints, licensing images, and managing client image access",
      "Reduced time spent tagging images, while improving SEO by leveraging AI computer vision technologies",
    ],
  },
];
