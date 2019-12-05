/*
Ganti post.title dg post.image, sesuaikan dgn konten (url)
Ganti li dengan card nanti
 */
import React from 'react'


// contain destructor props:posts&loading
const Posts = ({posts, loading}) => {
    //make sure its done loading, checking if its empty loading
    if (loading){
        return <h4>Loading...</h4>
    }
    return <ul className="list-group mb-4">
        {posts.map(post => (
            <li key={post.id} className="list-group-item">{post.name}</li> //since it a list, and key must be an id
        ))}
    </ul>
}

export default Posts
