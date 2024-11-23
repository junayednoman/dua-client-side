/* eslint-disable react/no-unescaped-entities */
import duacard from "@/assets/duacard.svg";
import Image from "next/image";
import DuaCardBottom from "./DuaCardBottom";
import { TDua } from "@/types";

const DuaCard = ({ dua }: { dua: TDua }) => {
  const {
    dua_name_en,
    top_en,
    dua_arabic,
    bottom_en,
    id,
    translation_en,
    transliteration_en,
    refference_en,
    audio,
  } = dua;

  return (
    <div id={`dua-${id}`} className="p-5 px-6 bg-white rounded-[10px]">
      <div className="flex items-center gap-[10px]">
        <Image src={duacard} width={35} height={35} alt="duacard" />
        <h5 className="font-semibold text-primary">
          {id}. {dua_name_en}
        </h5>
      </div>

      {/* dua text start */}
      {top_en && <p className="mt-6 leading-[26px]">{top_en}</p>}
      {dua_arabic && (
        <p className="mt-6 sm:text-2xl text-lg sm:leading-[52px] leading-10 font-me_quran text-right">
          {dua_arabic}
        </p>
      )}
      {transliteration_en && (
        <p className="mt-6 leading-[26px] italic">
          <span className="font-semibold not-italic">Transliteration:</span>
          {transliteration_en}
        </p>
      )}
      {translation_en && (
        <p className="mt-4 leading-[26px]">
          <span className="font-semibold">Translation:</span>
          {translation_en}
        </p>
      )}
      {bottom_en && <p className="mt-4 leading-[26px]">{bottom_en}</p>}
      {/* dua text end */}

      {refference_en && (
        <>
          <p className="text-primary font-semibold mt-7">Reference:</p>
          <p className="font-medium mt-1">{refference_en}</p>
        </>
      )}

      {/* other options */}
      <DuaCardBottom audio={audio} />
    </div>
  );
};

export default DuaCard;
