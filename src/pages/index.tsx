/* interface HomeProps {
  count: number;
}

 */
import Image from "next/image";
import appPrevierImg from "../assets/app-nlw-copa-mobile.png";
import logoImg from "../assets/logo.svg";
import usersAvatarExampleImg from "../assets/users-avatar-exemple.png";
import iconCheckImg from "../assets/icon-check.svg";

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
      <main>
        <Image src={logoImg} alt="NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flexx items-center gap-2 ">
          <Image src={usersAvatarExampleImg} alt="" />
          
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">12.592</span> pessoas já estão usando
          </strong>

          <form className="mt-10 flex">
            <input 
            className="flex-1 px-6 py-4 rounded"
            type="text" 
            required 
            placeholder="Qual nome do seu bolão?" />
            <button 
            className="bg-yellow-500"
            type="submit"> Criar meu bolão</button>
          </form>

          <p>
            {" "}
            Após criar seu bolão, você receberá um código único que poderá usar
            para convidar outras pessoas 🚀{" "}
          </p>

          <div>
            <div>
              <Image src={iconCheckImg} alt="" />
              <div>
                <span>2.834</span>
                <span>Bolões Criados</span>
              </div>
            </div>
            <div>
              <Image src={iconCheckImg} alt="" />
              <div>
                <span>2.834</span>
                <span>Bolões Criados</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={appPrevierImg}
        alt="Dois celulares exibindo a prévia do aplicativo da NLW da Copa"
      />
      quality={100}
    </div>
  );
}

/* export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      count: data.count,
    }
  }
}
 */
