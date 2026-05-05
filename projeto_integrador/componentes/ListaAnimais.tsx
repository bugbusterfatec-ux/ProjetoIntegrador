import { useState, useMemo } from "react"
import { CustomAnimalCard } from "./CustomCard/CustomAnimalCard"
import { CustomSelect } from "./CustomSelect/CustomSelect"
import style from "./CustomCard/CustomAnimalCard.module.css"

const listaInicial = [{
    nome: "Kairi",
    imagem: "./kairi.jpg",
    especie: "gato",
    sexo: "femea",
    porte: "pequeno",
    idade: "adulto",
    peso: "leve",
    raca: "Indef.",
    vacinacao: true
  },
  {
    nome: "Organela",
    imagem: "./organela.jpg",
    especie: "gato",
    sexo: "femea",
    porte: "pequeno",
    idade: "adulto",
    peso: "leve",
    raca: "Indef.",
    vacinacao: true
  },
  {
    nome: "Sunday",
    imagem: "./sunday.jpg",
    especie: "gato",
    sexo: "macho",
    porte: "medio",
    idade: "adulto",
    peso: "medio",
    raca: "Indef.",
    vacinacao: true
  },
  {
    nome: "Lineu",
    imagem: "./lineu.jpg",
    especie: "gato",
    sexo: "macho",
    porte: "pequeno",
    idade: "filhote",
    peso: "leve",
    raca: "Indef.",
    vacinacao: true
  },
  {
    nome: "Cora",
    imagem: "./cora.jpg",
    especie: "cachorro",
    sexo: "femea",
    porte: "pequeno",
    idade: "adulto",
    peso: "leve",
    raca: "Vira-lata",
    vacinacao: true
  },
  {
    nome: "Zafir",
    imagem: "./zafir.jpg",
    especie: "cachorro",
    sexo: "macho",
    porte: "grande",
    idade: "adulto",
    peso: "pesado",
    raca: "Vira-lata",
    vacinacao: true
  },
  {
    nome: "Oprah",
    imagem: "./oprah.jpg",
    especie: "cachorro",
    sexo: "femea",
    porte: "medio",
    idade: "idoso",
    peso: "medio",
    raca: "Vira-lata",
    vacinacao: true
  },
  {
    nome: "Silva",
    imagem: "./silva.jpg",
    especie: "cachorro",
    sexo: "macho",
    porte: "grande",
    idade: "adulto",
    peso: "pesado",
    raca: "Vira-lata",
    vacinacao: true
  }
]


export const ListaAnimais = () => {
    const [animais] = useState(listaInicial)

    const [filtros, setFiltros] = useState({
        especie: "",
        sexo: "",
        porte:"",
        idade:"",
        peso:""
    })

    const animaisFiltrados = useMemo(() => {
        return animais.filter((animal) => {
            return (
                (!filtros.especie || animal.especie === filtros.especie) &&
                (!filtros.sexo || animal.sexo === filtros.sexo) &&
                (!filtros.porte || animal.porte === filtros.porte) &&
                (!filtros.idade || animal.idade === filtros.idade) &&
                (!filtros.peso || animal.peso === filtros.peso)
            )
        })
    }, [filtros])

    return (
        <>
            {/* FILTROS */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                <CustomSelect
                    id="filtroEspecie"
                    placeholder="Espécie"
                    value={filtros.especie}
                    onChange={(v) => setFiltros(p => ({ ...p, especie: v }))}
                    options={[
                        { label: "Gato", value: "gato" },
                        { label: "Cachorro", value: "cachorro" }
                    ]}
                />

                <CustomSelect
                    id="filtroSexo"
                    placeholder="Sexo"
                    value={filtros.sexo}
                    onChange={(v) => setFiltros(p => ({ ...p, sexo: v }))}
                    options={[
                        { label: "Macho", value: "macho" },
                        { label: "Fêmea", value: "femea" }
                    ]}
                />

                <CustomSelect
                    id="filtroPorte"
                    placeholder="Porte"
                    value={filtros.porte}
                    onChange={(v) => setFiltros(p => ({ ...p, porte: v }))}
                    options={[
                        { label: "Pequeno", value: "pequeno" },
                        { label: "Médio", value: "medio" },
                        { label: "Grande", value: "grande" }
                    ]}
                />

                <CustomSelect
                    id="filtroIdade"
                    placeholder="Idade"
                    value={filtros.idade}
                    onChange={(v) => setFiltros(p => ({ ...p, idade: v }))}
                    options={[
                        { label: "Menor que 03 meses", value: "menor que 03 meses" },
                        { label: "03 meses a 05 meses", value: "3 meses a 05 meses" },
                        { label: "06 meses a 07 anos", value: "06 meses a 07 anos" },
                        { label: "Acima de 07 anos", value: "acima de 07 anos" }
                    ]}
                />

                <CustomSelect
                    id="filtroPeso"
                    placeholder="Peso"
                    value={filtros.peso}
                    onChange={(v) => setFiltros(p => ({ ...p, peso: v }))}
                    options={[
                        { label: "Até 5kg", value: "ate 5kg" },
                        { label: "De 06 a 15kg", value: "de 06 a 15kg" },
                        { label: "Acima de 15kg", value: "acima de 15kg" }
                    ]}
                />


                <button  onClick={() =>
                    setFiltros({
                        especie: "",
                        sexo: "",
                        porte: "",
                        idade: "",
                        peso: ""
                    })
                }>
                    Limpar
                </button>
            </div>

            {/* LISTA */}
            <section className={style.cards}>
                {animaisFiltrados.map((animal, index) => (
                    <CustomAnimalCard key={index} {...animal} />
                ))}
            </section>
        </>
    )
}