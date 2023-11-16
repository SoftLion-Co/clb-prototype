import React from "react";
import s from "./OurCoreServices.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurCoreServicesComponent from "@/components/OurCoreServicesComponent";

function OurCoreServices() {
  return (
    <div className={s.services}>
      <MainTitleComponent
        title="Our core services"
        className={s.services__title}
      />
      <OurCoreServicesComponent />
    </div>
  );
}

export default OurCoreServices;
