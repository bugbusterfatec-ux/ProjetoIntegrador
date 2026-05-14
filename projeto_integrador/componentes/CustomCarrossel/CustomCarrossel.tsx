

export const CustomCarrossel = () => {

    return (
        <section className="carrossel-principal">
        <div id="carrosselHero" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="slide slide-1">
                        <div className="conteudo-slide text-center text-white">
                            <h2 className="display-4 fw-bold">+Vagas para a Castração Animal em Votorantim</h2>
                            <p className="lead">3.600 oportunidades por ano</p>
                            <p>{"arraste e entenda a importância da castração >>"}</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="slide slide-2">
                        <div className="conteudo-slide text-center text-white">
                            <h2 className="display-4 fw-bold">GUARDA RESPONSÁVEL DE ANIMAIS DOMÉSTICOS</h2>
                            <p className="lead">OBJETOS DE ANIMAIS EM VIAS PÚBLICAS</p>
                            <p>Orientações para guarda responsável de animais domésticos</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carrosselHero" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carrosselHero" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </button>
        </div>
    </section>
    )
}