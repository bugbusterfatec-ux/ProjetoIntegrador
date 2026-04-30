

export const CustomMenuLateral = () => {

    return (
        <>
        <div className="overlay-menu" id="overlayMenu"></div>
        <aside className="menu-lateral" id="menuLateral" aria-hidden="true">
            <header className="header-menu">
                <button className="btn-close-menu" id="fecharMenu" aria-label="Fechar menu">&times;</button>
            </header>
        <div className="conteudo-menu">
			<section className="secao-menu">
				<h1 className="titulo-span-menu"><span className="material-symbols-rounded">pets</span></h1>
				<h1 className="titulo-secao-menu">MENU</h1>
			</section>

            <section className="secao-menu">
                <h3 className="titulo-secao-menu">SOBRE NÓS</h3>
                <ul className="lista-menu">
                    <li><a href="./index_sobrenos.html" className="link-menu" target="_blank">Sobre o DPBEA</a></li>
                    <li><a href="#" className="link-menu">Estrutura e Equipe</a></li>
                    <li><a href="#" className="link-menu">Nossos Mascotes Sol e Lua</a></li>
                    <li><a href="#" className="link-menu">Notícias e Eventos</a></li>
                </ul>
            </section>
			
			<section className="secao-menu">
                <h3 className="titulo-secao-menu">PETS</h3>
                <ul className="lista-menu">
                    <li><a href="./index_filtro.html" className="link-menu" target="_blank">Programa de Adoção Responsável</a></li>
                    <li><a href="#" className="link-menu">Lar Transitório</a></li>
					<li><a href="#" className="link-menu">Entenda como Funciona</a></li>
					<li><a href="#" className="link-menu">Cadastro para Oferecer Lar Transitório</a></li>					
                    <li><a href="./index_sobrenos.html" className="link-menu" target="_blank">Sleepover (Festa do Pijama)</a></li>
                    <li><a href="./index_sobrenos.html" className="link-menu" target="_blank">Dia do Passeio</a></li>
                </ul>
            </section>
			
			<section className="secao-menu">
                <h3 className="titulo-secao-menu">PETS PERDIDOS E ENCONTRADOS</h3>
                <ul className="lista-menu">
                    <li><a href="#" className="link-menu">Perdi Meu Pet</a></li>
                    <li><a href="#" className="link-menu">Encontrei um Pet</a></li>
					<li><a href="#" className="link-menu">Mapa Interativo da Região</a></li>
					<li><a href="#" className="link-menu">Gerenciamento de Pets</a></li>					
                </ul>
            </section>

            <section className="secao-menu">
                <h3 className="titulo-secao-menu">BANCO DE RAÇÃO</h3>
                <ul className="lista-menu">
                    <li><a href="#" className="link-menu">Sou Doador</a></li>
                    <li><a href="#" className="link-menu">Solicitar Doação</a></li>
					<li><a href="#" className="link-menu">Transparência das Doações</a></li>
                </ul>
            </section>
			
			<section className="secao-menu">
                <h3 className="titulo-secao-menu">ASSISTÊNCIA MÉDICA VETERINÁRIA</h3>
                <ul className="lista-menu">
                    <li><a href="#" className="link-menu">Clinica Veterinária Municipal</a></li>
                    <li><a href="#" className="link-menu">Como Funciona</a></li>
					<li><a href="#" className="link-menu">Castração</a></li>
					<li><a href="#" className="link-menu">Como Funciona</a></li>
                    <li><a href="#" className="link-menu">Cadastre-se</a></li>
					<li><a href="#" className="link-menu">Clínicas Credenciadas</a></li>
					<li><a href="#" className="link-menu">Resultados e Transparência</a></li>
                </ul>
            </section>

            <section className="secao-menu">
                <h3 className="titulo-secao-menu">EDUCAÇÃO E CONSCIÊNTIZAÇÃO</h3>
                <ul className="lista-menu">
                    <li><a href="#" className="link-menu">Programa de Educação Escolar</a></li>
                    <li><a href="#" className="link-menu">Programa de Educação Canina e Felina</a></li>
                    <li><a href="#" className="link-menu">Programa de Educação Comunitária</a></li>
                    <li><a href="#" className="link-menu">Programa de Educação Continuada</a></li>
                </ul>
            </section>

            <section className="secao-menu">
                <h3 className="titulo-secao-menu">TRANSPARÊNCIA E PARTICIPAÇÃO</h3>
                <ul className="lista-menu">
                    <li><a href="#" className="link-menu">Legislação e Normas</a></li>
                    <li><a href="#" className="link-menu">Relatórios e Indicadores</a></li>
                    <li><a href="#" className="link-menu">Conselho Municipal de Bem-Estar Animal</a></li>
					<li><a href="#" className="link-menu">Parcerias e Termos de Cooperação</a></li>
                    <li><a href="#" className="link-menu">Contato</a></li>
                </ul>
            </section>
        </div>
        </aside>
        </>
    )
}