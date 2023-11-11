import s from "./OurTeamComponent.module.scss";
import Image from "next/image";
import Picture from "@/images/home-hero-test.png";
import classNames from "classnames";

const OurTeamComponent = ({
  teamMembers,
}: {
  teamMembers: Array<{
    img: string;
    name: string;
    position: string;
  }>;
}) => {
  return (
    <div className={s.team}>
      {teamMembers.map((teamMember, index) => (
        <div className={s.team__content} key={index}>
          <Image
            className={s.team__picture}
            src={Picture}
            alt={teamMember.name}
          />
          <h3 className={s.team__name}>{teamMember.name}</h3>
          <p className={classNames(s.team__position, s.pDefault)}>
            {teamMember.position}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurTeamComponent;
