import { useState } from 'react'

enum Tags {
  FRONT = 'front-end',
  BACK = 'back-end',
  DEVOPS = 'devops',
  MATERIAL_UI = 'material_ui',
  REACT = 'reactjs',
  TAILWIND = 'tailwindcss',
  CYPRESS = 'cypress',
  TESTING = 'testing',
  AUTOMATION = 'automation',
  MICRO = 'microservices',
  DAPR = 'dapr',
  GRAPHQL = 'graphql',
  POSTMAN = 'postman',
  API_TESTING = 'api-testing',
  NEST = 'nestjs',
  PUB_SUB = 'pub-sub',
  MESSAGING = 'messaging',
  DDD = 'ddd',
  GITLAB = 'gitlab',
  PIPELINES = 'pipelines',
  AWS = 'aws',
  EKS = 'eks',
  KUBERNETES = 'kubernetes',
  COGNITO = 'cognito',
  FEATURE_FLAGS = 'feature-flags',
}

type Video = {
  id: number
  link: string
  tags: Tags[]
}

const videos: Video[] = [
  {
    id: 0,
    link: 'https://www.youtube.com/embed/DyKYB76SDx0',
    tags: [Tags.MICRO, Tags.DAPR, Tags.BACK],
  },
  {
    id: 1,
    link: 'https://www.youtube.com/embed/0Tc0YYBxqi4',
    tags: [Tags.DEVOPS, Tags.GITLAB, Tags.PIPELINES],
  },
  {
    id: 2,
    link: 'https://www.youtube.com/embed/xYb32CFsY8U',
    tags: [Tags.MICRO, Tags.GRAPHQL, Tags.BACK],
  },
  {
    id: 3,
    link: 'https://www.youtube.com/embed/aQS7kaje-24',
    tags: [Tags.REACT, Tags.TAILWIND, Tags.FRONT],
  },
  {
    id: 4,
    link: 'https://www.youtube.com/embed/0KEpWHtG10M',
    tags: [Tags.MATERIAL_UI, Tags.FRONT],
  },
  {
    id: 5,
    link: 'https://www.youtube.com/embed/j942wKiXFu8',
    tags: [Tags.REACT, Tags.FRONT],
  },
  {
    id: 6,
    link: 'https://www.youtube.com/embed/AYAh6YDXuho',
    tags: [Tags.DEVOPS, Tags.EKS, Tags.AWS],
  },
  {
    id: 7,
    link: 'https://www.youtube.com/embed/Vs78dAmbVGU',
    tags: [Tags.MICRO, Tags.DAPR, Tags.BACK],
  },
  {
    id: 8,
    link: 'https://www.youtube.com/embed/IG3_ZG4oxKk',
    tags: [Tags.DEVOPS, Tags.EKS, Tags.AWS, Tags.KUBERNETES],
  },
  {
    id: 9,
    link: 'https://www.youtube.com/embed/aZd0UolVwD4',
    tags: [Tags.DEVOPS, Tags.EKS, Tags.AWS],
  },
  {
    id: 10,
    link: 'https://www.youtube.com/embed/62kKbCmb7mI',
    tags: [Tags.DEVOPS, Tags.COGNITO, Tags.AWS],
  },
  {
    id: 11,
    link: 'https://www.youtube.com/embed/x_avnQa74cQ',
    tags: [Tags.DEVOPS, Tags.GITLAB, Tags.FEATURE_FLAGS, Tags.PIPELINES],
  },
  {
    id: 12,
    link: 'https://www.youtube.com/embed/5tw2p6lwXxo',
    tags: [Tags.DEVOPS, Tags.GITLAB, Tags.PIPELINES],
  },
  {
    id: 13,
    link: 'https://www.youtube.com/embed/nMMUkHgJCwo',
    tags: [Tags.REACT, Tags.TAILWIND, Tags.FRONT],
  },
  {
    id: 14,
    link: 'https://www.youtube.com/embed/umrUlfrZqKk',
    tags: [Tags.MICRO, Tags.DAPR, Tags.BACK],
  },
  {
    id: 15,
    link: 'https://www.youtube.com/embed/shYn3Ys3ygE',
    tags: [Tags.MICRO, Tags.API_TESTING, Tags.BACK, Tags.POSTMAN],
  },
  {
    id: 16,
    link: 'https://www.youtube.com/embed/PPZSySI5ooc',
    tags: [Tags.CYPRESS, Tags.REACT, Tags.TESTING, Tags.AUTOMATION, Tags.FRONT],
  },
  {
    id: 17,
    link: 'https://www.youtube.com/embed/F_oOtaxb0L8',
    tags: [Tags.MICRO, Tags.NEST, Tags.BACK],
  },
  {
    id: 18,
    link: 'https://www.youtube.com/embed/BSGkTH--4j8',
    tags: [Tags.MICRO, Tags.DAPR, Tags.BACK, Tags.PUB_SUB],
  },
  {
    id: 19,
    link: 'https://www.youtube.com/embed/AfAojdORxHs',
    tags: [Tags.MICRO, Tags.DDD, Tags.BACK, Tags.PUB_SUB, Tags.MESSAGING],
  },
]

const mainTags = [Tags.FRONT, Tags.BACK, Tags.DEVOPS]

const subTags = Object.values(Tags).filter((x) => !mainTags.includes(x))

const Topics = () => {
  const [selected, setSelected] = useState<Tags[]>([Tags.FRONT])
  const onTagClick = (tag: string) => {
    setSelected((_selected) => {
      const copy = [..._selected]
      if (copy.indexOf(tag) === -1) {
        copy.push(tag)
      } else {
        copy.splice(copy.indexOf(tag), 1)
      }
      return copy
    })
  }

  return (
    <div className="flex min-h-screen bg-white dark:bg-black flex-col pb-5">
      <div className="bg-white dark:bg-black w-full">
        <h1 className="text-black dark:text-white">Topics</h1>
      </div>
      <div className="self-center pb-10 px-2">
        {mainTags.map((tag) => (
          <button
            onClick={() => onTagClick(tag)}
            className={`h-10 m-1 px-5 text-indigo-100 border-2 transition-colors duration-150 border-white dark:border-black rounded-lg focus:shadow-outline ${
              selected.includes(tag)
                ? 'border-blue-500 dark:border-yellow-300'
                : ''
            }`}
          >
            <span className="text-black dark:text-white">{tag}</span>
          </button>
        ))}
      </div>
      <div className="self-center pb-10 px-2 flex-row flex flex-wrap justify-center">
        {subTags.map((tag) => (
          <button
            onClick={() => onTagClick(tag)}
            className={`flex items-center h-10 m-1 px-5 text-indigo-100 border-2 transition-colors duration-150 border-white dark:border-black rounded-lg focus:shadow-outline ${
              selected.includes(tag)
                ? 'border-blue-500 dark:border-yellow-300'
                : ''
            }`}
          >
            <span className="text-black dark:text-white">{tag}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {videos
          .filter(({ tags }) => {
            return selected.every((tag) => tags.includes(tag))
          })
          .map(({ link, id }) => (
            <div key={id}>
              <iframe
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Topics
