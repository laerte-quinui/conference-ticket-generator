import { type PropsWithChildren } from 'react'
import SplitText from './ui/SplitText'
import TextType from './ui/TextType'

const Header = ({
  userData
}: {
  userData?: { name: string; email: string }
}) => {
  if (userData && userData.name !== null) {
    return (
      <HeaderContainer>
        <h1>
          <SplitText text="Congrats" splitType="words" />
          <span>
            {' '}
            <SplitText
              className="bg-gradient-to-r from-[var(--orange-500)] to-[var(--neutral-0)] bg-clip-text text-transparent"
              splitType="words"
              text={userData.name}
            />
            !{' '}
          </span>
          <SplitText text="Your ticket is ready." />
        </h1>

        <p className="text-[var(--neutral-300)]">
          We've emailed your ticket to{' '}
          <span className="text-[var(--orange-500)]">{userData.email}</span> and
          will send updates in the run up to the event.
        </p>
      </HeaderContainer>
    )
  }

  return (
    <HeaderContainer>
      <h1>
        <TextType
          text={'Your Journey to Coding Conf 2025 Starts Here!'}
          typingSpeed={55}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </h1>

      <p className="text-[var(--neutral-300)]">
        Secure your spot at next year's biggest coding conference.
      </p>
    </HeaderContainer>
  )
}

const HeaderContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-4 text-center sm:max-w-3xl md:max-w-9/12 lg:max-w-1/2">
      {children}
    </div>
  )
}

export default Header
