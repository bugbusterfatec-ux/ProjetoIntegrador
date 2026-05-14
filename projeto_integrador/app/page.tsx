import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomAcessoRapido } from "@/componentes/CustomAcessoRapido/CustomAcessoRapido";
import { CustomCarrossel } from "@/componentes/CustomCarrossel/CustomCarrossel";
import { CustomFiltroDaltonismo } from "@/componentes/CustomFiltroDaltonismo/CustomFiltroDaltonismo";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomNoticias } from "@/componentes/CustomNoticias/CustomNoticias";


export default function Home() {
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

        {/* <!-- Carrossel Principal --> */}
        <CustomCarrossel />

        {/* <!-- Acesso Rápido --> */}
        <CustomAcessoRapido />

        {/* <!-- Filtro de Acessibilidade --> */}
        <CustomFiltroDaltonismo />

        {/* <!-- Notícias --> */}
        <CustomNoticias />

        {/* <!-- Rodapé --> */}
        <CustomFooter />

    </>
  );
}
