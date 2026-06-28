import style from "./CustomChamadaProjeto.module.css"

export const CustomChamadaProjeto = () => {
    return (
        <section className={style.chamadaProjeto}>
            <div className={style.chamadaConteudo}>
                <div className={style.textGroup}>
                    <span className={style.label}>
                        <span className={style.labelIcon} aria-hidden="true">🚀</span>
                        EM DESENVOLVIMENTO
                    </span>
                    <h2>Projeto Bem-Estar Animal</h2>
                    <p className={style.subtitle}>
                        <strong>Uma parceria entre a Fatec Votorantim e a Prefeitura de Votorantim para modernizar a gestão do bem-estar animal do município.</strong>
                    </p>
                    <blockquote className={style.bannerNote}>
                        O projeto está em desenvolvimento e será disponibilizado gradualmente para a população.
                    </blockquote>
                    <a href="/projeto" className={style.botaoPrimary}>
                        Conheça o Projeto
                    </a>
                </div>
                <div className={style.imageWrapper}>
                    <img src="/caoGato.jpeg" alt="Cachorro e gato juntos" />
                </div>
            </div>
        </section>
    )
}
