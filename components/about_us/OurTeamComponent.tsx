import s from "./OurTeamComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import useLocale from "@/hooks/useLocale";

// Assuming TeamMember is defined somewhere like this
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

const OurTeamComponent = ({
  teamMembers,
  className,
}: {
  teamMembers: TeamMember[];
  className?: string;
}) => {
  const locale = useLocale();

  return (
    <div className={classNames(s.team, className)}>
      {teamMembers.map((teamMember, index) => (
        <div className={s.team__content} key={teamMember.id}>
          <Image
            className={s.team__picture}
            src={teamMember.acf.image}
            alt={teamMember.acf[`fullname_${locale}` as keyof TeamMemberAcf]}
            width={800}
            height={800}
          />
          <h3 className={s.team__name}>
            {teamMember.acf[`fullname_${locale}` as keyof TeamMemberAcf]}
          </h3>
          <p className={classNames(s.team__position, s.pDefault)}>
            {teamMember.acf[`jobtitle_${locale}` as keyof TeamMemberAcf]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurTeamComponent;
