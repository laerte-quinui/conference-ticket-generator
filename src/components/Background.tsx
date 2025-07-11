import CirclePattern from '../assets/images/pattern-circle.svg'
import LinesPattern from '../assets/images/pattern-lines.svg'
import SquigglyBottomDesktop from '../assets/images/pattern-squiggly-line-bottom-desktop.svg'
import SquigglyBottomMobile from '../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
import SquigglyTop from '../assets/images/pattern-squiggly-line-top.svg'

const Background = () => {
  return (
    <div className="fixed top-0 left-0 z-[-1] h-screen w-full overflow-hidden">
      {/* Lines */}
      <img src={LinesPattern} className="max-w-4xl lg:w-full lg:max-w-full" />

      {/* Circles */}
      <img
        src={CirclePattern}
        className="absolute -top-4 -left-4 size-24 lg:-top-16 lg:left-8 lg:size-40"
      />
      <img
        src={CirclePattern}
        className="absolute top-1/2 -right-10 size-24 lg:right-1/4 lg:size-40"
      />

      {/* Squiggly lines */}
      <img
        src={SquigglyTop}
        className="absolute top-0 right-0 size-24 md:size-4/12"
      />
      <img
        src={SquigglyBottomMobile}
        className="absolute bottom-0 left-0 lg:hidden"
      />
      <img
        src={SquigglyBottomDesktop}
        className="absolute bottom-0 left-0 hidden lg:block"
      />
    </div>
  )
}

export default Background
