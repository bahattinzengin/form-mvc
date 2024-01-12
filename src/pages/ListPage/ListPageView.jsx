import PopupController from "../../components/PopUp/popupController"

const ListPageView = ({ posts,isOpen,setIsOpen }) => {
  return (
    <main className='container-sm px-5 py-5 md:px-40 lg:px-52'>

      <h1>Gönderi Sayısı: {''}
        <span className='font-bold'>{posts?.length} </span>

      </h1>
      {!posts ? (<p>Yükleniyor</p>) : (posts.map((post) => (
        <div 
        className='w-full bg-black my-5 p-5 rounded-md shadow shadow-[#ffffff4f] cursor-pointer hover:shadow-yellow-300'
        key={post.id}>


          <div className='flex justify-between'>
            <h3>{post.title}</h3>
            <p
            className='text-yellow-500'
            onClick={()=>setIsOpen(post.user)}
            >{post.user}</p>
          </div>

          
          <div className='mt-4 text-slate-300'>{post.text} </div>
        </div>


      )

      ))}
      {isOpen && (<PopupController
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />)}



    </main>
  )
}

export default ListPageView