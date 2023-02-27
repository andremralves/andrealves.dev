import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa/index'

type Props = {}

const Social = (props: Props) => {
  return (
    <div className="mt-8">
      <ul className="flex gap-5">
        <li>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://github.com/andremralves"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://www.linkedin.com/in/andremralves/"
          >
            <FaLinkedin size={30} className="text-blue-400" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
