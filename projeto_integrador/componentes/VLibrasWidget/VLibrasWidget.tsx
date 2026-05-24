'use client'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
        script.async = true

        script.onload = () => {
            if ((window as any).VLibras) {
                new (window as any).VLibras.Widget('https://vlibras.gov.br/app')
            }
        }

        document.body.appendChild(script)

        return () => {
            if (script.parentNode) script.parentNode.removeChild(script)
        }
    }, [])

    return (
        // @ts-expect-error atributos customizados do VLibras
        <div vw className="enabled">
            <div vw-access-button className="active"></div>
            <div vw-plugin-wrapper>
                <div className="vw-plugin-top-wrapper"></div>
            </div>
        </div>
    )
}
