import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa/index';

type Props = {};

const Social = (props: Props) => {
	return (
		<div className="mt-8">
			<ul className="flex gap-5">
				<li>
					<a
						target="_blank"
						rel="nofollow noopener noreferrer"
						href="https://www.linkedin.com/in/andremralves/"
						aria-label="André Alves's Linkedin page"
					>
						<FaLinkedin size={30} className="text-blue-400" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="nofollow noopener noreferrer"
						href="https://github.com/andremralves"
						aria-label="André Alves's Github page"
					>
						<FaGithub size={30} />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="nofollow noopener noreferrer"
						href="https://twitter.com/andrealvesdev"
						aria-label="André Alves's Twitter profile"
					>
						<FaTwitter size={30} className="text-blue-400" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Social;
