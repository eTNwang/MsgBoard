import React, { useState } from 'react'



const Reply = ({ post: reply}) => {
  const [replies, setReplies] = React.useState(
    [])

  const [votes, setVotes] = useState(0)

  const upVote = () => {
    setVotes(votes + 1)
  }

  const downVote = () => {
    setVotes(votes - 1)
  }
  return (
   
    <>
    <p> {reply.sender} </p>
    <p>{reply.content}</p>


    <button onClick={upVote}>Up-vote</button>
    <p>{votes}</p>
    <button onClick={downVote}>Down-vote</button>
    <Input posts = {replies} setPosts = {setReplies} />
      <PostList posts= 
      { replies}/>
    </>
  )
}


export default Reply