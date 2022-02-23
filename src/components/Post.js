import React, { useState } from 'react'
import Input from './Input'
import ReplyList from './ReplyList'


const Post = ({ post}) => {

  const [replies, setReplies] = React.useState(
    []
  )

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
    <Input posts = {replies} setPosts = {setReplies} />
    <ReplyList replies= 
      { replies}/>

    </>
  )
}


export default Post