'use client';
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomFiltroDaltonismo } from "@/componentes/CustomFiltroDaltonismo/CustomFiltroDaltonismo";
import styles from "./page.module.css";

const imagensDisponiveis = [
    "/sakura1.jpg",
    "/sakura2.jpg",
    "/sakura3.jpg",
    "/sakura4.jpg",
    "/sakura5.jpg"
];

export default function DetalhesPage({ params }: { params: Promise<{ nome: string }> }) {
    const { nome } = use(params);
    const router = useRouter();
    const [menuAberto, setMenuAberto] = useState(false);
    const [imagemPrincipalIndex, setImagemPrincipalIndex] = useState(4);

    // Dados exemplo - em produção viria de uma API ou banco de dados
    const animalNome = "Sakura";

    const handleThumbnailClick = (index: number) => {
        setImagemPrincipalIndex(index);
    };

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

            {/* Título com Voltar */}
            <section className={styles.titleDetails}>
                <button 
                    onClick={() => router.back()}
                    className={styles.backButton}
                >
                    &lt;&lt; Voltar
                </button>
                <h1>DETALHES</h1>
            </section>

            <main className={styles.detailsMain}>
                <section className={styles.detailsContainer}>

                    {/* Hero Section - Gallery + Info */}
                    <div className={styles.heroSection}>
                        {/* Galeria de Imagens */}
                        <article className={styles.galeria}>
                            <div className={styles.imagemPrincipal}>
                                <img src={imagensDisponiveis[imagemPrincipalIndex]} alt={`${animalNome} - foto principal`} />
                            </div>

                            <div className={styles.miniaturas}>
                                {imagensDisponiveis.slice(0, 4).map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${animalNome} - foto ${index + 1}`}
                                        className={`${styles.thumb} ${imagemPrincipalIndex === index ? styles.ativa : ""}`}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                            </div>
                        </article>

                        {/* Info do Animal */}
                        <article className={styles.info}>
                            <h2>Olá, eu sou {animalNome}</h2>

                            <div className={styles.quickStats}>
                                <span className={styles.statBadge}>🐕 Cão</span>
                                <span className={styles.statBadge}>♀ Fêmea</span>
                                <span className={styles.statBadge}>📏 Pequeno</span>
                                <span className={styles.statBadge}>🎂 2 anos</span>
                            </div>

                            <p className={styles.description}>
                                Uma companheira doce e carinhosa, perfeita para famílias que buscam um pet afetuoso e brincalhão.
                                Adora passeios e está pronta para dar muito amor ao seu novo lar.
                            </p>
                        </article>
                    </div>

                    {/* Cards de Detalhes */}
                    <section className={styles.detailsCards}>
                        <article className={styles.cardDetails}>
                            <div className={styles.borderDetails}>
                                <h3>Perfil Social</h3>
                                <p>
                                    <strong>Espécie:</strong> Cão<br />
                                    <strong>Sexo:</strong> Fêmea<br />
                                    <strong>Porte:</strong> Pequeno<br />
                                    <strong>Idade:</strong> 2 anos<br />
                                    <strong>Peso:</strong> 6 kg
                                </p>
                            </div>
                        </article>

                        <article className={styles.cardDetailsCentral}>
                            <div className={styles.borderDetailsCentral}>
                                <h3>Prontuário</h3>
                                <p>
                                    ✓ Vacinado<br />
                                    ✓ Vermifugado<br />
                                    ✓ Castrada<br />
                                    ✓ Microchipada<br />
                                    ✓ Não alérgico<br />
                                    ✓ Saudável
                                </p>
                            </div>
                        </article>

                        <article className={styles.cardDetails}>
                            <div className={styles.borderDetails}>
                                <h3>Adestramento</h3>
                                <p>
                                    <strong>Tempo:</strong> 3 meses<br /><br />
                                    <strong>Truques:</strong><br />
                                    • Senta<br />
                                    • Deita<br />
                                    • Dá a patinha<br />
                                    <br />
                                    <small style={{ color: "#707070" }}>Profissional: José Duarte</small>
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* Botões de Ação */}
                    <div className={styles.cardBotoes}>
                        <button onClick={() => router.push('/sobrenos')}>Passear</button>
                        <button className={styles.btnAdotar}>Adotar</button>
                        <button onClick={() => router.push('/sobrenos')}>Festa do Pijama</button>
                    </div>

                </section>
            </main>

            {/* Rodapé */}
            <CustomFooter />
        </>
    );
}
