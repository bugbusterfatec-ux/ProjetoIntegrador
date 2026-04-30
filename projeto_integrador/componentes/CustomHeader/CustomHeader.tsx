'use client'

export const CustomHeader = () => {

    return (
        <header className="cabecalho">
        <div className="container-fluid">
            <div className="row align-items-center py-4">
                <div className="col-md-3">
                    <img src="/logo_Bem-estarAnimal.png" alt="Departamento do Bem-Estar Animal" className="logo" />
                </div>
                <div className="col-md-4">
                    <div className="d-flex gap-2 align-items-center">
                        <button className="btn btn-buscar" aria-label="Buscar">
                            <span className="material-symbols-rounded">search</span>
                        </button>
                        <input type="text" className="form-control" placeholder="O que você procura?" />
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-end">
                    <img src="/logo_prefeituraVotorantim.png" alt="Prefeitura Municipal de Votorantim" className="logo-prefeitura" />
                </div>
            </div>
        </div>
    </header>
    )
}