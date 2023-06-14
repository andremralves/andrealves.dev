import React from 'react'
import Social from './Social'
import TextGradient from './TextGradient'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className="mt-10">
      <div className="flex flex-col">
        <div className="max-w-fit mb-5 text-3xl">
          <span className="dark:text-zinc-100 text-zinc-800">
            Hi there 👋, I'm
          </span>
          <h1 className="text-5xl pt-2 font-semibold md:text-7xl">
            <TextGradient text="André Alves" />
          </h1>
        </div>
        <p>
          A software engineering student and full stack web developer that likes
          to contribute to open source projects.
        </p>
      </div>
      <Social />
    </section>
  )
}

export default HeroSection
