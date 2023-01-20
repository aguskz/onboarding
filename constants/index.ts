export const repos: {
  id: number
  name: string
  image: string
  title: string
  subtitle: string
  link: string
}[] = [
  {
    id: 1,
    name: 'Wolfgang',
    image: '/repos/wolfgang.jpg',
    title: 'Electronic Application Builder (React + Tailwind)',
    subtitle:
      'Our state of the art SPA + Material-UI with a drizzle of our secret sauce.',
    link: 'https://gitlab.com/reframe-financial/frontend/wolfgang',
  },
  {
    id: 1,
    name: 'Sophia',
    image: '/repos/sophia.jpg',
    title: 'Customer Facing Application (Next Js + Tailwind)',
    subtitle:
      'Next Js and Tailwind, what a combination for building fast web applications.',
    link: 'https://gitlab.com/reframe-financial/frontend/sofia',
  },
  {
    id: 1,
    name: 'Elizabeth',
    image: '/repos/elizabeth.jpg',
    title: 'Shared libraries (Node Js)',
    subtitle:
      'Hosted on top of Gitlab Package Registry, Elizabeth holds the common libraries used by Ingrid, Sally and Marilyn.',
    link: 'https://gitlab.com/reframe-financial/services/elizabeth',
  },
  {
    id: 1,
    name: 'Agnes',
    image: '/repos/agnes.jpg',
    title: 'Apollo GraphQL Gateway',
    subtitle:
      'Lot of magic happens behind the scenes. This is like a buffet, you can eat as much as you want but we recommend to grab just what you need.',
    link: 'https://gitlab.com/reframe-financial/services/agnes',
  },
  {
    id: 1,
    name: 'Ingrid',
    image: '/repos/ingrid.jpg',
    title: 'Electronic Application Builder (NodeJs REST API with Dapr)',
    subtitle:
      'The underworld starts from here. Microservices, DAPR side-cards, Postgress and more.',
    link: 'https://gitlab.com/reframe-financial/services/ingrid',
  },
  {
    id: 1,
    name: 'Sally',
    image: '/repos/sally.jpg',
    title: 'Rule Engine (NodeJS REST API with Dapr)',
    subtitle:
      'Sally drives the flow for an Electronic Application, interacts directly with Ingrid and Marilyn. Also collects telemetry data coming from the user while interacts with the application.',
    link: 'https://gitlab.com/reframe-financial/services/sally',
  },
  {
    id: 1,
    name: 'Marilyn',
    image: '/repos/marilyn.webp',
    title: 'Electronic Application Runner (NodeJS REST API with Dapr)',
    subtitle:
      'This is the starting point for an Applicant looking for coverage. A set of questions will be presented to the user, answers will be sent back us not only for persistence also to execute smart decisions connecting with thrid party and machine learning services.',
    link: 'https://gitlab.com/reframe-financial/services/marilyn',
  },
]

export const tools: { name: string; link?: string }[] = [
  {
    name: 'Windows Sub Linux (WSL 2.0) and Ubuntu 20.04 LTS Distro',
    link: 'https://docs.microsoft.com/en-us/windows/wsl/install-win10',
  },
  {
    name: 'Docker Desktop',
    link: 'https://desktop.docker.com/win/stable/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=header',
  },
  {
    name: 'Git for Windows',
    link: 'https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe',
  },
  { name: 'Postman', link: 'https://www.postman.com/downloads/' },
  {
    name: 'PgAdmin 4 v5.',
    link: 'https://www.pgadmin.org/download/pgadmin-4-windows/',
  },
  { name: 'NodeJS', link: 'https://nodejs.org/en/download/' },
  {
    name: 'Visual Studio Code',
    link: 'https://code.visualstudio.com/download',
  },
  { name: 'Prettier' },
  { name: 'GitLab Workflow' },
  { name: 'Remote WSL' },
  { name: 'GraphQL' },
  { name: 'Remote Containers Docker' },
]

export const access: { name: string; link?: string }[] = [
  { name: 'ThreadIt' },
  { name: 'GitLab' },
  { name: 'Reframe Financial channels in Slack' },
  {
    name: 'Figma',
    link: 'https://www.figma.com/file/xSHspOFeqCETHFOFxQFaXq/eApp-Wireframes?node-id=0%3A1',
  },
  {
    name: 'Notion',
    link: 'https://www.notion.so/eApp-Builder-808a67e3df3b4f75a260f2ae7cf7db1f',
  },
]
