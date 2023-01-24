import { access, additionalAccess } from '../../constants'
import { Carousel } from '../../components'

export default function Setup() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white dark:bg-black">
      <p className="text-xl mx-60 text-black dark:text-white">
        All the documentation related to the project is consolidaded inside
        Notion. Please, consider Notion as the source of truth for requirements,
        technical specifications, wireframes, shared documents and more.
      </p>
      <Carousel list={access} linkName={'See more'} />
      <p className="text-xl mx-60 mt-10 text-black dark:text-white">
        We are more than happy to request access on your behalf and we normally
        do it in that way. But just in case, if access is not granted, please
        let us know. We will connect with the client right away.
      </p>
      <div className="flex w-8/12 justify-between gap-5">
        {additionalAccess.map(({ name, link, linkName }) => (
          <div className="flex flex-col justify-between rounded-md bg-zinc-200 dark:bg-zinc-900">
            <div>
              <p className="p-3 text-opacity-60 text-black dark:text-white">
                {name}
              </p>
            </div>
            {link ? (
              <div className="flex justify-end pr-2 pb-2">
                <a
                  className="flex rounded-md bg-yellow-300 font-mono text-lg px-2 mb-2 mr-2"
                  target="_blank"
                  href={link}
                >
                  <p className="text-black m-0 p-1 tracking-normal">
                    {linkName}
                  </p>
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
