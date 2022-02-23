import React, { useState } from 'react'



const Post = ({ post}) => {
  const [votes, setVotes] = useState(0)

  const upVote = () => {
    setVotes(votes + 1)
  }

  const downVote = () => {
    setVotes(votes - 1)
  }
  return (
   
    <>
    <p> {post.sender} </p>
    <p>{post.content}</p>


    <button onClick={upVote}>Up-vote</button>
    <p>{votes}</p>
    <button onClick={downVote}>Down-vote</button>
    </>
  )
}


export default Post