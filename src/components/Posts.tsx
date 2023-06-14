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
          <li
            key={post.frontmatter.title}
            className="p-4 border-zinc-500 border-b dark:hover:bg-zinc-800 hover:bg-zinc-200 rounded"
          >
            <a className="flex" href={post.url + '/'}>
              <div className="flex flex-col gap-2 justify-between w-full">
                <div>
                  <h1 className="text-xl">{post.frontmatter.title}</h1>
                  <div className="flex flex-wrap gap-2 my-4">
                    {post.frontmatter.tags.map((tag) => (
                      <Tag key={tag} name={tag} />
                    ))}
                  </div>
                  <p>{post.frontmatter.description}</p>
                </div>

                <div>{dateFormatter(post.frontmatter.pubDate)}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Posts
