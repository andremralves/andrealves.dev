import React from 'react'
import SectionTitle from './SectionTitle'
import Tag from './Tag'

type PostsProps = {
  title: string
  posts: any
}

const Posts = (props: PostsProps) => {
  function dateFormatter(date: string) {
    return new Date(Date.parse(date)).toLocaleDateString()
  }
  return (
    <section className="mt-10">
      <SectionTitle title={props.title} />
      <ul className="mt-4">
        {props.posts.map((post, index) => (
          <li className="pl-2 py-4 border-neutral-500 border-b hover:bg-neutral-800 rounded">
            <a className="flex" href={post.url}>
              <span className="mr-3 text-neutral-500">{index + 1}</span>
              <div className="flex flex-col gap-2 justify-between w-full">
                <div>
                  <h1 className="text-xl">{post.frontmatter.title}</h1>
                  <div className="flex flex-wrap gap-2 my-4">
                    {post.frontmatter.tags.map((tag) => (
                      <Tag name={tag} />
                    ))}
                  </div>
                  <p className="text-neutral-400">
                    {post.frontmatter.description}
                  </p>
                </div>

                <div className="text-neutral-400">
                  {dateFormatter(post.frontmatter.pubDate)}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Posts
