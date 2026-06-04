"use client";

import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import { CustomSection } from "@/componentes/CustomSection/CustomSection";
import { useEffect, useRef } from "react";
import { CustomSobreCard } from "@/componentes/CustomSobreCard/CustomSobreCard";

export default function SobreNos() {
    const router = useRouter();
    const [menuAberto, setMenuAberto] = useState(false);

    const pawTrailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        // GERADOR DE PATINHAS (PAW TRAIL)
        const pawTrail = pawTrailRef.current;
        
        const createPaw = () => {
            if (!pawTrail) return;

            const offsetX = Math.random() * pawTrail.clientWidth;
            const offsetY = Math.random() * pawTrail.clientHeight;

            // Patinha 1
            const paw1 = document.createElement("div");
            paw1.classList.add(style.paw);
            paw1.style.left = offsetX + "px";
            paw1.style.top = offsetY + "px";

            // Patinha 2
            const paw2 = document.createElement("div");
            paw2.classList.add(style.paw);
            paw2.style.left = (offsetX + 25) + "px";
            paw2.style.top = (offsetY + 60) + "px";

            // Patinha 3
            const paw3 = document.createElement("div");
            paw3.classList.add(style.paw);
            paw3.style.left = (offsetX - 25) + "px";
            paw3.style.top = (offsetY + 35) + "px";

            pawTrail.appendChild(paw1);
            pawTrail.appendChild(paw2);
            pawTrail.appendChild(paw3);

            setTimeout(() => {
                paw1.remove();
                paw2.remove();
                paw3.remove();
            }, 2500);
        };

        const pawInterval = setInterval(createPaw, 500);

        // LIMPEZA DOS INTERVALS E OBSERVER
        return () => {
            clearInterval(pawInterval);
        };
    }, []);

    const handleRedirect = () => router.push("/meetinpet");

    return (
        <>
            
            {/* Icones Acessibilidade */}
            <CustomAcessibilidade />

            {/* Cabeçalho Principal - Header */}
            <CustomHeader />

            {/* Navegação */}
            <CustomNavBar isMenuOpen={menuAberto} onOpenMenu={() => setMenuAberto(true)} />

            {/* Menu Lateral */}
            <CustomMenuLateral aberto={menuAberto} onCloseMenu={() => setMenuAberto(false)} />

            <main className={style.paginaSobre}>

                <CustomSection className={style.sobreContent}>
                    <div ref={pawTrailRef} id={style.pawTrail}></div>
                    
                    <CustomSobreCard
                        titulo="Sobre o DPBEA"
                        imagem="/DBEA.png"
                        alt="foto do abrigo"
                        onClick={handleRedirect}
                        showButton={false}
                        descricao={
                    <>
                        O Departamento de Bem-Estar Animal (DPBEA) é o setor responsável por promover ações
                        que garantem a proteção, cuidado e qualidade de vida dos animais do município de
                        Votorantim. Dentro do projeto, o DPBEA ganha uma plataforma moderna e totalmente
                        integrada ao sistema administrativo, permitindo mais transparência e eficiência na
                        divulgação de cães e gatos disponíveis para adoção.
                        <br />
                        Por meio dessa ferramenta, o departamento pode gerenciar em um só lugar todas as
                        informações dos animais: fotos, vídeos, histórico, perfil social, vacinação,
                        adestramento e status de adoção. Isso facilita o acompanhamento do processo, aumenta
                        a visibilidade dos animais e aproxima o DPBEA da comunidade, fortalecendo a adoção
                        responsável.<br />
                    </>
                    }
                />

                    <div className={style.activityRow}>
                        <article className={style.activityCard}>
                            <img src="/festadopijama.avif" alt="Pessoa com aumigo assistindo filme" className={style.activityImg} />
                            <div className={style.activityContent}>
                                <h2 className={style.activityTitle}>Festa do Pijama com um Aumigo</h2>
                                <p className={style.activityText}>
                                    A Festa do Pijama é uma ação especial que incentiva a adoção por meio da convivência.
                                    A proposta é que a pessoa possa levar um animal para passar uma noite em seu lar,
                                    vivendo um momento real de interação, carinho e companhia. Com ajuda da plataforma,
                                    o DPBEA organiza e monitora essa atividade de forma simples, ajudando você a
                                    escolher o companheiro ideal para a experiência.
                                </p>
                            </div>
                        </article>

                        <article className={style.activityCard}>
                            <img src="/fotopasseio.jpg" alt="Pessoa levando cachorro para passear" className={style.activityImg} />
                            <div className={style.activityContent}>
                                <h2 className={style.activityTitle}>Passear com um Aumigo</h2>
                                <p className={style.activityText}>
                                    O programa &quot;Passear com o Animal&quot; é voltado para quem deseja contribuir,
                                    mas não pode adotar no momento. A iniciativa permite que qualquer pessoa cadastrada
                                    realize caminhadas e passeios com os animais, oferecendo estímulo físico,
                                    socialização e momentos de alegria para todos.
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className={style.ctaFinal}>
                        <button className={style.ctaFinalBtn} onClick={handleRedirect}>
                            Conhecer os animais
                        </button>
                    </div>

                </CustomSection>

            </main>

            {/* Rodapé */}
            <CustomFooter />
        </>
    );
}