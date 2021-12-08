import { useSelector } from 'react-redux'

import './style/menuInfo.scss'

export default function MenuInfo() {
  const newMenuInfo = useSelector(state => state.newMenuInfo.returnArray)

  return (
    <section className="sectionMenuInfo">
      <article className="articleUp">
        <h2 className="title">{newMenuInfo.title}</h2>
        <p className="textView">{newMenuInfo.views}</p>
        <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </article>
      <article className="articleDown">
        <div className="boxUser">
          <img src={newMenuInfo.logo} alt="mi log" className="logo"/>
          <h3 className="chanel">
            <span className="up">{newMenuInfo.chanel}</span>
            <span className="down">{newMenuInfo.subs}</span>
          </h3>
        </div>
        <button className="subs">SUSCRIBIRSE</button>
      </article>
    </section>
  )
}
