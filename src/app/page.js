import Image from "next/image";
import estilos from "./page.module.css";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className={estilos.page}>

      <div className={estilos.banner_planfy}>
        <h1 className={estilos.banner_title}>Planfy</h1>
      </div>

      <div className={estilos.little_about}>
          <div className={estilos.card_about}>

          </div>
          <div className={estilos.image_about}>
            <Image/>
          </div>
      </div>

    </div>
  );
}
