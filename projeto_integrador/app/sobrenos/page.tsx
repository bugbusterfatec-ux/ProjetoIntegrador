"use client";

import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomFiltroDaltonismo } from "@/componentes/CustomFiltroDaltonismo/CustomFiltroDaltonismo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function SobreNos() {
    const router = useRouter();
    const [menuAberto, setMenuAberto] = useState(false);

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

            {/* Filtro de Acessibilidade */}
            <CustomFiltroDaltonismo />

            <main>
                <section className={styles.sobreContent}>
                    <div id="paw-trail"></div>

                    <h1 className={styles.scrollAnimRight}>Sobre o DPBEA</h1>
                    <br />
                    <article className={styles.sobre}>
                        <img 
                            src="/DBEA.png" 
                            alt="foto do abrigo" 
                            className={`${styles.blob} ${styles.scrollAnimLeft}`}
                        />
                        <br />
                        <p className={styles.scrollAnimRight}>
                            O Departamento de Bem-Estar Animal (DPBEA) é o setor responsável por promover ações que garantem a proteção, cuidado e qualidade de vida dos animais do município de Votorantim. Dentro do projeto, o DPBEA ganha uma plataforma moderna e totalmente integrada ao sistema administrativo, permitindo mais transparência e eficiência na divulgação de cães e gatos disponíveis para adoção.
                            <br /><br />
                            Por meio dessa ferramenta, o departamento pode gerenciar em um só lugar todas as informações dos animais: fotos, vídeos, histórico, perfil social, vacinação, adestramento e status de adoção. Isso facilita o acompanhamento do processo, aumenta a visibilidade dos animais e aproxima o DPBEA da comunidade, fortalecendo a adoção responsável. 
                            <button className={styles.btnConhecer} onClick={() => router.push('/meetinpet')}>Conhecer os animais</button>
                        </p>
                    </article>

                    <h1 className={styles.scrollAnimRight}>Como fazer uma festa de pijama com um Aumigo</h1>
                    <br />
                    <article className={styles.sobre}>
                        <img 
                            src="/festadopijama.avif" 
                            alt="foto de uma pessoa com um aumigo assistindo filme" 
                            className={`${styles.blob} ${styles.scrollAnimLeft}`}
                        />
                        <br />
                        <p className={styles.scrollAnimRight}>
                            A Festa do Pijama é uma ação especial que incentiva a adoção por meio da convivência. A proposta é que a pessoa possa levar um animal para passar uma noite em seu lar, vivendo um momento real de interação, carinho e companhia.
                            <br /><br />
                            Com ajuda da plataforma, o DPBEA pode organizar e monitorar essa atividade de forma mais simples: cada animal tem um card completo com características, comportamento, perfil social e histórico, ajudando o participante a escolher um companheiro ideal para a experiência. Essa vivência permite ao adotante conhecer melhor o animal, avaliar sua adaptação ao ambiente e, muitas vezes, perceber que ali pode nascer uma nova família.
                            <button className={styles.btnConhecer} onClick={() => router.push('/meetinpet')}>Conhecer os animais</button>
                        </p>
                    </article>

                    <h1 className={styles.scrollAnimRight}>Como levar um Aumigo para passear</h1>
                    <br />
                    <article className={styles.sobre}>
                        <img 
                            src="/fotopasseio.jpg" 
                            alt="foto de uma pessoa levando um cachorro passear" 
                            className={`${styles.blob} ${styles.scrollAnimLeft}`}
                        />
                        <br />
                        <p className={styles.scrollAnimRight}>
                            O programa &quot;Passear com o Animal&quot; é voltado para quem deseja contribuir, mas não pode adotar no momento. A iniciativa permite que qualquer pessoa cadastrada realize caminhadas e passeios com os animais, oferecendo estímulo físico, socialização e momentos de alegria.
                            <br /><br />
                            A plataforma facilita esse processo ao apresentar cada animal com fotos, vídeos, comportamento e necessidades específicas. Assim, o usuário pode escolher um companheiro compatível com seu ritmo e disponibilidade. Além de melhorar a qualidade de vida dos animais, os passeios ajudam na preparação emocional deles para futuras adoções, tornando-os mais confiantes e sociáveis.
                            <button className={styles.btnConhecer} onClick={() => router.push('/meetinpet')}>Conhecer os animais</button>
                        </p>
                    </article>
                </section>
                <br />
                <br />
            </main>

            {/* Rodapé */}
            <CustomFooter />
        </>
    );
}