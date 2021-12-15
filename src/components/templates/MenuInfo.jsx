import { useSelector, useDispatch } from 'react-redux'
import changeBell from '../../redux/actions/SubsBellAction'
import { useState } from 'react'

import './style/menuInfo.scss'

export default function MenuInfo () {
  const [subs, setSubs] = useState(true)
  const newMenuInfo = useSelector(state => state.newMenuInfo.returnArray)
  const cambiarCampana = useSelector(state => state.cambiarCampana)
  const dispatch = useDispatch()

  function functionSubs (e) {
    if (e.target.innerText === 'SUSCRIBIRSE') {
      setSubs(false)
    } else if (e.target.innerText === 'SUSCRITO') {
      setSubs(true)
    }
  }

  function callBell () {
    const boxGeneral = document.querySelector('.boxSubsFloat')
    boxGeneral.style.display = 'flex'
  }

  const styleSpan = {
    color: '#ccc',
    display: 'flex',
    alignItems: 'center'
  }

  function eligeBell (e) {
    const boxGeneral = document.querySelector('.boxSubsFloat')

    if (e.target.classList.value === 'p1' ||
      e.target.parentElement.classList.value === 'p1' ||
      e.target.parentElement.parentElement.classList.value === 'p1') {
      console.log('el primer P')
      boxGeneral.firstChild.style.background = '#181818'
      boxGeneral.lastChild.style.background = '#202227'
      dispatch(changeBell(true))
    }
    if (e.target.classList.value === 'p2' ||
      e.target.parentElement.classList.value === 'p2' ||
      e.target.parentElement.parentElement.classList.value === 'p2') {
      console.log('el segundo P')
      boxGeneral.lastChild.style.background = '#181818'
      boxGeneral.firstChild.style.background = '#202227'
      dispatch(changeBell(false))
    }
    boxGeneral.style.display = 'none'
  }

  return (
    /* eslint jsx-quotes: ['error', 'prefer-double'] */
    <section className="sectionMenuInfo">
      <article className="articleUp">
        <h2 className="title">{newMenuInfo.title}</h2>
        <p className="textView">{newMenuInfo.views}</p>
        <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" /></svg>
      </article>
      <article className="articleDown">
        <div className="boxUser">
          <img src={newMenuInfo.logo} alt="mi log" className="logo" />
          <h3 className="chanel">
            <span className="up">{newMenuInfo.chanel}</span>
            <span className="down">{newMenuInfo.subs}</span>
          </h3>
        </div>
        <div className="boxSubs" onClick={functionSubs}>
          {
            subs
              ? <button>SUSCRIBIRSE</button>
              : <button style={styleSpan}>SUSCRITO<svg onClick={callBell} aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox={cambiarCampana.medida}><path fill="currentColor" d={cambiarCampana.pathD} /></svg></button>
          }
          <div className="boxSubsFloat" onClick={eligeBell}>
            <p className="p1">Todas<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z" /></svg></p>
            <p className="p2">Ninguna<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M633.99 471.02L36 3.51C29.1-2.01 19.03-.9 13.51 6l-10 12.49C-2.02 25.39-.9 35.46 6 40.98l598 467.51c6.9 5.52 16.96 4.4 22.49-2.49l10-12.49c5.52-6.9 4.41-16.97-2.5-22.49zM163.53 368c16.71-22.03 34.48-55.8 41.4-110.58l-45.47-35.55c-3.27 90.73-36.47 120.68-54.84 140.42-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h279.66l-61.4-48H163.53zM320 96c61.86 0 112 50.14 112 112 0 .2-.06.38-.06.58.02 16.84 1.16 31.77 2.79 45.73l59.53 46.54c-8.31-22.13-14.34-51.49-14.34-92.85 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-26.02 5.41-49.45 16.94-69.13 32.72l38.17 29.84C275 103.18 296.65 96 320 96zm0 416c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z" /></svg></p>
          </div>
        </div>
      </article>
    </section>
  )
}
