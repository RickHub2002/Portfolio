function Header() {
    return (
        <section className="px-60 py-10 w-full">
            <nav className="flex justify-between">
                <a className="text-xl">Home</a>
                <div className="flex gap-2">
                    <button className=""><i className="fa-solid fa-circle-half-stroke fa-xl"></i></button>
                    <button className="text-xl">Contato</button>
                </div>
            </nav>
        </section>
    )
}

export default Header;