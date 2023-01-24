import { Parallax } from '../../components'
import { repos } from '../../constants'

export async function getServerSideProps() {
  const front = await fetch(
    `${process.env.NEXT_GITLAB_LINK}/${process.env.NEXT_GITLAB_FRONTEND_ID}?private_token=${process.env.NEXT_GITLAB_TOKEN}`,
  )
  const back = await fetch(
    `${process.env.NEXT_GITLAB_LINK}/${process.env.NEXT_GITLAB_BACKEND_ID}?private_token=${process.env.NEXT_GITLAB_TOKEN}`,
  )
  const [{ projects: projectsFront }, { projects: projectsBack }] =
    await Promise.all([front.json(), back.json()])
  return {
    props: {
      projects: [...projectsFront, ...projectsBack],
    },
  }
}

const Repos = (/*{ projects }: { projects?: any }*/) => {
  // const { name, web_url, avatar_url } = projects
  return <Parallax repos={repos} />
}
export default Repos
