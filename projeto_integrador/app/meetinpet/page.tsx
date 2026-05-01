'use client';
import { useState } from "react";
import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomTitle } from "@/componentes/CustomTitle/CustomTitle";
import { CustomSection } from "@/componentes/CustomSection/CustomSection";
import { CustomSelect } from "@/componentes/CustomFiltroContainer/CustomFiltroContainer";


export default function meetinpet() {
    const [especie, setEspecie] = useState("")
    const [sexo, setSexo] = useState("")
    const [porte, setPorte] = useState("")
    const [idade, setIdade] = useState("")
    const [peso, setPeso] = useState("")


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
                    
                    <CustomSection>
                        <CustomSelect
                            id="filtroEspecie"
                            placeholder="Espécie"
                            value={especie}
                            onChange={setEspecie}
                            
                            options={[
                                { label: "Cachorro", value: "cachorro" },
                                { label: "Gato", value: "gato" },
                                { label: "Outros", value: "outros" }
                            ]}
                        />
                        <CustomSelect
                            id="filtroSexo"
                            placeholder="Sexo"
                            value={sexo}
                            onChange={setSexo}
                            
                            options={[
                                { label: "Macho", value: "macho" },
                                { label: "Fêmea", value: "femea" }
                            ]}
                        />
                        <CustomSelect
                            id="filtroPorte"
                            placeholder="Porte"
                            value={porte}
                            onChange={setPorte}
                            
                            options={[
                                { label: "Pequeno", value: "pequeno" },
                                { label: "Médio", value: "medio" },
                                { label: "Grande", value: "grande" }
                            ]}
                        />
                        <CustomSelect
                            id="filtroIdade"
                            placeholder="Idade"
                            value={idade}
                            onChange={setIdade}
                            
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
                            value={peso}
                            onChange={setPeso}
                            
                            options={[
                                { label: "Até 5kg", value: "ate 5kg" },
                                { label: "De 06 a 15kg", value: "de 06 a 15kg" },
                                { label: "Acima de 15kg", value: "acima de 15kg" }
                            ]}
                        />
                    </CustomSection>

                    {/* <!-- Falta os cards e o button --> */}
                    

                    {/* <!-- Rodapé --> */}
                    <CustomFooter />
        </>
    )
}