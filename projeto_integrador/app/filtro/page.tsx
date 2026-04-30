import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";




export default function filtro() {
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



                    {/* <!-- Rodapé --> */}
                    <CustomFooter />
        </>
    )
}