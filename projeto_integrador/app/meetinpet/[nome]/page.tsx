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
import animais from "@/data/animais.json";

const especieLabel: Record<string, string> = { gato: "Gato", cachorro: "Cão" };
const especieEmoji: Record<string, string> = { gato: "🐈", cachorro: "🐕" };
const sexoLabel: Record<string, string> = { femea: "Fêmea", macho: "Macho" };
const sexoEmoji: Record<string, string> = { femea: "♀", macho: "♂" };
const porteLabel: Record<string, string> = { pequeno: "Pequeno", medio: "Médio", grande: "Grande" };

export default function DetalhesPage({ params }: { params: Promise<{ nome: string }> }) {
    const { nome } = use(params);
    const router = useRouter();
    const [menuAberto, setMenuAberto] = useState(false);
    const [imagemPrincipalIndex, setImagemPrincipalIndex] = useState(0);

    const animal = animais.find(a => a.nome.toLowerCase() === nome.toLowerCase());

    if (!animal) {
        return (
            <>
                <CustomAcessibilidade />
                <CustomHeader />
                <CustomNavBar isMenuOpen={menuAberto} onOpenMenu={() => setMenuAberto(true)} />
                <CustomMenuLateral aberto={menuAberto} onCloseMenu={() => setMenuAberto(false)} />
                <CustomFiltroDaltonismo />
                <main style={{ padding: "4rem 2rem", textAlign: "center" }}>
                    <h1>Animal não encontrado</h1>
                    <p>Não encontramos nenhum animal com esse nome.</p>
                    <button onClick={() => router.push('/meetinpet')}>Ver todos os animais</button>
                </main>
                <CustomFooter />
            </>
        );
    }

    const fotos = animal.fotos.length > 0 ? animal.fotos : [animal.imagem];

    return (
        <>
            <CustomAcessibilidade />
            <CustomHeader />
            <CustomNavBar isMenuOpen={menuAberto} onOpenMenu={() => setMenuAberto(true)} />
            <CustomMenuLateral aberto={menuAberto} onCloseMenu={() => setMenuAberto(false)} />
            <CustomFiltroDaltonismo />

            <section className={styles.titleDetails}>
                <button onClick={() => router.back()} className={styles.backButton}>
                    &lt;&lt; Voltar
                </button>
                <h1>DETALHES</h1>
            </section>

            <main className={styles.detailsMain}>
                <section className={styles.detailsContainer}>

                    <div className={styles.heroSection}>
                        <article className={styles.galeria}>
                            <div className={styles.imagemPrincipal}>
                                <img src={fotos[imagemPrincipalIndex]} alt={`${animal.nome} - foto principal`} />
                            </div>

                            {fotos.length > 1 && (
                                <div className={styles.miniaturas}>
                                    {fotos.slice(0, 4).map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`${animal.nome} - foto ${index + 1}`}
                                            className={`${styles.thumb} ${imagemPrincipalIndex === index ? styles.ativa : ""}`}
                                            onClick={() => setImagemPrincipalIndex(index)}
                                        />
                                    ))}
                                </div>
                            )}
                        </article>

                        <article className={styles.info}>
                            <h2>Olá, eu sou {animal.nome}</h2>

                            <div className={styles.quickStats}>
                                <span className={styles.statBadge}>{especieEmoji[animal.especie]} {especieLabel[animal.especie]}</span>
                                <span className={styles.statBadge}>{sexoEmoji[animal.sexo]} {sexoLabel[animal.sexo]}</span>
                                <span className={styles.statBadge}>📏 {porteLabel[animal.porte]}</span>
                                <span className={styles.statBadge}>🎂 {animal.idadeDetalhada}</span>
                            </div>

                            <p className={styles.description}>{animal.descricao}</p>
                        </article>
                    </div>

                    <section className={styles.detailsCards}>
                        <article className={styles.cardDetails}>
                            <div className={styles.borderDetails}>
                                <h3>Perfil Social</h3>
                                <p>
                                    <strong>Espécie:</strong> {especieLabel[animal.especie]}<br />
                                    <strong>Sexo:</strong> {sexoLabel[animal.sexo]}<br />
                                    <strong>Porte:</strong> {porteLabel[animal.porte]}<br />
                                    <strong>Idade:</strong> {animal.idadeDetalhada}<br />
                                    <strong>Peso:</strong> {animal.pesoDetalhado}
                                </p>
                            </div>
                        </article>

                        <article className={styles.cardDetailsCentral}>
                            <div className={styles.borderDetailsCentral}>
                                <h3>Prontuário</h3>
                                <p>
                                    {animal.vacinacao ? "✓" : "✗"} Vacinado<br />
                                    {animal.vermifugado ? "✓" : "✗"} Vermifugado<br />
                                    {animal.castrado ? "✓" : "✗"} {animal.sexo === "femea" ? "Castrada" : "Castrado"}<br />
                                    {animal.microchipado ? "✓" : "✗"} Microchipado<br />
                                    {!animal.alergico ? "✓" : "✗"} Não alérgico<br />
                                    ✓ Saudável
                                </p>
                            </div>
                        </article>

                        <article className={styles.cardDetails}>
                            <div className={styles.borderDetails}>
                                <h3>Adestramento</h3>
                                <p>
                                    {animal.tempoAdestramento ? (
                                        <><strong>Tempo:</strong> {animal.tempoAdestramento}<br /><br /></>
                                    ) : null}
                                    {animal.truques.length > 0 ? (
                                        <>
                                            <strong>Truques:</strong><br />
                                            {animal.truques.map((t, i) => <span key={i}>• {t}<br /></span>)}
                                        </>
                                    ) : (
                                        <span>Ainda aprendendo! 🐾</span>
                                    )}
                                    {animal.adestrador ? (
                                        <><br /><small style={{ color: "#707070" }}>Profissional: {animal.adestrador}</small></>
                                    ) : null}
                                </p>
                            </div>
                        </article>
                    </section>

                    <div className={styles.cardBotoes}>
                        <button onClick={() => router.push('/sobrenos')}>Passear</button>
                        <button className={styles.btnAdotar}>Adotar</button>
                        <button onClick={() => router.push('/sobrenos')}>Festa do Pijama</button>
                    </div>

                </section>
            </main>

            <CustomFooter />
        </>
    );
}
