'use client';
import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomTitle } from "@/componentes/CustomTitle/CustomTitle";
import { CustomSection } from "@/componentes/CustomSection/CustomSection";
import { ListaAnimais } from "@/componentes/ListaAnimais";




export default function meetinpet() {
    


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

                    {/* <!-- Falta os cards e o button --> */}

                    <CustomSection>
                        <ListaAnimais />
                    </CustomSection>
                    
                    


                    

                    {/* <!-- Rodapé --> */}
                    <CustomFooter /> 
        </>
    )
}