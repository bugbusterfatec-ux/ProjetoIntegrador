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

                    {/* Galeria de Imagens */}
                    <article className={styles.galeria}>
                        <div className={styles.miniaturas}>
                            {imagensDisponiveis.slice(0, 4).map((img, index) => (
                                <img 
                                    key={index}
                                    src={img} 
                                    alt={`${index + 1}`} 
                                    className={`${styles.thumb} ${imagemPrincipalIndex === index ? styles.ativa : ""}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>

                        <div className={styles.imagemPrincipal}>
                            <img id="img-principal" src={imagensDisponiveis[imagemPrincipalIndex]} alt="Imagem principal" />
                        </div>
                    </article>

                    {/* Info do Animal */}
                    <article className={styles.info}>
                        <h2>Olá, eu sou {animalNome}</h2>
                    </article>

                    {/* Cards de Detalhes */}
                    <section className={styles.detailsCards}>
                        <article className={styles.cardDetails}>
                            <div className={styles.borderDetails}>
                                <h3>PERFIL SOCIAL</h3>
                                <p>
                                    Espécie: Cão<br />
                                    Sexo: Fêmea<br />
                                    Porte: Pequeno<br />
                                    Idade: 2 anos<br />
                                    Peso: 6 kg
                                </p>
                            </div>
                        </article>

                        <article className={styles.cardDetailsCentral}>
                            <div className={styles.borderDetailsCentral}>
                                <h3>PRONTUÁRIO</h3>
                                <p>
                                    Vacinado<br />
                                    Vermifugado<br />
                                    Castrada<br />
                                    Microchipada<br />
                                    Não alérgico<br />
                                    Saudável
                                </p>
                            </div>
                        </article>

                        <article className={styles.cardDetails}>
                            <div className={styles.borderDetails}>
                                <h3>ADESTRAMENTO</h3>
                                <p>
                                    Tempo: 3 meses<br />
                                    Truques:<br />
                                    - Senta<br />
                                    - Deita<br />
                                    - Dá a patinha<br />
                                    <br />
                                    <small>Profissional: José Duarte</small>
                                </p>
                            </div>
                        </article>

                        <div className={styles.cardBotoes}>
                            <button onClick={() => router.push('/sobrenos')}>PASSEAR</button>
                            <button className={styles.btnAdotar}>ADOTAR</button>
                            <button onClick={() => router.push('/sobrenos')}>FESTA DO PIJAMA</button>
                        </div>
                    </section>

                </section>
            </main>

            {/* Rodapé */}
            <CustomFooter />
        </>
    );
}
