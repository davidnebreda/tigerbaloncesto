import './HeroHeader.css'

function HeroHeader() {
    const titulo:string = "Tiger Baloncesto"
    const subtitulo:string = "Vive la Emoción"
    return (
        <>
          <div id="hero_header">
              <h1 id="titulo_web" className="inline-block bg-black text-white">{titulo}</h1>
                <h2 id="subtitulo_web" className="inline-block bg-black text-white">{subtitulo}</h2>
          </div>
        </>
    )
}

export default HeroHeader