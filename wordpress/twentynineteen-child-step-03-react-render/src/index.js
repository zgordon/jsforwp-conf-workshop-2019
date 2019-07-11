// Get the post containers
const postContainers = document.querySelectorAll(
  `#react-template .entry-content`
);
// Setup an empty array for posts
const posts = [];

// Create a post in memory for each post on the page
postContainers.forEach(post => {
  const title = post.querySelector(`h3`);
  const link = post.querySelector(`h3 a`);
  const image = post.querySelector(`img`);
  const excerpt = post.querySelector(`.excerpt`);
  posts.push({
    title: title.innerText,
    url: link.href,
    imageSrc: image.src,
    imageAlt: image.alt,
    excerpt: excerpt.innerText
  });
});

const Posts = () => {
  return posts.map(post => (
    <div className="entry-content">
      <a href={post.url}>
        <img
          src={post.imageSrc}
          alt={post.imageAlt}
          className="wp-post-image"
        />
      </a>
      <h3>
        <a href={post.url}>{post.title}</a>
      </h3>
      <div className="excerpt">
        <p>{post.excerpt}</p>
      </div>
    </div>
  ));
};

wp.element.render(<Posts />, document.querySelector(`#react-template .posts`));
