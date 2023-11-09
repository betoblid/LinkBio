import "./Botao.css"

interface Propsotao {
    link: string,
    conteudo: string,
    img: string
}

const Botao = ({ link, conteudo, img }: Propsotao) => {

    return (
        <div className="btn-link">
            <img src={img} alt={`Rede social ${conteudo}`} title={`Rede social ${conteudo}`}/>
            <a href={link} target="_blanck" title={`Rede social ${conteudo}`}>
                Siga me no {conteudo}
            </a>
        </div>

    )
}

export default Botao;