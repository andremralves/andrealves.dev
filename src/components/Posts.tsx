import React from 'react';
import SectionTitle from './SectionTitle';
import Tag from './Tag';

type PostsProps = {
	title: string;
	posts: any;
};

const Posts = (props: PostsProps) => {
	function dateFormatter(date: string) {
		return new Date(Date.parse(date)).toLocaleDateString();
	}
	console.log(props.posts[0].slug);
	return (
		<section className="mt-10">
			<SectionTitle title={props.title} />
			<ul className="mt-4">
				{props.posts.map((post) => (
					<li
						key={post.data.title}
						className="rounded border-b border-zinc-500 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800"
					>
						<a className="flex" href={'/blog/' + post.slug + '/'}>
							<div className="flex w-full flex-col justify-between gap-2">
								<div>
									<h1 className="text-xl">{post.data.title}</h1>
									<div className="my-4 flex flex-wrap gap-2">
										{post.data.tags.map((tag) => (
											<Tag key={tag} name={tag} />
										))}
									</div>
									<p>{post.data.description}</p>
								</div>

								<div>{dateFormatter(post.data.pubDate)}</div>
							</div>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Posts;
