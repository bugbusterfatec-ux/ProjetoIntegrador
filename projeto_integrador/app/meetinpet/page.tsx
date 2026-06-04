'use client';

import { useState } from "react";
import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomTitle } from "@/componentes/CustomTitle/CustomTitle";
import { CustomSection } from "@/componentes/CustomSection/CustomSection";
import { ListaAnimais } from "@/componentes/ListaAnimais";
import style from "./page.module.css";


export default function MeetinpetPage() {
    const [menuAberto, setMenuAberto] = useState(false)


    return (
        <>
            {/* <!-- Icones Acessibilidade --> */}
                    <CustomAcessibilidade />
            
                    {/* <!-- Cabeçalho Principal - Header --> */}
                    <CustomHeader extraLogo="\logo_meetin.png" className="logoMeetin" />
            
                    {/* <!-- Navegação --> */}
                    <CustomNavBar isMenuOpen={menuAberto} onOpenMenu={() => setMenuAberto(true)} />

                    {/* <!-- Menu Lateral --> */}
                    <CustomMenuLateral aberto={menuAberto} onCloseMenu={() => setMenuAberto(false)} />

                    <main className={style.paginaMeetin}>
                        {/* <!-- Titulo --> */}
                        <CustomTitle title="ANIMAIS PARA ADOÇÃO" />

                        {/* <!-- Lista e filtros --> */}
                        <CustomSection>
                            <ListaAnimais />
                        </CustomSection>
                    </main>

                    {/* <!-- Rodapé --> */}
                    <CustomFooter />
        </>
    )
}