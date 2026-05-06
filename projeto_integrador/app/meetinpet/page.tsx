'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomTitle } from "@/componentes/CustomTitle/CustomTitle";
import { CustomSection } from "@/componentes/CustomSection/CustomSection";
import { CustomSelect } from "@/componentes/CustomFiltroContainer/CustomFiltroContainer";
import styles from "./page.module.css";

type Animal = {
    nome: string;
    especie: "gato" | "cachorro" | "outros";
    sexo: "macho" | "femea";
    porte: "pequeno" | "medio" | "grande";
    idade: "menor que 03 meses" | "3 meses a 05 meses" | "06 meses a 07 anos" | "acima de 07 anos";
    peso: "ate 5kg" | "de 06 a 15kg" | "acima de 15kg";
    vacinacao: "Sim" | "Nao";
    raca: string;
    imagem: string;
};

const animais: Animal[] = [
    {
        nome: "Kairi",
        especie: "gato",
        sexo: "femea",
        porte: "pequeno",
        idade: "06 meses a 07 anos",
        peso: "ate 5kg",
        vacinacao: "Sim",
        raca: "Indef.",
        imagem: "/kairi.jpg",
    },
    {
        nome: "Organela",
        especie: "gato",
        sexo: "femea",
        porte: "pequeno",
        idade: "06 meses a 07 anos",
        peso: "ate 5kg",
        vacinacao: "Sim",
        raca: "Indef.",
        imagem: "/organela.jpg",
    },
    {
        nome: "Sunday",
        especie: "gato",
        sexo: "macho",
        porte: "medio",
        idade: "06 meses a 07 anos",
        peso: "de 06 a 15kg",
        vacinacao: "Sim",
        raca: "Indef.",
        imagem: "/sunday.jpg",
    },
    {
        nome: "Lineu",
        especie: "gato",
        sexo: "macho",
        porte: "pequeno",
        idade: "3 meses a 05 meses",
        peso: "ate 5kg",
        vacinacao: "Sim",
        raca: "Indef.",
        imagem: "/lineu.jpg",
    },
    {
        nome: "Oprah",
        especie: "cachorro",
        sexo: "femea",
        porte: "medio",
        idade: "06 meses a 07 anos",
        peso: "de 06 a 15kg",
        vacinacao: "Sim",
        raca: "SRD",
        imagem: "/oprah.jpg",
    },
    {
        nome: "Silva",
        especie: "cachorro",
        sexo: "macho",
        porte: "grande",
        idade: "acima de 07 anos",
        peso: "acima de 15kg",
        vacinacao: "Sim",
        raca: "SRD",
        imagem: "/silva.jpg",
    },
    {
        nome: "Zafir",
        especie: "cachorro",
        sexo: "macho",
        porte: "grande",
        idade: "06 meses a 07 anos",
        peso: "acima de 15kg",
        vacinacao: "Sim",
        raca: "SRD",
        imagem: "/zafir.jpg",
    },
    {
        nome: "Cora",
        especie: "cachorro",
        sexo: "femea",
        porte: "pequeno",
        idade: "menor que 03 meses",
        peso: "ate 5kg",
        vacinacao: "Sim",
        raca: "SRD",
        imagem: "/cora.jpg",
    },
];


export default function MeetinpetPage() {
    const router = useRouter()
    const [especie, setEspecie] = useState("")
    const [sexo, setSexo] = useState("")
    const [porte, setPorte] = useState("")
    const [idade, setIdade] = useState("")
    const [peso, setPeso] = useState("")

    const animaisFiltrados = animais.filter((animal) => {
        const especieOk = !especie || animal.especie === especie;
        const sexoOk = !sexo || animal.sexo === sexo;
        const porteOk = !porte || animal.porte === porte;
        const idadeOk = !idade || animal.idade === idade;
        const pesoOk = !peso || animal.peso === peso;

        return especieOk && sexoOk && porteOk && idadeOk && pesoOk;
    });


    return (
        <>
            {/* <!-- Icones Acessibilidade --> */}
                    <CustomAcessibilidade />
            
                    {/* <!-- Cabeçalho Principal - Header --> */}
                    <CustomHeader />
            
                    {/* <!-- Navegação --> */}
                    <CustomNavBar />
            
                    {/* <!-- Menu Lateral --> */}
                    <CustomMenuLateral />

                    {/* <!-- Titulo --> */}
                    <CustomTitle title="ANIMAIS PARA ADOÇÃO"></CustomTitle>

                    <section className={styles.cardsSection}>
                        {animaisFiltrados.length > 0 ? (
                            <div className={styles.cardsGrid}>
                                {animaisFiltrados.map((animal) => (
                                    <article key={animal.nome} className={styles.card}>
                                        <Image
                                            src={animal.imagem}
                                            alt={animal.nome}
                                            width={360}
                                            height={230}
                                            className={styles.cardImage}
                                        />
                                        <h2>{animal.nome}</h2>
                                        <p>Raça: {animal.raca}</p>
                                        <p>Sexo: {animal.sexo === "femea" ? "Fêmea" : "Macho"}</p>
                                        <p>Vacinação: {animal.vacinacao}</p>
                                        <button 
                                            type="button" 
                                            className={styles.cardButton}
                                            onClick={() => router.push(`/meetinpet/${animal.nome.toLowerCase()}`)}
                                        >
                                            Ver Mais
                                        </button>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.emptyState}>
                                Nenhum animal encontrado para os filtros selecionados.
                            </div>
                        )}
                    </section>

                    {/* <!-- Rodapé --> */}
                    <CustomFooter /> 
        </>
    )
}