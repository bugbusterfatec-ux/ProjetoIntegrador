'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface CustomHeaderProps {
    extraLogo?: string;
    textAlt?: string;
    className?: string;
}

export const CustomHeader = ({ extraLogo, textAlt, className }: CustomHeaderProps) => {
    const router = useRouter()
    const [termo, setTermo] = useState('')

    const handleBusca = (e: React.FormEvent) => {
        e.preventDefault()
        const query = termo.trim()
        router.push(query ? `/meetinpet?busca=${encodeURIComponent(query)}` : '/meetinpet')
    }

    return (
        <header className="cabecalho">
            <div className="cabecalho-acento" role="presentation" aria-hidden="true" />
            <div className="container-fluid">
                <div className="cabecalho-inner">
                    <div className="cabecalho-logo-esq">
                        <img src="/logo_Bem-EstarAnimal.png" alt="Departamento do Bem-Estar Animal" className="logo" />
                    </div>

                    <div className="cabecalho-busca">
                        <form className="busca-form" onSubmit={handleBusca} role="search">
                            <input
                                type="search"
                                className="busca-input"
                                placeholder="O que você procura?"
                                value={termo}
                                onChange={(e) => setTermo(e.target.value)}
                                aria-label="Buscar no site"
                            />
                            <button type="submit" className="busca-btn" aria-label="Buscar">
                                <span className="material-symbols-rounded">search</span>
                            </button>
                        </form>
                    </div>

                    <div className="cabecalho-logo-dir">
                        {extraLogo && (
                            <img src={extraLogo} alt={textAlt} className={className} />
                        )}
                        <img src="/logo_prefeituraVotorantim.png" alt="Prefeitura Municipal de Votorantim" className="logo-prefeitura" />
                    </div>
                </div>
            </div>
        </header>
    )
}
