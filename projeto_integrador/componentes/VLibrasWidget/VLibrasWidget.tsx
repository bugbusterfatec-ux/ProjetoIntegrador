'use client'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        let attempts = 0
        const maxAttempts = 5

        const initializeVLibras = () => {
            attempts++
            console.log(`[VLibras] Tentativa ${attempts}/${maxAttempts}`)

            if (typeof (window as any).VLibras !== 'undefined') {
                console.log('[VLibras] Widget criando...')
                try {
                    new (window as any).VLibras.Widget('https://vlibras.gov.br/app')
                    console.log('[VLibras] ✓ Widget inicializado com sucesso!')
                    return true
                } catch (e) {
                    console.error('[VLibras] Erro ao criar widget:', e)
                    return false
                }
            }

            if (attempts < maxAttempts) {
                setTimeout(initializeVLibras, 300)
            } else {
                console.error('[VLibras] ✗ Não foi possível carregar após', maxAttempts, 'tentativas')
            }

            return false
        }

        // Verifica se o script já foi carregado
        const existingScript = document.querySelector('script[src*="vlibras-plugin"]')
        if (existingScript) {
            console.log('[VLibras] Script já existe, iniciando widget...')
            setTimeout(initializeVLibras, 100)
            return
        }

        // Cria e adiciona o script
        console.log('[VLibras] Carregando script...')
        const script = document.createElement('script')
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
        script.async = true
        script.type = 'text/javascript'

        script.onload = () => {
            console.log('[VLibras] ✓ Script carregado')
            setTimeout(initializeVLibras, 100)
        }

        script.onerror = () => {
            console.error('[VLibras] ✗ Erro ao carregar script de https://vlibras.gov.br/app/vlibras-plugin.js')
            // Tenta carregar de um CDN alternativo
            console.log('[VLibras] Tentando CDN alternativo...')
            script.src = 'https://cdn.jsdelivr.net/npm/vlibras-plugin/dist/vlibras-plugin.js'
            script.onerror = () => {
                console.error('[VLibras] ✗ Ambas as tentativas falharam')
            }
            document.head.appendChild(script)
        }

        document.head.appendChild(script)
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
