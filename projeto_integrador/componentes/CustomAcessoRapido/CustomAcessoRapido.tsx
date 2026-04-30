

export const CustomAcessoRapido = () => {

    return (
        <section className="acesso-rapido py-5">
        <div className="container">
            <h3 className="titulo-secao text-center mb-5">ACESSO RÁPIDO</h3>
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
                <div className="card-acesso">
                    <div className="icone-acesso">
                        <span className="material-symbols-rounded">real_estate_agent</span>
                    </div>
                    <h4 className="text-center">PROTETORES</h4>
                </div>
                <div className="card-acesso">
                    <div className="icone-acesso">
                        <span className="material-symbols-rounded icone-rotacionado">humerus</span>
                    </div>
                    <h4 className="text-center">BANCO<br/>DE RAÇÃO</h4>
                </div>
                <div className="card-acesso">
                    <div className="icone-acesso">
                        <span className="material-symbols-rounded">family_home</span>
                    </div>
                    <h4 className="text-center">ADOTE</h4>
                </div>
                <div className="card-acesso">
                    <div className="icone-acesso">
                        <span className="material-symbols-rounded">school</span>
                    </div>
                    <h4 className="text-center">EDUCAÇÃO</h4>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-laranja btn-lg">MAIS SERVIÇOS</button>
            </div>
        </div>
    </section>
    )
}