'use client'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        let scriptAttempts = 0
        const maxAttempts = 3

        const tryLoadVLibras = () => {
            if ((window as any).VLibras) {
                console.log('VLibras disponível, inicializando...')

                // Configura os atributos
                const vlibrasWrapper = document.querySelector('.vlibras-wrapper') as HTMLElement
                if (vlibrasWrapper) {
                    const enabledDiv = vlibrasWrapper.querySelector('.enabled') as HTMLElement
                    const activeDiv = vlibrasWrapper.querySelector('.active') as HTMLElement
                    const pluginDiv = vlibrasWrapper.querySelector('[data-plugin-wrapper]') as HTMLElement

                    if (enabledDiv) enabledDiv.setAttribute('vw', '')
                    if (activeDiv) activeDiv.setAttribute('vw-access-button', '')
                    if (pluginDiv) pluginDiv.setAttribute('vw-plugin-wrapper', '')
                }

                try {
                    new (window as any).VLibras.Widget('https://vlibras.gov.br/app')
                    console.log('Widget VLibras inicializado com sucesso')
                } catch (error) {
                    console.error('Erro ao inicializar VLibras Widget:', error)
                }
            } else if (scriptAttempts < maxAttempts) {
                scriptAttempts++
                console.log(`VLibras não disponível, tentativa ${scriptAttempts}/${maxAttempts}`)
                setTimeout(tryLoadVLibras, 500)
            } else {
                console.warn('VLibras não pôde ser carregado após múltiplas tentativas')
            }
        }

        // Carrega o script do VLibras
        const script = document.createElement('script')
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
        script.async = true
        script.defer = true
        script.crossOrigin = 'anonymous'

        script.onload = () => {
            console.log('Script VLibras carregado com sucesso')
            setTimeout(tryLoadVLibras, 200)
        }

        script.onerror = (error) => {
            console.error('Erro ao carregar script VLibras:', error)
            setTimeout(() => {
                console.log('Tentando carregar VLibras novamente...')
                tryLoadVLibras()
            }, 1000)
        }

        // Remove script anterior se existir para evitar conflitos
        const existingScript = document.querySelector('script[src*="vlibras-plugin"]')
        if (existingScript && existingScript !== script) {
            existingScript.remove()
        }

        document.head.appendChild(script)

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="vlibras-wrapper">
            <div className="enabled">
                <div className="active"></div>
                <div data-plugin-wrapper="">
                    <div className="vw-plugin-top-wrapper"></div>
                </div>
            </div>
        </div>
    )
}
