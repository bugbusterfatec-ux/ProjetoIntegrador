'use client'
import { useEffect } from 'react'

export const VLibrasWidget = () => {
    useEffect(() => {
        // Carrega o script do VLibras
        const script = document.createElement('script')
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            if (window.VLibras) {
                new window.VLibras.Widget('https://vlibras.gov.br/app')
            }
        }

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div vw-access-button="true" className="enabled">
            <div vw-plugin-wrapper="true">
                <div className="vw-plugin-top-wrapper"></div>
            </div>
        </div>
    )
}

// Type declaration for window.VLibras
declare global {
    interface Window {
        VLibras: {
            Widget: new (url: string) => void
        }
    }
}
