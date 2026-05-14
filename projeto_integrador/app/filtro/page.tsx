import { CustomHeader } from "@/componentes/CustomHeader/CustomHeader";
import { CustomAcessibilidade } from "@/componentes/CustomAcessibilidade/CustomAcessibilidade";
import { CustomMenuLateral } from "@/componentes/CustomMenuLateral/CustomMenuLateral";
import { CustomNavBar } from "@/componentes/CustomNavBar/CustomNavBar";
import { CustomFooter } from "@/componentes/CustomFooter/CustomFooter";
import { CustomTitle } from "@/componentes/CustomTitle/CustomTitle";
import { CustomContainer } from "@/componentes/CustomContainer/CustomContainer";
import { CustomArticle } from "@/componentes/CustomArticle/CustomArticle";
import { CustomButton } from "@/componentes/CustomButton/CustomButton";




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

                    {/* <!-- Titulo --> */}
                    <CustomTitle 
                        title="SOBRE NOSSO CANIL"> 
                    </CustomTitle>

                    <CustomContainer>
                        <CustomArticle
                            title="PASSEIO DIVERTIDO"
                            texto="Se você tem tempo sobrando? Que tal levar um AUmigo do Canil para passear? Basta você escolher um AUmigo, fazer seu cadastro e aguardar um humano te mandar mensagem para diversão começar."                            
                        >
                            {/* Falta ver como puxar o button aqui dentro */}
                            {/* Falta criar um componente para imagem */}
                            {/* Ajeitar o CSS */}
                        </CustomArticle>
                        
                        <CustomArticle
                            title="FESTA DO PIJAMA"
                            texto="Eu e meus AUmigos amamos uma festa. Que tal comprar uns petiscos e assistir um filme de chorar abraçada comigo, ou um filme de terror e eu te protejo? Escolha um AUmigo, se cadastre e um humano irá entrar em contato."                            
                        ></CustomArticle>
                    </CustomContainer>

                    {/* Falta div do PARA ADOTAR e o FILTRO - GAME */}

                    {/* <!-- Rodapé --> */}
                    <CustomFooter />
        </>
    )
}