import { Parallax } from '../../components'
import { repos } from '../../constants'

export async function getServerSideProps() {
  let projects: Array<any> = []
  try {
    const front = await fetch(
      `${process.env.NEXT_PUBLIC_GITLAB_LINK}/${process.env.NEXT_PUBLIC_GITLAB_FRONTEND_ID}?private_token=${process.env.NEXT_PUBLIC_GITLAB_TOKEN}`,
    )
    const back = await fetch(
      `${process.env.NEXT_PUBLIC_GITLAB_LINK}/${process.env.NEXT_PUBLIC_GITLAB_BACKEND_ID}?private_token=${process.env.NEXT_PUBLIC_GITLAB_TOKEN}`,
    )
    const [{ projects: projectsFront }, { projects: projectsBack }] =
      await Promise.all([front.json(), back.json()])
    projects = [...projectsFront, ...projectsBack]
  } catch (err) {
    console.error(err)
  } finally {
    return {
      props: {
        projects,
      },
    }
  }
}

const Repos = (/*{ projects }: { projects?: any }*/) => {
  // const { name, web_url, avatar_url } = projects
  return <Parallax repos={repos} />
}
export default Repos
