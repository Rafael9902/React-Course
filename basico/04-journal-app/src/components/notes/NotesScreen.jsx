import { NotesAppBar } from "./NotesAppBar"

export const NotesScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input type='text' placeholder='Some Awesome Title' className='notes__title-input'/>
        <textarea placeholder='what happened today' className='notes__textarea'></textarea>

        <div className='notes__image'>
          <img src='https://thumbs.dreamstime.com/b/signo-del-logotipo-lobo-dorado-una-ilustraci%C3%B3n-vectorial-189078997.jpg' alt='image'/>
        </div>
      </div>


    </div>
  )
}
