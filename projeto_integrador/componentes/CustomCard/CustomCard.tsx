


interface CustomCardProps {
    className : string;
    especie : "gato" | "cachorro" | string;
    sexo : "macho" | "femea" | string;
    porte : "pequeno" | "medio" | "grande" | string;
    idade : "menor que 03 meses" | "03 meses a 05 meses" | "06 meses a 07 anos" | "acima de 07 anos" | string;
    title : string; //nome do animal
    p : string;
    

}

export const CustomCard = () => {

    return (
        <article className="card" 
            data-especie="gato"
            data-sexo="femea"
            data-porte="pequeno"
            data-idade="06 meses a 07 anos"
            data-peso="ate 5kg">
            <img src="imagens/kairi.jpg" alt="gato" />
            <h2>Kairi</h2><span></span>
            <p>Raça: Indef.</p><span></span>
            <p>Sexo: Fêmea</p><span></span>
            <p>Vacinação: Sim</p><span></span>

            <button><a href="index_detalhes.html" target="_blank">Ver Mais</a></button>
        </article>
    )
}