import Header from "../components/Header"
import Introduction from "../components/Introduction"
import Container from "../components/Container";
import About_me from "../components/About_me";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact_footer from "../components/Contact_footer";

function Pagina_principal() {
    return (
        <section>
            <Header />
            <Container>
                <Introduction />
            </Container>
            <About_me>
                <Skills />
            </About_me>
            <Container>
                <Projects />
            </Container>
            <Footer>
                <Contact_footer />
            </Footer>
        </section>
    )
}

export default Pagina_principal;