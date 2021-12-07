import './style/menuInfo.scss'
import LogoLinux from '../../img/logo-linux.png'

export default function MenuInfo() {
  return (
    <section className="container">
      <div className="containerUp">
        <h2 className="title">Titulo inicial</h2>
        <p className="textView">926 views</p>
        <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </div>
      <div className="containerDown">
        <div className="boxUser">
          <img src={LogoLinux} alt="mi log" className="logo"/>
          <h3 className="chanel">
            <span className="up">Mi chanel</span>
            <span className="down">500 suscriptores</span>
          </h3>
        </div>
        <button className="subs">SUSCRIBIRSE</button>
      </div>
    </section>
  )
}
