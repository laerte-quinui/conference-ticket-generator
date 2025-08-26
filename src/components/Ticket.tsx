import GithubIcon from '../assets/images/icon-github.svg'
import LogoMark from '../assets/images/logo-mark.svg'
import TicketBg from '../assets/images/pattern-ticket.svg'
import TiltedCard from './ui/TiltedCard'

interface Props {
  id: string
  avatar: string
  userName: string
  github: string
}

const Ticket = ({ id, avatar, userName, github }: Props) => {
  return (
    <>
      {/* For desktop devices */}
      <div className="mx-auto mt-12 !hidden h-full max-h-[480px] w-full max-w-[800px] md:!block">
        <TiltedCard
          imageSrc={TicketBg}
          showTooltip={false}
          containerHeight="100%"
          imageWidth="600px"
          imageHeight="280px"
          rotateAmplitude={10}
          scaleOnHover={1}
          displayOverlayContent
          overlayContent={
            <div className="relative flex min-h-[160px] w-full flex-col p-2 sm:min-h-[280px] sm:max-w-[600px] md:p-4">
              <TicketContent
                id={id}
                avatar={avatar}
                userName={userName}
                github={github}
              />
            </div>
          }
        />
      </div>

      {/* For Mobile Devices */}
      <div className="relative mx-auto mt-32 flex min-h-[160px] w-[344px] flex-col p-2 sm:min-h-[280px] sm:w-[600px] md:hidden md:p-4">
        <TicketContent
          id={id}
          avatar={avatar}
          userName={userName}
          github={github}
        />
        <img
          src={TicketBg}
          alt="Ticket Background"
          className="absolute top-0 left-0 -z-1"
        />
      </div>
    </>
  )
}

const TicketContent = ({ id, avatar, userName, github }: Props) => {
  return (
    <>
      {/* Ticket Header */}
      <div className="flex items-start gap-2 md:gap-4 lg:items-center">
        <img
          src={LogoMark}
          alt="Logo Mark"
          className="!size-6 md:!size-8 lg:!size-10"
        />
        <div>
          <h2 className="mb-1 text-xl leading-none font-semibold text-[var(--neutral-0)] sm:text-2xl lg:text-3xl">
            Coding Conf
          </h2>
          <p className="text-xs text-[var(--neutral-500)]">
            Jan 31, 2025 / Austin, TX
          </p>
        </div>
      </div>
      {/* User details */}
      <div className="mt-auto flex items-center gap-2 lg:gap-4">
        <div className="size-12 overflow-hidden rounded-md sm:size-14 lg:size-18 lg:rounded-xl">
          <img
            src={avatar}
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-md leading-none text-[var(--neutral-0)] sm:text-xl md:mb-2 lg:text-2xl">
            {userName}
          </h3>
          <span className="flex items-center gap-1 text-sm text-[var(--neutral-500)]">
            <img src={GithubIcon} alt="GitHub Icon" className="h-4 w-4" />
            {github}
          </span>
        </div>
      </div>
      {/* Id */}
      <span className="absolute top-1/2 right-0 -translate-y-1/2 rotate-90 text-xl font-bold text-[var(--neutral-500)] lg:right-2">
        #{id}
      </span>
    </>
  )
}

export default Ticket
