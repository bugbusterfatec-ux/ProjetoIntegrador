'use client'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        // Carrega o script do VLibras
        const script = document.createElement('script')
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
        script.async = true
        script.type = 'text/javascript'

        script.onload = () => {
            console.log('[VLibras] Script carregado')
            // Aguarda o VLibras estar disponível
            const checkVLibras = setInterval(() => {
                if ((window as any).VLibras) {
                    clearInterval(checkVLibras)
                    try {
                        new (window as any).VLibras.Widget('https://vlibras.gov.br/app')
                        console.log('[VLibras] Widget inicializado')
                    } catch (e) {
                        console.error('[VLibras] Erro:', e)
                    }
                }
            }, 100)

            setTimeout(() => clearInterval(checkVLibras), 5000)
        }

        script.onerror = () => {
            console.error('[VLibras] Erro ao carregar')
        }

        document.head.appendChild(script)

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script)
            }
        }
    }, [])

    return (
        <div
            className="vlibras-wrapper"
            dangerouslySetInnerHTML={{
                __html: '<div vw class="enabled"><div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div></div>'
            }}
        />
    )
}
