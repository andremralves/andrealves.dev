import React from 'react'
import SectionTitle from './SectionTitle'

type OpenSourceListProps = {}

const OpenSourceList = (props: OpenSourceListProps) => {
  return (
    <section>
      <SectionTitle title="Open Source" />
      <div className="bg-neutral-900 rounded p-2 mt-8 border-orange-300 border-l-2">
        <div className="ml-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl">Teammates</h2>
            <span className="h-fit ml-2 px-2 bg-neutral-600 rounded">
              ⭐ 1.4k stars
            </span>
          </div>
          <h3 className="mt-3">Description</h3>
          <p className="mt-3 text-neutral-400">
            "TEAMMATES is a free online tool for managing peer evaluations and
            other feedback paths of your students. It is provided as a
            cloud-based service for educators/students and is currently used by
            hundreds of universities across the world."
          </p>
          <button className="mt-3">My contributions</button>
        </div>
      </div>
    </section>
  )
}

export default OpenSourceList
