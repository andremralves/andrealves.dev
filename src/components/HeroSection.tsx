import React from 'react'
import Social from './Social'
import TextGradient from './TextGradient'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className="py-10">
      <div className="flex flex-col">
        <div className="max-w-fit mb-5 text-3xl">
          <span>Hi there 👋, I'm</span>
          <h1 className="pt-2 text-7xl font-semibold">
            <TextGradient text="André Alves" />
          </h1>
        </div>
        <p className="text-neutral-400">
          Software engineering student and full stack web developer that likes
          to contribute to open source projects.
        </p>
      </div>
      <Social />
    </section>
  )
}

export default HeroSection
