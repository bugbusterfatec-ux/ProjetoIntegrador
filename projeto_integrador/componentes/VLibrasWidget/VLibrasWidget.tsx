'use client'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        if (document.getElementById('vlibras-plugin')) return

        const script = document.createElement('script')
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
        script.async = true
        script.id = 'vlibras-plugin'

        script.onload = () => {
            new (window as any).VLibras.Widget('https://vlibras.gov.br/app')
        }

        document.body.appendChild(script)
    }, [])

    return (
        <div dangerouslySetInnerHTML={{
            __html: '<div vw class="enabled"><div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div></div>'
        }} />
    )
}
