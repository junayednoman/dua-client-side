"use client";
import audiobtn from "@/assets/audiobtn.svg";
import copy from "@/assets/copy.svg";
import bookmark from "@/assets/bookmark2.svg";
import plan from "@/assets/plan.svg";
import share from "@/assets/share.svg";
import report from "@/assets/report.svg";
import pause from "@/assets/pause.svg";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "./ui/tooltip";

const DuaCardBottom = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex items-center justify-between mt-7">
      <div>
        <Image
          onClick={() => setIsPlaying(!isPlaying)}
          className={`cursor-pointer rounded-full sm:w-[44px] w-[40px] ${
            isPlaying ? "hidden" : "inline-block"
          }`}
          src={audiobtn}
          width={44}
          height={44}
          alt="play icon"
        />
        <Image
          onClick={() => setIsPlaying(!isPlaying)}
          className={`cursor-pointer rounded-full sm:w-[44px] w-[40px] ${
            !isPlaying ? "hidden" : "inline-block"
          }`}
          src={pause}
          width={44}
          height={44}
          alt="play icon"
        />
      </div>
      <div className="flex items-center sm:gap-8 gap-5">
        <Tooltip
          positioning={{ placement: "top" }}
          openDelay={0}
          showArrow
          content="Copy"
        >
          <Image
            className="cursor-pointer"
            src={copy}
            width={26}
            height={26}
            alt="copy icon"
          />
        </Tooltip>
        <Tooltip
          positioning={{ placement: "top" }}
          openDelay={0}
          showArrow
          content="Bookmark"
        >
          <Image
            className="cursor-pointer"
            src={bookmark}
            width={24}
            height={24}
            alt="bookmark icon"
          />
        </Tooltip>
        <Tooltip
          positioning={{ placement: "top" }}
          openDelay={0}
          showArrow
          content="Memorize"
        >
          <Image
            className="cursor-pointer"
            src={plan}
            width={24}
            height={24}
            alt="plan icon"
          />
        </Tooltip>
        <Tooltip
          positioning={{ placement: "top" }}
          openDelay={0}
          showArrow
          content="Share"
        >
          <Image
            className="cursor-pointer"
            src={share}
            width={24}
            height={24}
            alt="share icon"
          />
        </Tooltip>
        <Tooltip
          positioning={{ placement: "top" }}
          openDelay={0}
          showArrow
          content="Report"
        >
          <Image
            className="cursor-pointer"
            src={report}
            width={24}
            height={24}
            alt="report icon"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default DuaCardBottom;
