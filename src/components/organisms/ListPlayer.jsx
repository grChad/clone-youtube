import { useDispatch } from 'react-redux'

import './style/listPlayer.scss'
import loadInfo from '../../redux/actions/MenuInfoAction'
import DataJson from '../templates/Data.json'

export default function ListPlayer ({ titulo, canal, vistas, image, classId }) {
  const dispatch = useDispatch()

  function sendArray (e) {
    let elementoClase
    const boxGeneral = document.querySelector('.main')

    if (e.target.tagName === 'svg' ||
      e.target.tagName === 'path') {
      alert('estamos trabajando en ello')
    } else {
      switch (true) {
        case (e.target.tagName === 'IMG' ||
               e.target.tagName === 'H3' ||
               e.target.tagName === 'P'):
          elementoClase = e.target.parentElement.parentElement.classList[1]
          break
        case (e.target.classList.value === 'listBox__info'):
          elementoClase = e.target.parentElement.classList[1]
          break
        default: return console.log('esta no')
      }
      dispatch(loadInfo(DataJson[elementoClase - 1]))
      setTimeout(() => { boxGeneral.scrollTop = 0 }, 500) // Para subir el scroll en .5 segundos
    }
  }
  return (
    /* eslint jsx-quotes: ['error', 'prefer-double'] */
    <article className={`listBox ${classId}`} onClick={sendArray}>
      <div className="listBox__image">
        <img src={image} alt="Imagen de la Portada" />
      </div>
      <div className="listBox__info">
        <svg aria-hidden="true" focusable="false" data-icon="ellipsis-v" role="img" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" /></svg>
        <h3>{titulo}</h3>
        <p>{canal}</p>
        <p>{vistas}</p>
      </div>
    </article>
  )
}
