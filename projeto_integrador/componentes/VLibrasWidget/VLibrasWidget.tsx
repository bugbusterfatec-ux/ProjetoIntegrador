'use client'
import { useEffect, useRef } from 'react'

export const VLibrasWidget = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let attempts = 0
        const maxAttempts = 5

        const initializeVLibras = () => {
            attempts++
            console.log(`[VLibras] Tentativa ${attempts}/${maxAttempts}`)

            if (typeof (window as any).VLibras !== 'undefined') {
                console.log('[VLibras] Widget criando...')
                try {
                    // Remove conteúdo anterior para evitar duplicatas
                    container.innerHTML = ''

                    // Cria a estrutura do VLibras
                    const enabledDiv = document.createElement('div')
                    enabledDiv.setAttribute('vw', '')
                    enabledDiv.className = 'enabled'
                    enabledDiv.style.cssText = 'position: relative; width: 50px; height: 50px; pointer-events: auto;'

                    const buttonDiv = document.createElement('div')
                    buttonDiv.setAttribute('vw-access-button', '')
                    buttonDiv.className = 'active'
                    buttonDiv.style.cssText = 'position: relative; width: 50px; height: 50px; pointer-events: auto; z-index: 1001;'

                    const pluginDiv = document.createElement('div')
                    pluginDiv.setAttribute('vw-plugin-wrapper', '')
                    pluginDiv.style.cssText = 'pointer-events: auto;'

                    const topWrapper = document.createElement('div')
                    topWrapper.className = 'vw-plugin-top-wrapper'

                    pluginDiv.appendChild(topWrapper)
                    enabledDiv.appendChild(buttonDiv)
                    enabledDiv.appendChild(pluginDiv)
                    container.appendChild(enabledDiv)

                    // Inicializa o widget
                    new (window as any).VLibras.Widget('https://vlibras.gov.br/app')

                    // Debug: Verifica o estado do DOM
                    const allVwElements = document.querySelectorAll('[vw], [vw-access-button], [vw-plugin-wrapper]')
                    console.log('[VLibras] ✓ Widget inicializado com sucesso!')
                    console.log('[VLibras] Elementos vw encontrados no DOM:', allVwElements.length)
                    allVwElements.forEach((el, idx) => {
                        console.log(`[VLibras] Elemento ${idx}:`, el.tagName, el.getAttribute('vw'), el.getAttribute('vw-access-button'), el.getAttribute('vw-plugin-wrapper'))
                    })

                    // Verifica se há elementos criados pelo VLibras
                    setTimeout(() => {
                        const vlibrasElements = document.querySelectorAll('[class*="vlibras"], [data-vlibras]')
                        console.log('[VLibras] Elementos VLibras criados:', vlibrasElements.length)
                    }, 500)

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
            ref={containerRef}
            className="vlibras-wrapper"
            style={{
                position: 'fixed',
                right: '10px',
                top: 'calc(50% - 35px)',
                transform: 'translateY(-50%)',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                gap: 0,
                pointerEvents: 'none',
            }}
        />
    )
}
