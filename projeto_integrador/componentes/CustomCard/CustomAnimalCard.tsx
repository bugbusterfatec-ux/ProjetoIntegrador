import style from "./CustomAnimalCard.module.css"


interface CustomAnimalCardProps {
    nome: string;
    imagem: string;
    especie: string;
    sexo: string;
    porte: string;
    idade: string;
    peso: string;
    raca: string;
    vacinacao: boolean;
    

}

export const CustomAnimalCard = ({
  nome,
  imagem,
  sexo,
  raca,
  vacinacao
}: CustomAnimalCardProps) => {

    return (
        <article className={style.card}> 
            <img src={imagem} alt={nome} />

            <h2>{nome}</h2><span></span>
            <p>Raça: {raca}</p><span></span>
            <p>Sexo: {sexo}</p><span></span>
            <p>Vacinação: {vacinacao ? "Sim" : "Não"}</p><span></span>

            <button className={style.cardButton}><a href="index_detalhes.html" target="_blank">Ver Mais</a></button> {/* Colocar style aqui */}
        </article>
    )
}