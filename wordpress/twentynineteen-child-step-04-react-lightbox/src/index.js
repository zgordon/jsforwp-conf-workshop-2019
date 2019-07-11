import { Fragment, useState } from "@wordpress/element";

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
    id: post.id,
    title: title.innerText,
    url: link.href,
    imageSrc: image.src,
    imageAlt: image.alt,
    excerpt: excerpt.innerText
  });
});

const Posts = () => {
  const [currentPost, updateCurrentPost] = useState({
    imageSrc: ``
  });
  function openModal(event) {
    event.preventDefault();
    updateCurrentPost(this);
    document.addEventListener(`keyup`, listenForClose);
  }
  function closeModal() {
    updateCurrentPost({
      imageSrc: ``
    });
    document.removeEventListener(`keyup`, listenForClose);
  }
  function listenForClose(event) {
    if (event.target.id === "react-template-overlay") {
      closeModal();
    }
    if (event.key === "Escape") {
      closeModal();
    }
  }
  const postsMarkup = posts.map(post => (
    <div id={post.id} key={post.id} className="entry-content">
      <a href={post.url} onClick={openModal.bind(post)}>
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

  return (
    <Fragment>
      {postsMarkup}
      {currentPost.imageSrc !== `` && (
        <div id="react-template-overlay" onClick={listenForClose}>
          <div className="modal">
            <figure>
              <img src={currentPost.imageSrc} alt={currentPost.imageAlt} />
            </figure>
            <h3>{currentPost.title}</h3>
            <div className="excerpt">
              <p>{currentPost.excerpt}</p>
            </div>
            <p>
              <a href={currentPost.url} className="button">
                Read More
              </a>
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

wp.element.render(<Posts />, document.querySelector(`#react-template .posts`));
