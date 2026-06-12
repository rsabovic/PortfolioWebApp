import blogPosts from '../data/BlogPosts'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <div className="main">
            <div className="blogDiv standardCard">
                <h1>Blog Posts!</h1>
                <p>
                    I just wanted to take one minute and thank you for taking the time to
                    find me on my little corner of the internet. Below you will find my
                    ramblings, it may not be updated daily but it will have
                    updates on some of the work I am doing as well as little tidbits of
                    knowledge I learned. Once again thank you, and I hope you enjoy!
                </p>
            </div>
            {blogPosts.map((post) => (
                <div className="blogPostDiv" key={post.id}>
                <h1><Link to={`/blog/${post.id}`}>{post.title}</Link></h1>
                <p>{post.summary}</p>
                <p>{post.date}</p>
            </div>
            ))}
        </div>
    )
}
export default Blog
