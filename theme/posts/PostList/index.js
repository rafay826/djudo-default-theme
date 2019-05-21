import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = ({ posts, list, categoryList, categoryPostTitle, setPost }) => {
	return (
		<React.Fragment>
			<input type="text" id="post-typeahead"/>
			<div className='flex posts-container'>

				<section className='flex-10'>
					<h1>{categoryPostTitle ? categoryPostTitle : 'All'} Posts</h1>
					{
						posts && posts.length >= 1 ?
							posts.map(post => (
								<Link key={post.id} to={`/posts/${post.id}`}>
									<section className={'post-list-container'}>
										<div>
											<section className='flex-row'>
												<div className='flex-column post-column post-container'>
													<div className='post'>
														<h2>{post.title}</h2>
														{
															post.description && <h3>{post.description}</h3>
														}
													</div>
												</div>
											</section>
										</div>
									</section>
								</Link>
							)) :
							'no posts matched your search'
					}
				</section>
				<section className='flex-2'>
					<h1>Categories</h1>
					<div className='category-title'
							 onClick={() => setPost(list)}>
						All
					</div>
					{
						categoryList.map(category => (
							<div className='category-title'
									 onClick={() => setPost(category['category_posts'], category.title)}
									 key={category.id}>
								{category.title}
							</div>
						))
					}
				</section>
			</div>
		</React.Fragment>
	)
};

export default Post;

Post.propTypes = {
	posts: PropTypes.array.isRequired,
	list: PropTypes.array.isRequired,
	categoryList: PropTypes.array.isRequired,
	categoryPostTitle: PropTypes.string.isRequired,
	setPost: PropTypes.func.isRequired
};
