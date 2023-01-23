export const repos: {
  key: number
  name?: string
  image?: string
  title?: string
  subtitle?: string
  link?: string
}[] = [
  {
    key: 0,
    title: 'GitLab Repos'
  },
  {
    key: 1,
    name: 'Wolfgang',
    image: '/repos/wolfgang.jpg',
    title: 'Electronic Application Builder (React + Tailwind)',
    subtitle:
      'Our state of the art SPA + Material-UI with a drizzle of our secret sauce.',
    link: 'https://gitlab.com/reframe-financial/frontend/wolfgang',
  },
  {
    key: 2,
    name: 'Sophia',
    image: '/repos/sophia.jpg',
    title: 'Customer Facing Application (Next Js + Tailwind)',
    subtitle:
      'Next Js and Tailwind, what a combination for building fast web applications.',
    link: 'https://gitlab.com/reframe-financial/frontend/sofia',
  },
  {
    key: 3,
    name: 'Elizabeth',
    image: '/repos/elizabeth.jpg',
    title: 'Shared libraries (Node Js)',
    subtitle:
      'Hosted on top of Gitlab Package Registry, Elizabeth holds the common libraries used by Ingrkey, Sally and Marilyn.',
    link: 'https://gitlab.com/reframe-financial/services/elizabeth',
  },
  {
    key: 4,
    name: 'Agnes',
    image: '/repos/agnes.jpg',
    title: 'Apollo GraphQL Gateway',
    subtitle:
      'Lot of magic happens behind the scenes. This is like a buffet, you can eat as much as you want but we recommend to grab just what you need.',
    link: 'https://gitlab.com/reframe-financial/services/agnes',
  },
  {
    key: 5,
    name: 'Ingrid',
    image: '/repos/ingrid.jpg',
    title: 'Electronic Application Builder (NodeJs REST API with Dapr)',
    subtitle:
      'The underworld starts from here. Microservices, DAPR side-cards, Postgress and more.',
    link: 'https://gitlab.com/reframe-financial/services/ingrid',
  },
  {
    key: 6,
    name: 'Sally',
    image: '/repos/sally.jpg',
    title: 'Rule Engine (NodeJS REST API with Dapr)',
    subtitle:
      'Sally drives the flow for an Electronic Application, interacts directly with Ingrkey and Marilyn. Also collects telemetry data coming from the user while interacts with the application.',
    link: 'https://gitlab.com/reframe-financial/services/sally',
  },
  {
    key: 7,
    name: 'Marilyn',
    image: '/repos/marilyn.webp',
    title: 'Electronic Application Runner (NodeJS REST API with Dapr)',
    subtitle:
      'This is the starting point for an Applicant looking for coverage. A set of questions will be presented to the user, answers will be sent back us not only for persistence also to execute smart decisions connecting with thrid party and machine learning services.',
    link: 'https://gitlab.com/reframe-financial/services/marilyn',
  },
  {
    key: 8,
    subtitle: `As a full-stack developer, you will get your hands dirty by touching each application. We believe in the idea of "Sharing Knowledge and every one should know everything" to guarantee the success of the mission. We are accountable!
    Specialists and/or experts in a particular field are welcome, their scope is limited and very specific but still accountable. :)`,
  }
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

export const access: { name: string; link?: string, icon?:string }[] = [
  { name: 'ThreadIt',
  icon: '/icons/threadit.webp'
 },
  { name: 'GitLab',
  icon:'/icons/gitlab.png'
 },
  { name: 'Reframe Financial channels in Slack',
  icon: '/icons/slack.png'
 },
  {
    name: 'Figma',
    link: 'https://www.figma.com/file/xSHspOFeqCETHFOFxQFaXq/eApp-Wireframes?node-id=0%3A1',
    icon: '/icons/figma.png'

  },
  {
    name: 'Notion',
    link: 'https://www.notion.so/eApp-Builder-808a67e3df3b4f75a260f2ae7cf7db1f',
    icon: '/icons/notion.png'

  },
]

export const additionalAccess: {name: string; link: string; linkName: string }[] = [
  {
    name: "It's also recommended to take a look at the Topic of Interests section. You will find technical videos to get started with the technologies used in the project.",
    link: 'https://kz-rc-onboarding.vercel.app/topics.html',
    linkName: 'Go to Topics'
  },
  {
    name: "Feel free to get a copy of the scripts we normally use to interact with applications in our local environment.",
    link: 'https://kz-rc-onboarding.vercel.app/scripts.html',
    linkName: 'Go to Scripts'
  },
  {
    name: "In order to stay synched with some protocols/practices used by the team, check out the Onboarding Notion docs.",
    link: 'https://www.notion.so/Onboarding-6a380da66c7b417aa6f734a065cf81ad',
    linkName: 'Team Practices'
  }
]
