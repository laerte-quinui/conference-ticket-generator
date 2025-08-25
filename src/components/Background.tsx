import CirclePattern from '../assets/images/pattern-circle.svg'
import LinesPattern from '../assets/images/pattern-lines.svg'
import SquigglyBottomDesktop from '../assets/images/pattern-squiggly-line-bottom-desktop.svg'
import SquigglyBottomMobile from '../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
import SquigglyTop from '../assets/images/pattern-squiggly-line-top.svg'
import DotGrid from './ui/DotGrid'

const Background = () => {
  return (
    <div className="fixed top-0 left-0 -z-2 h-screen w-full overflow-hidden">
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

      {/* animated Dot Grid */}
      <div className="absolute top-0 left-0 -z-3 h-full w-full">
        <DotGrid
          dotSize={2}
          gap={16}
          baseColor="hsla(245.2941176470588, 19.101123595505623%, 34.90196078431372%, 0.45)"
          proximity={120}
          shockRadius={200}
          shockStrength={4}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </div>
  )
}

export default Background
