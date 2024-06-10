import React from "react";
import { GoTelescope, GoShieldCheck } from "react-icons/go";
import { LuClipboardCheck } from "react-icons/lu";
import { GrCubes } from "react-icons/gr";
import { AiOutlineSelect } from "react-icons/ai";

const Advantage = ({ title, description, Icon }) => {
  return (
    <div className="bg-dark-color-secondary flex flex-col md:flex-row rounded-lg min-h">
      <div className="md:w-80 h-auto gap-8 p-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <Icon className="text-lime-primary w-6 h-6 text-xl ml-4" />
          <p className="border-light-color font-mulish -text-lg gap-1.5 font-bold -ml-2">{title}</p>
        </div>
        <p className="border-light-color text-sm font-Mulish pt-4 ml-5 text-left">{description}</p>
      </div>
    </div>
  );
};

const Vantagens = () => {
  return (
    <section className="mx-auto py-8 py-5 sm:ml-24 md:mx-24 lg:mx-8 p">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 mx-4">
        <div className="bg-dark-color p-4 flex">
          <div className="text-left">
            <h2 className="font-inconsolata text-3xl md:text-2xl lg:text-3xl font-extrabold leading-8 md:leading-9 lg:leading-10 gap: 16px;">
              Vantagens do <br /> projeto
            </h2>
            <div className="w-full md:w-300 border-t-2 border-dark-color mt-7"></div>
            <p className="font-mulish text-sx md:text-lg lg:text-sx leading-6 md:leading-5 lg:leading-6 pt-">
              Participar de um projeto em grupo para aprender programação web frontend e desenvolver um portfólio colaborativo oferece uma série de vantagens!
            </p>
          </div>
          </div>
        <Advantage
          title="Diversidade de habilidades:"
          description="Ao trabalhar em equipe, você pode aprender com os
           outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          Icon={AiOutlineSelect}
        />
        <Advantage
          title ="Divisão de tarefas:"
          description="Trabalhar em equipe permite distribuir o trabalho 
          de forma eficiente, acelerando o progresso e
          permitindo que cada membro se concentre em suas áreas de especialização."
          Icon={LuClipboardCheck}
        />
        
        <Advantage
          title="Aprendizado colaborativo:"
          description="Ao trabalhar em equipe, você pode aprender com os outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          Icon={GrCubes}
        />
        <Advantage
          title="Diversidade de perspectivas:"
          description="Trabalhar com pessoas diferentes traz uma variedade de perspectivas e abordagens para resolver problemas. Isso pode levar a soluções mais criativas e inovadoras, já que cada membro do grupo pode contribuir com suas ideias únicas."
          Icon={GoTelescope}
        />
        <Advantage
          title="Habilidades interpessoais:"
          description="Trabalhar em equipe ajuda a aprimorar habilidades de comunicação, colaboração e trabalho em grupo. Essas habilidades são essenciais no ambiente de trabalho, não apenas na área de programação, mas em muitos outros campos também."
          Icon={GoShieldCheck}
        />
      </div>
    </section>
  );
};

export default Vantagens;