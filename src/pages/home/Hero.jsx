import React from "react";
import Container from "../../component/container";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="bg-blue-900 text-white  ">
      <Container designs=" md:pt-[100px] md:pb-[120px]  grid md:grid-cols-2 gap-5 md:gap-3">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-4xl">COVID-19 CANLI TAKİP</h1>
          <p className="text-neutral-400">
            Koronavirüs hastalığı 2019 şiddetli akut solunum sendromu
            koronavirüsü 2'nin neden olduğu bulaşıcı bir hastalıktır. İlk vaka
            ile Çin'in Hubei eyaletinin Wuhan şehrinde Kasım 2019 tarihinde
            karşılaşılmıştır.
          </p>
          <div className="flex gap-5">
            <button className="bg-pink-500 px-4 py-1 rounded-lg hover:bg-pink-600 flex-1 flex items-center transition">
              <span className="flex-1 whitespace-nowrap">
                {" "}
                Nasıl Korunulur?
              </span>
              <MdOutlineKeyboardArrowRight size={26} />
            </button>
            <button className="bg-pink-500 px-4 py-1 rounded-lg hover:bg-pink-600 flex-1 flex items-center transition">
              <span className="flex-1 whitespace-nowrap">Doktor Bul</span>
              <MdOutlineKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="./hero.png" alt="virus" className="max-w-88" />
        </div>
      </Container>
      <div></div>
    </div>
  );
};

export default Hero;
