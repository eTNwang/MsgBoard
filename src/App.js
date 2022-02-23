import React, { useState } from 'react'

import Title from './components/Title'
import Input from './components/Input'
import PostList from './components/PostList'

const App = () => {
  const [posts, setPosts] = React.useState(
     []
)

  return (
    <>
      <Title />
      <Input posts = {posts} setPosts = {setPosts} />
      <PostList posts= 
      { posts}/>
    
    </>
  )
}

export default App