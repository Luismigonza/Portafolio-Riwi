import Image from "next/image";
import Seccion from "@/ui/Seccion";
import BlogCard from "@/ui/BlogCard";
import Titulo from "@/ui/Titulo";
import Parrafo from "@/ui/Parrafo";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center ">

      <Seccion className={''}>
        <Titulo
          texto={'Materiales permitidos'}
        />
        <Parrafo clas={'text-center'}>
          Observa un poco de los materiales a los que Boricue les da soporte en nuestra pagina web
        </Parrafo>

        <div className="w-full flex space-x-6 space-y-6  items-center flex-col sm:flex-row">
          <BlogCard
            title={'Carton'}
            description={'Carton en buen estado, sin haber sido usado anteriormente.'}
            imageUrl={'/Carton.jpg'}
          />
          <BlogCard
            title={'Aluminio'}
            description={'En todas sus presentaciones, latas, papel, todos los tipos son aceptados.'}
            imageUrl={'/Aluminio.jpg'}
          />
          <BlogCard
            title={'Cuero'}
            description={'Recortes de cuero, trozos de cuero o elementos de cuero que ya no sean de uso.'}
            imageUrl={'/Cuero.jpeg'}
          />
        </div>

        

      </Seccion>

    </main>

  );
}
