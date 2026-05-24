'use client'
import { useEffect, useRef } from 'react'

export const VLibrasWidget = () => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Adiciona os atributos customizados após o React renderizar
        if (wrapperRef.current) {
            const mainDiv = wrapperRef.current.querySelector('div')
            if (mainDiv) {
                mainDiv.setAttribute('vw', '')
                const children = mainDiv.querySelectorAll('div')
                if (children[0]) children[0].setAttribute('vw-access-button', '')
                if (children[1]) children[1].setAttribute('vw-plugin-wrapper', '')
            }
        }

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
            ref={wrapperRef}
            className="vlibras-wrapper"
            dangerouslySetInnerHTML={{
                __html: '<div class="enabled"><div class="active"></div><div><div class="vw-plugin-top-wrapper"></div></div></div>'
            }}
        />
    )
}
