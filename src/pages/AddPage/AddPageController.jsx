
import { v4 } from 'uuid';
import AddPageView from './AddPageView';
import { useNavigate } from 'react-router-dom';
import Model from './AddPageModel';

const AddpageController = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // FormData(e.target) >>> formun içindeki bütün input degerlerini alır
    const form = new FormData(e.target);

    // Object.fromEntries >> bir diziyi objeye çevirir

    //form.entries() >>> formun içindekileri dizi şeklinde tuttar
    const newPost = Object.fromEntries(form.entries());
    newPost.id = v4();

    Model.createPost(newPost)
      .then(() => { navigate('/') })
      .catch(() => console.log(err))


  }

  return (
    <AddPageView handleSubmit={handleSubmit} />
  )
}

export default AddpageController