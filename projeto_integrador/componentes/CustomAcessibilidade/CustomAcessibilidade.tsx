'use client'


export const CustomAcessibilidade = () => {
    
    return (
        <div className="barra-acessibilidade bg-light" >
            <div className="container-fluid">
                <div className="d-flex justify-content-start align-items-center gap-2 py-2">
                    <button className="btn-acessibilidade btn-contraste" aria-label="Contraste">
                        <span className="material-symbols-rounded">fiber_manual_record</span>
                    </button>

                    <button className="btn-acessibilidade btn-vermelho" id="aumentarFonte">
                        A+
                    </button>

                    <button className="btn-acessibilidade btn-vermelho" id="diminuirFonte">
                        A-
                    </button>

                    <button className="btn-acessibilidade" aria-label="Modo audiodescrição">
                        <span className="material-symbols-rounded">hearing</span>
                    </button>

                </div>
            </div>
        </div>
    )
}