

export const CustomAcessoRapido = () => {

    return (
        <section className="acesso-rapido py-5">
        <div className="container">
            <h3 className="titulo-secao text-center mb-5">ACESSO RÁPIDO</h3>
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
                <a href="#" className="card-acesso">
                    <div className="icone-acesso">
                        <span className="material-symbols-rounded">real_estate_agent</span>
                    </div>
                    <div>
                        <h4 className="text-center">PROTETORES</h4>
                        <p className="card-acesso-descricao">Seja um voluntário protetor</p>
                    </div>
                </a>
                <a href="#" className="card-acesso">
                    <div className="icone-acesso">
                        <span className="material-symbols-rounded icone-rotacionado">humerus</span>
                    </div>
                    <div>
                        <h4 className="text-center">BANCO<br/>DE RAÇÃO</h4>
                        <p className="card-acesso-descricao">Solicite ou doe ração</p>
                    </div>
                </a>
                <a href="/filtro" className="card-acesso">
                    <div className="icone-acesso">
                        <span className="material-symbols-rounded">family_home</span>
                    </div>
                    <div>
                        <h4 className="text-center">ADOTE</h4>
                        <p className="card-acesso-descricao">Encontre seu pet ideal</p>
                    </div>
                </a>
                <a href="#" className="card-acesso">
                    <div className="icone-acesso">
                        <span className="material-symbols-rounded">school</span>
                    </div>
                    <div>
                        <h4 className="text-center">EDUCAÇÃO</h4>
                        <p className="card-acesso-descricao">Conscientização animal</p>
                    </div>
                </a>
            </div>
            <div className="text-center">
                <button className="btn btn-laranja btn-lg">MAIS SERVIÇOS</button>
            </div>
        </div>
    </section>
    )
}