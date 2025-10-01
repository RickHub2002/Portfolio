function Skills({ className = '' }) {
    return (
        <section className="absolute -bottom-100 h-150 w-[80%] left-[50%] -translate-x-[50%] bg-purple-500 border-y-1 border-l-1">
            <ul className="grid grid-cols-3 place-items-center">
                <li className="li-skills">
                    <div className="bg-blue-500 w-15 h-15 rounded-full flex items-center justify-center">
                        <i class="fa-solid fa-code li-icon"></i>
                    </div>
                    <div>
                        <h2>Front-end</h2>
                        <p>Magna pariatur exercitation adipisicing officia minim ullamco tempor ullamco excepteur aute laboris ex.</p>
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                    </div>
                </li>
                                <li className="li-skills">
                    <div className="bg-blue-500 w-15 h-15 rounded-full flex items-center justify-center">
                        <i class="fa-solid fa-layer-group li-icon"></i>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2>Design UI/UX e Web</h2>
                        <p>Magna pariatur exercitation adipisicing officia minim ullamco tempor ullamco excepteur aute laboris ex.</p>
                        <p>
                            <span>Things i enjoy designing:</span>
                            <span>UX,UI,WEB,APPS</span>
                        </p>
                        <p>
                            <span>Ferramentas que Uso/Exploro:</span>
                            <div className="flex flex-col">
                                <span>Figma (básico/intermediário)</span>
                                <span>Princípios de UI/UX</span>
                                <span>pen & paper,</span>
                                <span>sketch</span>
                            </div>
                        </p>
                    </div>
                </li>
                <li className="li-skills">
                    <div className="bg-blue-500 w-15 h-15 rounded-full flex items-center justify-center">
                        <i class="fa-solid fa-server li-icon"></i>
                    </div>
                    <div>
                        <h2>Back-end</h2>
                        <p>Magna pariatur exercitation adipisicing officia minim ullamco tempor ullamco excepteur aute laboris ex.</p>
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                        <p>
                            <span></span>
                            <span></span>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Skills;