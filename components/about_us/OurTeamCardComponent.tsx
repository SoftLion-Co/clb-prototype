import s from "./OurTeamCardComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import useLocale from "@/hooks/useLocale";

interface TeamMember {
  id: number;
  acf: TeamMemberAcf;
}

interface TeamMemberAcf {
  fullname_en: string;
  jobtitle_en: string;
  image: string;
  fullname_de: string;
  jobtitle_de: string;
  fullname_es: string;
  jobtitle_es: string;
  fullname_ua: string;
  jobtitle_ua: string;
}

const OurTeamCardComponent = ({
  teamMember,
  className,
}: {
  teamMember: TeamMember;
  className?: string;
}) => {
  const locale = useLocale();

  return (
    <div className={classNames(s.team, className)}>
      <div className={s.team__content} key={teamMember.id}>
        <Image
          className={s.team__picture}
          src={teamMember.acf.image}
          alt="Company employee"
          width={800}
          height={800}
        />
        <h3 className={s.team__name}>
          {teamMember.acf[`fullname_${locale}` as keyof TeamMemberAcf]}
        </h3>
        <p className={s.team__position}>
          {teamMember.acf[`jobtitle_${locale}` as keyof TeamMemberAcf]}
        </p>
      </div>
    </div>
  );
};

export default OurTeamCardComponent;
