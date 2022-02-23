/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import Post from './Post'



const FinalReplyList = ({ replyList }) => {
  return (
    <div >
      {replyList.map((reply, ind) => (
          <Post key = {ind} reply={reply}></Post>
      ))}
    </div>
  )
}

const ReplyList = ({ replies }) => {
  

  // const addPost= post => {
  //   const oldposts = state.posts
  //   const newposts = oldposts.push(post)
  //   setState({
  //     posts: newposts,
  //   })
  // }

  let replyList = replies

  return <FinalReplyList replyList={replyList} />
}



export default ReplyList