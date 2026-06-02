'use client'

import { useState } from "react";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomAcessoRapido } from "@/componentes/CustomAcessoRapido/CustomAcessoRapido";
import { CustomCarrossel } from "@/componentes/CustomCarrossel/CustomCarrossel";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomNoticias } from "@/componentes/CustomNoticias/CustomNoticias";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
        {/* <!-- Icones Acessibilidade --> */}
        <CustomAcessibilidade />

        {/* <!-- Cabeçalho Principal - Header --> */}
        <CustomHeader />

        {/* <!-- Navegação --> */}
        <CustomNavBar isMenuOpen={menuAberto} onOpenMenu={() => setMenuAberto(true)} />

        {/* <!-- Menu Lateral --> */}
        <CustomMenuLateral aberto={menuAberto} onCloseMenu={() => setMenuAberto(false)} />

        {/* <!-- Carrossel Principal --> */}
        <CustomCarrossel />

        {/* <!-- Acesso Rápido --> */}
        <CustomAcessoRapido />

        {/* <!-- Notícias --> */}
        <CustomNoticias />

        {/* <!-- Rodapé --> */}
        <CustomFooter />

    </>
  );
}
