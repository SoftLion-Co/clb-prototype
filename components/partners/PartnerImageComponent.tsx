import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

const PartnerImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return <Image  {...props} ref={ref} />; 
    }
  );
  
export  const MPartnerImage = motion(PartnerImage)