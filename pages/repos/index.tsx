import { Parallax } from '../../components'
import { Repo } from '../../types'

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
    projects = [
      {
        id: 0,
        title: 'GitLab Repos',
      },
      ...projectsFront,
      ...projectsBack,
      {
        id: -1,
        description: `As a full-stack developer, you will get your hands dirty by touching each application. We believe in the idea of "Sharing Knowledge and every one should know everything" to guarantee the success of the mission. We are accountable!
    Specialists and/or experts in a particular field are welcome, their scope is limited and very specific but still accountable. :)`,
      },
    ]
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

const Repos = ({ projects }: { projects: Repo[] }) => {
  return <Parallax repos={projects} />
}
export default Repos
