'use client'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        // Cria toda a estrutura via JS puro (React remove atributos customizados como vw, vw-access-button)
        const container = document.createElement('div')
        container.setAttribute('vw', '')
        container.className = 'enabled'

        const accessButton = document.createElement('div')
        accessButton.setAttribute('vw-access-button', '')
        accessButton.className = 'active'

        const pluginWrapper = document.createElement('div')
        pluginWrapper.setAttribute('vw-plugin-wrapper', '')

        const topWrapper = document.createElement('div')
        topWrapper.className = 'vw-plugin-top-wrapper'

        pluginWrapper.appendChild(topWrapper)
        container.appendChild(accessButton)
        container.appendChild(pluginWrapper)
        document.body.appendChild(container)

        // Carrega o script e inicializa após inserir a estrutura
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
            container.remove()
            script.remove()
        }
    }, [])

    return null
}
