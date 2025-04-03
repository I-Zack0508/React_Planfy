import Image from "next/image";
import estilos from "./BordasDuplas.module.css";

export default function BordasDuplas() {
    return (
        <div className={estilos.bordas_container}>
             <div className={estilos.Borda1}>
                <Image
                className={estilos.imagem}
                    src="/borda02.png" // Remova o "./"
                    alt="Borda 1"
                    width={200} // Defina largura
                    height={200} // Defina altura
                />
             </div>
             <div className={estilos.Borda2}>
                <Image
                className={estilos.imagem}
                    src="/borda01.png" // Corrija se houver outra borda
                    alt="Borda 2"
                    width={280}
                    height={280}
                />
             </div>
        </div>
    );
}
