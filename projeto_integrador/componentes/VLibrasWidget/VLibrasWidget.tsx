'use client'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        if (document.getElementById('vlibras-script')) return

        const temp = document.createElement('div')
        temp.innerHTML =
            '<div vw class="enabled">' +
            '<div vw-access-button class="active"></div>' +
            '<div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>' +
            '</div>'
        document.body.appendChild(temp.firstElementChild as Element)

        const script = document.createElement('script')
        script.id = 'vlibras-script'
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
        script.onload = () => {
            if ((window as any).VLibras) {
                new (window as any).VLibras.Widget('https://vlibras.gov.br/app')
            }
        }
        document.body.appendChild(script)
    }, [])

    return null
}
