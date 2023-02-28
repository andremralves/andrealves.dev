import React from 'react'

type SimpleDashedButtonProps = {
  text: string
  color?: string
}

const SimpleDashedButton = (props: SimpleDashedButtonProps) => {
  return (
    <button className={`${props.color} border-b hover:opacity-80`}>
      {props.text}
    </button>
  )
}

export default SimpleDashedButton
