import React, { useState } from 'react'
import Input from './Input'
import PostList from './PostList'



const Reply = ({ reply, setReply}) => {
  const [state, setState] = React.useState(
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
    <Input posts = {state} setPosts = {setState} />
      <PostList posts= 
      { state}/>
    </>
  )
}


export default Reply