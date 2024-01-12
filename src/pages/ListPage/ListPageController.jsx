import { useEffect, useState } from 'react';
import ListPageView from './ListPageView';
import Model from './ListPageModel';
const ListPageController = () => {
  const[posts,setPosts]=useState(null);
  const [isOpen ,setIsOpen]=useState(null);

useEffect(()=>{

Model.getPost().then((data)=>setPosts(data))

},[])

  return (
  <ListPageView
   posts={posts}
   isOpen={isOpen}
   setIsOpen={setIsOpen}/>
  )
}

export default ListPageController