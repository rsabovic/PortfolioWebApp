import { useParams } from 'react-router-dom'
import blogPosts from '../data/BlogPosts'

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === Number(id))

  if (!post) return <p>Post not found</p>

  return (
    <div className="main">
      <div className="blogPostDiv">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default BlogPost