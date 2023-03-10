import { tools } from '../../constants'
import { Carousel } from '../../components'

export default function Setup() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white dark:bg-black">
      <p className="text-xl mx-60 text-black dark:text-white">
        By now, you got a high-performance device enough to satisfy all the
        technical requirements the project demands. Below the list of software
        you need to install:
      </p>
      <div className="flex w-full px-60">
        <Carousel list={tools} linkName={'Download'} circle />
      </div>
    </div>
  )
}
