'use client'
import Script from 'next/script'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        if (document.querySelector('[vw]')) return

        const container = document.createElement('div')
        container.setAttribute('vw', '')
        container.classList.add('enabled')

        const btn = document.createElement('div')
        btn.setAttribute('vw-access-button', '')
        btn.classList.add('active')

        const wrap = document.createElement('div')
        wrap.setAttribute('vw-plugin-wrapper', '')

        const inner = document.createElement('div')
        inner.className = 'vw-plugin-top-wrapper'

        wrap.appendChild(inner)
        container.appendChild(btn)
        container.appendChild(wrap)
        document.body.appendChild(container)
    }, [])

    return (
        <Script
            src="https://vlibras.gov.br/app/vlibras-plugin.js"
            strategy="afterInteractive"
            onLoad={() => {
                new (window as any).VLibras.Widget('https://vlibras.gov.br/app')
                // Em SPAs o window.onload já disparou antes do script carregar.
                // O VLibras depende desse evento para inicializar o widget,
                // então precisamos dispará-lo manualmente.
                if (typeof window.onload === 'function') {
                    window.onload(new Event('load'))
                }
            }}
        />
    )
}
