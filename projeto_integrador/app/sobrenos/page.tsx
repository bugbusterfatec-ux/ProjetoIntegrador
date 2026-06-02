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

            <main>
                
                <CustomSection className={style.sobreContent}>
                    <div ref={pawTrailRef} id={style.pawTrail}></div>
                    
                    <CustomSobreCard
                        titulo="Sobre o DPBEA"
                        imagem="/DBEA.png"
                        alt="foto do abrigo"
                        onClick={handleRedirect}
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

                <CustomSobreCard
                    titulo="Como fazer uma festa de pijama com um Aumigo"
                    imagem="/festadopijama.avif"
                    alt="foto de uma pessoa com um aumigo assistindo filme"
                    onClick={handleRedirect}
                    descricao={
                    <>
                        A Festa do Pijama é uma ação especial que incentiva a adoção por meio da convivência.
                        A proposta é que a pessoa possa levar um animal para passar uma noite em seu lar,
                        vivendo um momento real de interação, carinho e companhia.
                        <br />
                        Com ajuda da plataforma, o DPBEA pode organizar e monitorar essa atividade de forma
                        mais simples: cada animal tem um card completo com características, comportamento,
                        perfil social e histórico, ajudando o participante a escolher um companheiro ideal
                        para a experiência. Essa vivência permite ao adotante conhecer melhor o animal,
                        avaliar sua adaptação ao ambiente e, muitas vezes, perceber que ali pode nascer uma
                        nova família.<br />
                    </>
                    }
                />

                <CustomSobreCard
                    titulo="Como levar um Aumigo para passear"
                    imagem="/fotopasseio.jpg"
                    alt="foto de uma pessoa levando um cachorro passear"
                    onClick={handleRedirect}
                    descricao={
                    <>
                        O programa &quot;Passear com o Animal&quot; é voltado para quem deseja contribuir,
                        mas não pode adotar no momento. A iniciativa permite que qualquer pessoa cadastrada
                        realize caminhadas e passeios com os animais, oferecendo estímulo físico,
                        socialização e momentos de alegria.
                        <br />
                        A plataforma facilita esse processo ao apresentar cada animal com fotos, vídeos,
                        comportamento e necessidades específicas. Assim, o usuário pode escolher um
                        companheiro compatível com seu ritmo e disponibilidade. Além de melhorar a qualidade
                        de vida dos animais, os passeios ajudam na preparação emocional deles para futuras
                        adoções, tornando-os mais confiantes e sociáveis.
                    </>
                    }
                />       

                </CustomSection>
                
                <br />
                <br />
            </main>

            {/* Rodapé */}
            <CustomFooter />
        </>
    );
}