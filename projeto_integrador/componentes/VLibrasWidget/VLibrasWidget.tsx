'use client'
import { useEffect, useRef } from 'react'

export const VLibrasWidget = () => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!wrapperRef.current) return

        const mainDiv = wrapperRef.current.querySelector('.enabled') as HTMLElement
        const buttonDiv = wrapperRef.current.querySelector('.active') as HTMLElement
        const pluginDiv = wrapperRef.current.querySelector('[data-plugin-wrapper]') as HTMLElement

        if (mainDiv) {
            mainDiv.setAttribute('vw', '')
            mainDiv.classList.add('enabled')
        }

        if (buttonDiv) {
            buttonDiv.setAttribute('vw-access-button', '')
            buttonDiv.classList.add('active')
        }

        if (pluginDiv) {
            pluginDiv.setAttribute('vw-plugin-wrapper', '')
        }

        const loadVLibras = () => {
            if ((window as any).VLibras) {
                new (window as any).VLibras.Widget('https://vlibras.gov.br/app')
            }
        }

        const script = document.createElement('script')
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
        script.async = true
        script.onload = loadVLibras
        document.body.appendChild(script)

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="vlibras-wrapper" ref={wrapperRef}>
            <div className="enabled">
                <div className="active"></div>
                <div data-plugin-wrapper="">
                    <div className="vw-plugin-top-wrapper"></div>
                </div>
            </div>
        </div>
    )
}
