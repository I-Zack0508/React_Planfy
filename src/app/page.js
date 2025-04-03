import Image from "next/image";
import estilos from "./page.module.css";
import BordasDuplas from "@/components/BordasDuplas";

export default function Home() {
  return (
    <div className={estilos.page}>

      <div className={estilos.banner_planfy}>
        <h1 className={estilos.banner_title}>Planfy</h1>
      </div>

      <div className={estilos.little_about}>

        <div className={estilos.about}>
          <h1 className={estilos.about_h1}>Sobre o Planfy</h1>
          <p className={estilos.about_text}>O Planfy é um  sistema de organização
            O Planfy é um sistema de organização de tarefas
            que permite criar lembretes, definir prazos
            e acompanhar seu progresso. Com uma interface
            intuitiva, ele contabiliza atividades
            concluídas e pendentes, ajudando você a
            gerenciar seu tempo de forma eficiente.
            Ideal para otimizar sua rotina
            pessoal, acadêmica ou profissional.</p>
        </div>

        <div className={estilos.about_img}>
          <Image
            className={estilos.imagem}
            src="/ilustracao01.png"
            alt="pessoas felizes ao concluir um objetivo"
            height={350}
            width={450}
          />
        </div>

      </div>


      <BordasDuplas />


    </div>
  );
}
