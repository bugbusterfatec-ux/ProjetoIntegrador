import { useState, useMemo, useEffect } from "react"
import { CustomAnimalCard } from "./CustomCard/CustomAnimalCard"
import { CustomSelect } from "./CustomSelect/CustomSelect"
import { CustomButton } from "@/componentes/CustomButton/CustomButton";
import style from "./CustomCard/CustomAnimalCard.module.css"
import styleBtn from "@/componentes/CustomButton/CustomButton.module.css"
import listaInicial from "@/data/animais.json"

type Animal = {
    nome: string
    imagem: string
    especie: string
    sexo: string
    porte: string
    idade: string
    peso: string
    raca: string
    vacinacao: boolean
    ambiente: string
    exercicio: string
    experiencia: string
    personalidade: string
}

type QuizRespostas = {
    especie: string
    porte: string
    ambiente: string
    exercicio: string
    experiencia: string
    personalidade: string
}

const nivelExperiencia: Record<string, number> = {
    iniciante: 1,
    intermediario: 2,
    experiente: 3,
}

function calcularScore(animal: Animal, quiz: QuizRespostas): number {
    let score = 0
    if (animal.porte === quiz.porte) score += 1
    if (animal.ambiente === "ambos" || animal.ambiente === quiz.ambiente) score += 1
    if (animal.exercicio === quiz.exercicio) score += 1
    if (animal.personalidade === quiz.personalidade) score += 1
    const nivelAnimal = nivelExperiencia[animal.experiencia] ?? 1
    const nivelUsuario = nivelExperiencia[quiz.experiencia] ?? 1
    if (nivelAnimal <= nivelUsuario) score += 1
    return score
}

export const ListaAnimais = () => {
    const animais = listaInicial as Animal[]

    const [filtros, setFiltros] = useState({
        especie: "",
        sexo: "",
        porte: "",
        idade: "",
        peso: ""
    })

    const [quizRespostas, setQuizRespostas] = useState<QuizRespostas | null>(null)

    useEffect(() => {
        const salvo = localStorage.getItem("quizRespostas")
        if (salvo) {
            try {
                setQuizRespostas(JSON.parse(salvo))
            } catch {
                // ignorar JSON inválido
            }
        }
    }, [])

    const limparRecomendacoes = () => {
        localStorage.removeItem("quizRespostas")
        setQuizRespostas(null)
    }

    const animaisRecomendados = useMemo(() => {
        if (!quizRespostas) return []
        const especieMapeada = quizRespostas.especie === "dog" ? "cachorro" : "gato"
        return animais
            .filter((a) => a.especie === especieMapeada)
            .map((a) => ({ animal: a, score: calcularScore(a, quizRespostas) }))
            .filter(({ score }) => score >= 2)
            .sort((a, b) => b.score - a.score)
            .map(({ animal }) => animal)
    }, [quizRespostas, animais])

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
    }, [filtros, animais])

    return (
        <>
            {/* RECOMENDAÇÕES DO QUIZ */}
            {quizRespostas && (
                <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <h2 style={{ margin: 0 }}>Recomendado para você 🐾</h2>
                        <button
                            type="button"
                            onClick={limparRecomendacoes}
                            style={{
                                background: "none",
                                border: "1px solid #aaa",
                                borderRadius: "6px",
                                padding: "4px 10px",
                                cursor: "pointer",
                                fontSize: "0.85rem",
                                color: "#666"
                            }}
                        >
                            Limpar recomendações
                        </button>
                    </div>

                    {animaisRecomendados.length === 0 ? (
                        <p>Nenhum animal encontrado para o seu perfil. Confira todos abaixo!</p>
                    ) : (
                        <section className={style.cards}>
                            {animaisRecomendados.map((animal, index) => (
                                <CustomAnimalCard key={`rec-${index}`} {...animal} />
                            ))}
                        </section>
                    )}

                    <hr style={{ margin: "2rem 0" }} />
                    <h2>Todos os animais</h2>
                </div>
            )}

            {/* FILTROS MANUAIS */}
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
            </div>

            {/* LISTA COMPLETA */}
            <section className={style.cards}>
                {animaisFiltrados.length === 0 ? (
                    <p>Nenhum animal encontrado!</p>
                ) : (
                    animaisFiltrados.map((animal, index) => (
                        <CustomAnimalCard key={index} {...animal} />
                    ))
                )}
                <div className={styleBtn.verTodos}>
                    <CustomButton
                        label="Clique para exibir todos"
                        className={styleBtn.verTodosBtn}
                        onClick={() =>
                            setFiltros({
                                especie: "",
                                sexo: "",
                                porte: "",
                                idade: "",
                                peso: ""
                            })
                        } />
                </div>
            </section>
        </>
    )
}
