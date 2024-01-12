"use client";
import React, { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';
import classNames from "classnames";
import Incoterms from "@/images/incoterms.svg";
import Image from "next/image";
import s from "./IncotermsSection.module.scss";

const IncotermsSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [opened, { close, open }] = useDisclosure(false);

  const handleAreaHover = (areaTitle: string) => {
    setHoveredArea(areaTitle);
    open();
  };

  const handleAreaLeave = () => {
    setHoveredArea(null);
    close();
  };
  return (
    <>
      <Image
        className={classNames(s.incoterms, s.container)}
        src={Incoterms}
        alt="Incoterms"
        width={2000}
        height={2000}
        useMap="#incoterms"
      />
      <map name="incoterms">
      <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
            <Popover.Target>
              <area
                coords="-1,164,97,200"
                shape="rect"
                onMouseEnter={() => handleAreaHover('EXW')}
                onMouseLeave={handleAreaLeave}
              />
            </Popover.Target>
            <Popover.Dropdown style={{ pointerEvents: 'none' }}>
              <Text size="sm">{hoveredArea}</Text>
            </Popover.Dropdown>
          </Popover>
            <area
              coords="0,214,98,248"
              shape="rect"
              onMouseOver={() => handleAreaHover('FCA')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="-1,266,98,300"
              shape="rect"
              onMouseOver={() => handleAreaHover('FAS')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="0,316,98,351"
              shape="rect"
              onMouseOver={() => handleAreaHover('FOB')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="0,368,98,401"
              shape="rect"
              onMouseOver={() => handleAreaHover('CFR')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="0,419,98,453"
              shape="rect"
              onMouseOver={() => handleAreaHover('CIF')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="0,468,98,504"
              shape="rect"
              onMouseOver={() => handleAreaHover('CPT')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="-1,521,98,556"
              shape="rect"
              onMouseOver={() => handleAreaHover('CIP')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="-1,572,98,606"
              shape="rect"
              onMouseOver={() => handleAreaHover('DPU')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="0,622,98,658"
              shape="rect"
              onMouseOver={() => handleAreaHover('DAP')}
              onMouseLeave={handleAreaLeave}
            />
            <area
              coords="0,673,98,708"
              shape="rect"
              onMouseOver={() => handleAreaHover('DDP')}
              onMouseLeave={handleAreaLeave}
            />
          </map>
      
    </>
  );
};

export default IncotermsSection;
