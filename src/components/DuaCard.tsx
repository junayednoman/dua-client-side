/* eslint-disable react/no-unescaped-entities */
import duacard from "@/assets/duacard.svg";
import Image from "next/image";
import DuaCardBottom from "./DuaCardBottom";

const DuaCard = () => {
  return (
    <div className="p-5 px-6 bg-white rounded-[10px]">
      <div className="flex items-center gap-[10px]">
        <Image src={duacard} width={35} height={35} alt="duacard" />
        <h5 className="font-semibold text-primary">
          1. The servant is dependent on his Lord #1
        </h5>
      </div>

      {/* dua text start */}
      <p className="mt-6 leading-[26px]">
        All human beings depend on Allah for their welfare and prevention of
        evil in various matters of their religion and world. Allah says
        (interpretation of the meaning): O mankind, you are those in need of
        Allah, while Allah is the Free of need, the Praiseworthy.
      </p>
      <p className="mt-6 sm:text-2xl text-lg sm:leading-[52px] leading-10 font-me_quran text-right">
        لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
        وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
        مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ
        ذَا الْجَدِّ مِنْكَ الْجَدُّ
      </p>
      <p className="mt-6 leading-[26px] italic">
        <span className="font-semibold not-italic">Transliteration:</span> Laa
        ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa
        huwa &apos;alaa kulli shay'in qadir. Allaahumma laa maani'a limaa
        a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka
        al-jaddu
      </p>
      <p className="mt-4 leading-[26px]">
        <span className="font-semibold">Translation:</span>There is none worthy
        of worship except Allah alone with no partner or associate. He is the
        Dominion and to Him be all praise, and He is able to do all things. O
        Allah, one can withhold what You have given and none can give what You
        have withheld, and no wealth or fortune can benefit anyone for from You
        comes all wealth and fortune.
      </p>
      {/* dua text end */}

      <p className="text-primary font-semibold mt-7">Reference:</p>
      <p className="font-medium mt-1">Surah Al-Fatir 35:15</p>

      {/* other options */}
      <DuaCardBottom />
    </div>
  );
};

export default DuaCard;
