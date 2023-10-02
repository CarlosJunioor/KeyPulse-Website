import Logo from "../assets/images/Logo.png";
import TrophyBg from "../assets/images/Trophy.jpg";
import { TeamValues } from "../components/TeamValues";
import Passion from "../assets/images/Passion.png";
import Determination from "../assets/images/typing.jpg";
import Community from "../assets/images/community.jpg";
import Win from "../assets/images/win.jpg";
import { AchievementsCard } from "../components/AchievementsCard";
import { Achivements } from "../mocks/Achivements/data";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import BgVideo from "../assets/bg-about.mp4";

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full relative h-screen">
        <video
          src={BgVideo}
          autoPlay
          muted
          loop
          preload="auto"
          className="absolute -z-20 w-full h-full object-cover"
        />
        <div className=" flex flex-col items-center justify-center w-full h-screen z-20 px-6">
          <h2 className="font-black text-xl">SOBRE</h2>
          <h1 className="text-orange-primary font-black text-5xl">
            KEYPULSE ESPORTS
          </h1>
          <p className="font-medium mt-2 max-w-3xl w-full whitespace-pre-line">
            Uma equipa nascida do desejo incansável de elevar o cenário Esports
            para novos patamares! Fundada em 2023 resultante de um rebrand dos
            Varona Esports, os Keypulse foram fundados por Luís Morais (The
            Weekend) e Raul Meneses.
          </p>
          <img src={Logo} alt="KeyPulse" width={100} className="mt-6" />
        </div>
        <div className="overlay -z-10"></div>
      </div>

      <section className="fade bg-cover bg-center h-[562px] w-full flex justify-center items-center">
        <div className="flex gap-8 md:gap-20 w-full items-center max-w-6xl flex-wrap md:flex-nowrap mx-4">
          <motion.h1
            className="text-4xl md:text-6xl md:mb-16 lg:mb-0 text-start font-black text-gray-100 ml-6 lg:ml-0"
            variants={fadeIn("right", 0)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            NOSSA <br />
            <span className="text-orange-primary">MISSÃO</span>
          </motion.h1>
          <p className="text-lg md:text-3xl font-medium text-start ml-6 md:ml-0">
            Procuramos constantemente a excelência, levando a nossa inovação,
            dedicação e espírito competitivo a novos patamares. Cada dia é uma
            oportunidade para crescer, evoluir e conquistar novos territórios!
          </p>
        </div>
      </section>

      <section className="flex py-40">
        <div className="w-1/2 max-h-[496px] hidden md:inline">
          <img
            src={TrophyBg}
            className="!object-cover bg-center w-full h-full"
          />
        </div>
        <div className="flex-1 bg-neutral-900 h-auto px-10 py-6 items-center flex flex-col">
          <h1 className="text-3xl font-bold mb-2">CONQUISTAS</h1>
          <p className="text-neutral-300 md:text-base text-sm">
            Ao longo do nosso percurso desde a época Varona Esports, acumulámos
            conquistas impressionantes:
          </p>
          <div className="flex flex-col max-w-xl justify-center mt-8 gap-3 pb-2">
            {Achivements.map((achivement, index) => (
              <LazyMotion features={domAnimation} key={achivement.championship}>
                <motion.div
                  key={achivement.championship}
                  variants={fadeIn("right", 0)}
                  initial={"hidden"}
                  transition={{ delay: index * 5 }}
                  whileInView={"show"}
                  viewport={{ margin: "120px" }}
                >
                  <AchievementsCard
                    position={achivement.position}
                    championship={achivement.championship}
                  />
                </motion.div>
              </LazyMotion>
            ))}
          </div>
        </div>
      </section>

      <section className="fade bg-cover bg-center h-[562px] w-full flex justify-center items-center">
        <div className="flex gap-9 md:gap-20 w-full items-center max-w-6xl flex-wrap md:flex-nowrap justify-start mx-4">
          <motion.h1
            className="text-4xl md:text-6xl md:mb-16 lg:mb-0 text-start font-black text-gray-100 ml-6 lg:ml-0"
            variants={fadeIn("right", 0)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            NOSSA <br />
            <span className="text-orange-primary">VISÃO</span>
          </motion.h1>
          <p className="text-lg md:text-3xl font-medium text-start ml-6 md:ml-0">
            A Nossa visão é clara: influenciar positivamente o mundo dos
            Esports, deixando a nossa marca em todas as competições que
            disputemos. Temos como objetivo ser uma referência definitiva no
            desporto digital, moldando o futuro do cenário com cada passo que
            damos.
          </p>
        </div>
      </section>

      <section className="py-40">
        <h1 className="text-2xl md:text-3xl font-black">OS NOSSOS VALORES</h1>
        <div className="max-w-6xl flex flex-col gap-8 mt-16 overflow-hidden">
          <TeamValues
            imageSrc={Passion}
            title="Paixão e Integridade"
            text="O nosso amor pelo jogo que nos impulsiona a superar limites, de forma honesta e focada!"
          />
          <TeamValues
            imageSrc={Determination}
            title="Determinação"
            text="Nunca desistir, enfrentando os desafios de cabeça erguida."
            imageOnLeft={true}
          />
          <TeamValues
            imageSrc={Community}
            title="Comunidade"
            text="A felicidade e o entretenimento da nossa comunidade são prioridade máxima nos Keypulse."
          />
          <TeamValues
            imageSrc={Win}
            title="Excelência"
            text="Estamos em constante procura pela destreza competitiva que nos fará captar a atenção do mundo Esports."
            imageOnLeft={true}
          />
        </div>
      </section>
    </div>
  );
}
