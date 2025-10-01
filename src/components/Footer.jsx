function Footer( {children} ) {
    return( 
        <section>
            <h2>A vida é um constante aprendizado e aprimoramento, um passo por vez.</h2>
            <div>
                <a><i className="fa-brands fa-linkedin"></i></a>
                <a><i className="fa-brands fa-github"></i></a>
                <a><i className="fa-brands fa-instagram"></i></a>
                <a><i className="fa-solid fa-envelope"></i></a>
            </div>
            {children}
        </section>
    )
};

export default Footer;