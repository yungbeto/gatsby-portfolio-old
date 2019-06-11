import React from "react";
import { Link } from "gatsby";
import './WorkListing.scss';


class WorkListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <section id="blog" class="column">
    <span class="subheader">WORK</span>
        {/* Your post list here. */
        postList.map(post => (
          <article className="blogCard">
              <div 
                className="blogCard__cover"
                style={{backgroundImage: `url(${post.cover})`, backgroundSize: 'cover',
                overflow: 'hidden', }}
              />
              <div className="blogCard__body">
                <div className="blogCard__header">
                  <span className="blogCard__header--title bold">{post.title}</span>
                  <span className="blogCard__header--subTitle">{post.date}</span>
                </div>
                <div className="blogCard__main">
                  <span className="blogCard__main--copy">{post.excerpt}</span>
                  <Link to={`/project/${post.path}`} key={post.title} className="blogCard_readMore">Read More...</Link>
                </div>
              </div>
            </article>
          
        ))}
      </section>
    );
  }
}

export default WorkListing;
