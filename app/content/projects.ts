export interface IProject {
  name: string;
  url: string;
  description: string;
  stack: string[];
  deployment: string[];
}

export const projects: IProject[] = [
  {
    url: "https://www.opencalls.app",
    name: "Opencalls",
    description:
      "Platform for creating custom forms for accepting art submissions. Allow organizations to charge submission fees. Collaborate on curation with other users.",
    stack: [
      "Remix",
      "Prisma + Postgres",
      "AWS S3",
      "AWS RDS",
      "Stripe Checkout",
      "Stripe Connect",
      "Auth0",
      "Pusher",
      "Redis",
    ],
    deployment: ["Vercel"],
  },
  {
    url: "https://www.framer.art",
    name: "framer.art",
    description: "Art print marketplace",
    stack: [
      "Remix",
      "Prisma + Postgres",
      "AWS S3",
      "AWS RDS",
      "AWS Rekognition",
      "Stripe Checkout",
      "Stripe Connect",
      "Chakra-UI",
      "Auth0",
      "Redis",
    ],
    deployment: ["Vercel", "Fly.io"],
  },
  {
    url: "https://www.theamericanaproject.com",
    name: "On the Roadside",
    stack: [
      "Remix",
      "Prisma + Postgres",
      "AWS S3",
      "AWS RDS",
      "Stripe Checkout",
      "Chakra-UI",
      "Redis",
    ],
    description: "E-commerce website for selling my photography work as prints",
    deployment: ["Vercel"],
  },
  {
    url: "https://www.backpackersroutes.com",
    name: "Backpackers Routes",
    stack: [
      "Remix",
      "Prisma + Postgres",
      "AWS RDS",
      "Google Maps JS SDK",
      "Chakra-UI",
      "Redis",
    ],
    description: "Simple map of hostels around the world",
    deployment: ["Vercel"],
  },
];
