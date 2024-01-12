import  { useEffect, useState } from 'react'
import PopupView from './PopupView'
import Model from './PopupModel'

const PopupController = ({isOpen,setIsOpen}) => {
const[posts,setPosts]=useState(null)

  //console.log(isOpen)

useEffect(()=>{
Model.getUserPosts(isOpen).then((data)=>setPosts(data));
},[])

  return (
   <PopupView
   isOpen={isOpen}
   setIsOpen={setIsOpen}
   posts={posts}
   />
  )
}

export default PopupController