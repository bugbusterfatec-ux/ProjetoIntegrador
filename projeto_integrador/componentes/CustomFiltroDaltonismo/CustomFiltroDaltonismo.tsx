'use client'
import { useState } from "react"

export const CustomFiltroDaltonismo = () => {

    const [filtro, setFiltro] = useState("padrao")

    return (
        <div className="filtro-wrapper">
        <button className="filtro-icone" id="btnFiltroDaltonismo" aria-label="Abrir filtro de daltonismo" aria-expanded="false">
            <span className="material-symbols-rounded">visibility</span>
            <div className="filtro-banner-hover">
                <span className="filtro-banner-texto">DALTONISMO</span>
            </div>
        </button>
        <div className="filtro-acessibilidade" id="filtroDaltonismo">
            <div className="filtro-conteudo">
                <span className="filtro-texto">FILTRO DE DALTONISMO</span>
                    <select 
                        className="filtro-select"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}>
                        <option value="padrao">Cores Padrão</option>
                        <option value="protanopia">Protanopia</option>
                        <option value="deuteranopia">Deuteranopia</option>
                        <option value="tritanopia">Tritanopia</option>
                    </select>
                    {/* Estava assim */}
                {/* <select className="filtro-select">
                    <option selected>Cores Padrão</option>
                    <option>Protanopia</option>
                    <option>Deuteranopia</option>
                    <option>Tritanopia</option>
                </select> */}
            </div>
        </div>
    </div>
    )
}