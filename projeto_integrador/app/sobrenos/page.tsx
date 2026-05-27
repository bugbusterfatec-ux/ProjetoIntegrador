"use client";

import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { CustomSection } from "@/componentes/CustomSection/CustomSection";
import { CustomButton } from "@/componentes/CustomButton/CustomButton";
import { useEffect, useRef } from "react";

export default function SobreNos() {
    const router = useRouter();
    const [menuAberto, setMenuAberto] = useState(false);

    const pawTrailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // EFEITO FLUTUAR (BLOBS IMAGENS) ---
        
        const blobs = document.querySelectorAll(`.${styles.blob}`);
        let xBlob = 0;
        const blobInterval = setInterval(() => {
            xBlob += 0.03;
            blobs.forEach((img) => {
                if (img.classList.contains('appear')) {
                    (img as HTMLElement).style.transform = `translateY(${Math.sin(xBlob) * 6}px)`;
                }
            });
        }, 20);

        // INTERSECTION OBSERVER (SCROLL ANIMATION)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se o bloco <article> entrou 30% na tela...
                if (entry.isIntersecting) {
                    const parent = entry.target;

                    // Busca os elementos animáveis especificamente dentro DESTE article
                    const animElements = parent.querySelectorAll(`.${styles.scrollAnimRight}, .${styles.scrollAnimLeft}`);

                    animElements.forEach((el, index) => {
                        (el as HTMLElement).style.transitionDelay = `${index * 0.25}s`; // Atraso suave entre foto e texto
                        el.classList.add('appear');
                    });
                    
                    // Para de observar este article específico já que ele já animou
                    observer.unobserve(parent);
                }
            });
        }, { 
            threshold: 0.3 // 30% do bloco precisa estar visível para disparar
        });

        // 💡 AGORA OBSERVAMOS OS BLOCOS <article className={styles.sobre}>
        const articles = document.querySelectorAll(`.${styles.sobre}`);
        articles.forEach(article => observer.observe(article));

        // EFEITO FLUTUAR (BOTÃO CONHECER)
        const botoes = document.querySelectorAll(`.${styles.btnConhecer}`);
        let xBtn = 0;
        const btnInterval = setInterval(() => {
            xBtn += 0.02;
            botoes.forEach((button) => {
                (button as HTMLElement).style.transform = `translateY(${Math.sin(xBtn) * 8}px)`;
            });
        }, 20);

        // GERADOR DE PATINHAS (PAW TRAIL)
        const pawTrail = pawTrailRef.current;
        
        const createPaw = () => {
            if (!pawTrail) return;

            const offsetX = Math.random() * pawTrail.clientWidth;
            const offsetY = Math.random() * pawTrail.clientHeight;

            // Patinha 1
            const paw1 = document.createElement("div");
            paw1.classList.add(styles.paw);
            paw1.style.left = offsetX + "px";
            paw1.style.top = offsetY + "px";

            // Patinha 2
            const paw2 = document.createElement("div");
            paw2.classList.add(styles.paw);
            paw2.style.left = (offsetX + 25) + "px";
            paw2.style.top = (offsetY + 60) + "px";

            // Patinha 3
            const paw3 = document.createElement("div");
            paw3.classList.add(styles.paw);
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
            clearInterval(blobInterval);
            clearInterval(btnInterval);
            clearInterval(pawInterval);
            observer.disconnect();
        };
    }, []);



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
                
                <CustomSection className={styles.sobreContent}>
                    <div ref={pawTrailRef} id={styles.pawTrail}></div>
                    
                    <article className={styles.sobre}>
                        <h1 className={`${styles.sobreContentH1} ${styles.scrollAnimRight}`}>Sobre o DPBEA</h1>
                        <br />
                        <img 
                            src="/DBEA.png" 
                            alt="foto do abrigo" 
                            className={`${styles.blob} ${styles.scrollAnimLeft} ${styles.sobreContentImg}`}
                        />
                        <br />
                        <p className={`${styles.scrollAnimRight} ${styles.sobreContentP}`}>
                            O Departamento de Bem-Estar Animal (DPBEA) é o setor responsável por promover ações que garantem a proteção, cuidado e qualidade de vida dos animais do município de Votorantim. Dentro do projeto, o DPBEA ganha uma plataforma moderna e totalmente integrada ao sistema administrativo, permitindo mais transparência e eficiência na divulgação de cães e gatos disponíveis para adoção.
                            <br /><br />
                            Por meio dessa ferramenta, o departamento pode gerenciar em um só lugar todas as informações dos animais: fotos, vídeos, histórico, perfil social, vacinação, adestramento e status de adoção. Isso facilita o acompanhamento do processo, aumenta a visibilidade dos animais e aproxima o DPBEA da comunidade, fortalecendo a adoção responsável. 
                            
                            <CustomButton label="Conhecer os animais" className={styles.btnConhecer} onClick={() => router.push('/meetinpet')}></CustomButton>
                        </p>
                    </article>

                    
                    
                    <article className={styles.sobre}>
                        <h1 className={`${styles.sobreContentH1} ${styles.scrollAnimRight}`}>Como fazer uma festa de pijama com um Aumigo</h1>
                        <br />
                        <img 
                            src="/festadopijama.avif" 
                            alt="foto de uma pessoa com um aumigo assistindo filme" 
                            className={`${styles.blob} ${styles.scrollAnimLeft} ${styles.sobreContentImg}`}
                        />
                        <br />
                        <p className={`${styles.scrollAnimRight} ${styles.sobreContentP}`}>
                            A Festa do Pijama é uma ação especial que incentiva a adoção por meio da convivência. A proposta é que a pessoa possa levar um animal para passar uma noite em seu lar, vivendo um momento real de interação, carinho e companhia.
                            <br /><br />
                            Com ajuda da plataforma, o DPBEA pode organizar e monitorar essa atividade de forma mais simples: cada animal tem um card completo com características, comportamento, perfil social e histórico, ajudando o participante a escolher um companheiro ideal para a experiência. Essa vivência permite ao adotante conhecer melhor o animal, avaliar sua adaptação ao ambiente e, muitas vezes, perceber que ali pode nascer uma nova família.

                            <CustomButton label="Conhecer os animais" className={styles.btnConhecer} onClick={() => router.push('/meetinpet')}></CustomButton>
                        </p>
                    </article>

                    
                    
                    <article className={styles.sobre}>
                        <h1 className={`${styles.sobreContentH1} ${styles.scrollAnimRight}`}>Como levar um Aumigo para passear</h1>
                        <br />
                        <img 
                            src="/fotopasseio.jpg" 
                            alt="foto de uma pessoa levando um cachorro passear" 
                            className={`${styles.blob} ${styles.scrollAnimLeft} ${styles.sobreContentImg}`}
                        />
                        <br />
                        <p className={`${styles.scrollAnimRight} ${styles.sobreContentP}`}>
                            O programa &quot;Passear com o Animal&quot; é voltado para quem deseja contribuir, mas não pode adotar no momento. A iniciativa permite que qualquer pessoa cadastrada realize caminhadas e passeios com os animais, oferecendo estímulo físico, socialização e momentos de alegria.
                            <br /><br />
                            A plataforma facilita esse processo ao apresentar cada animal com fotos, vídeos, comportamento e necessidades específicas. Assim, o usuário pode escolher um companheiro compatível com seu ritmo e disponibilidade. Além de melhorar a qualidade de vida dos animais, os passeios ajudam na preparação emocional deles para futuras adoções, tornando-os mais confiantes e sociáveis.

                            <CustomButton label="Conhecer os animais" className={styles.btnConhecer} onClick={() => router.push('/meetinpet')}></CustomButton>
                        </p>
                    </article>


                </CustomSection>
                
                <br />
                <br />
            </main>

            {/* Rodapé */}
            <CustomFooter />
        </>
    );
}