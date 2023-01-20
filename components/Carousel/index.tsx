import { LegacyRef } from 'react'

export default function Carousel({
  list,
  ref,
  linkName,
}: {
  list: Array<{ name: string; link?: string }>
  ref: LegacyRef<HTMLUListElement>
  linkName: string
}) {
  return (
    <ul className="w-8/12 max-h-80" ref={ref}>
      {list.map(({ name, link }: { name: string; link?: string }) => (
        <li className="flex flex-col justify-between rounded-md  hover:border-yellow-300 focus:border-yellow-300 bg-zinc-900">
          <div>
            <p className="text-white text-xl p-3 text-opacity-60">{name}</p>
          </div>
          {link ? (
            <div className="flex justify-end">
              <a
                className="flex rounded-md bg-yellow-300 font-mono text-lg px-2 mb-2 mr-2"
                target="_blank"
                href={link}
              >
                <p className="text-black m-0 p-1 tracking-normal">{linkName}</p>
              </a>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
