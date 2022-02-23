import React from 'react'


const Input = ({ posts, setPosts }) => {

const [state, setState] = React.useState({
     sender: '',
     content: '',
 })
const handleChange = e => {
    const { value } = e.target
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const handleSubmit = e => {
    console.log(state)
    e.preventDefault()
    //then call functions to set the comment
    console.log("reached setpostst")
    setPosts(
      
      [
        ...posts,
        {
          sender: state.sender,
          content: state.content,
        }
      ]
    )
    console.log("postswereset")


    setState({
      sender: '',
      content: '',
    })
    console.log("stateswereset")

    

    
  }

  
  return (
    <form
      onSubmit={handleSubmit}

    >
      <input
        
        type="text"
        name="sender"
        value = {state.sender}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="content"
        value = {state.content}
        placeholder="Write a post"
        onChange={handleChange}

      />
      <br></br>
      <input type="submit" disabled={!state.content || !state.sender}value="Submit" />
    </form>
  )
}


export default Input