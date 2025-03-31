import Image from "next/image";
import Link from "next/link";
import estilos from './Nav.module.css';

export default function Nav() {
    return (
        <header className={estilos.header}>
            <nav className={estilos.nav}>
                <div >
                    <h1 className={estilos.logo_name}>Plan<span className={estilos.name_destaque}>fly</span></h1>
                </div>
                <div className={estilos.link_add}>
                    <ul className={estilos.links}>
                        <li className={estilos.link}>Sobre</li>
                        <li className={estilos.link}>Trefas</li>
                        <li className={estilos.link}>Coisas</li>
                    </ul>
                    <div className={estilos.btn_add}>
                        +
                    </div>
                </div>

                <div className={estilos.container_login}>
                    <button className={estilos.btn_create_acount}>Criar conta</button>
                    <button className={estilos.btn_login}>Fazer Login</button>
                </div>
            </nav>
        </header>
    )
}
