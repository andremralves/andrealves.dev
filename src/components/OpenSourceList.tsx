import React from 'react'
import SectionTitle from './SectionTitle'

type OpenSourceListProps = {}

const OpenSourceList = (props: OpenSourceListProps) => {
  return (
    <section>
      <SectionTitle title="Open Source" />
      <div>
        <h2 className="text-xl">Teammates</h2>
        <span>****</span>
        <p>Description</p>
      </div>
    </section>
  )
}

export default OpenSourceList
