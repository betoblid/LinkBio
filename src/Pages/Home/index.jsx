import Botao from "../../Componentes/Botao";
import background_mp4 from "../../Componentes/video/videoneymar.mp4";
import "./Home.css"
import Container from "../../Componentes/Container";

const Home = () => {

    return (
        <>
            <main className="conteudo">
                <video muted autoPlay className="banckground_video">
                    <source src={background_mp4} type="video/mp4" />
                </video>
                <div className="container_main">

                    <div className="box_user">
                        <img src="https://a.imagem.app/oJlSy9.webp" alt="User Foto" className="box_logo_user" title="User Neymar Js"/>
                    </div>

                    <div className="box_user">
                         <h1>Neymar Js<img src="https://a.imagem.app/oJlJT2.png" alt="Logo de Verificado" title="Usuário Verificado"/></h1> 
                    </div>

                    <nav className="container_hiperlinks">
                        <Botao key="Afr25fg" link="https://twitter.com/neymarjr" conteudo=" Twiter" img="https://a.imagem.app/oJQgNy.png"/>
                        <Botao key="dsf54k" link="https://www.facebook.com/neymarjr/" conteudo=" Fecebook" img="https://a.imagem.app/oJBWje.png"/>
                        <Botao key="iuilk45" link="https://www.youtube.com/user/neymarjr" conteudo=" Youtube" img="https://a.imagem.app/oJQmE0.png"/>
                        <Botao key="ytyu78" link="https://www.instagram.com/neymarjr/" conteudo=" Instagram" img="https://betoblid.github.io/shortly/images/icon-instagram.svg"/>
                        <Botao key="906fdg" link="https://www.twitch.tv/neymarjr" conteudo=" Twitch" img="https://a.imagem.app/oJmFIa.png"/>
                                                
                    </nav>

                </div>

                <Container />
            </main>
        </>
    )
}
export default Home;