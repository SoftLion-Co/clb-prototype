import s from "./OurTeamComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";

// Assuming TeamMember is defined somewhere like this
interface TeamMember {
  id: number;
  acf: TeamMemberAcf;
}

interface TeamMemberAcf {
    fullname: string;
    jobtitle: string;
    image: string;
}


const OurTeamComponent = ({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) => {
  return (
    <div className={s.team}>
      {teamMembers.map((teamMember, index) => (
        <div className={s.team__content} key={teamMember.id}>
          <Image
            className={s.team__picture}
            src={teamMember.acf.image}
            alt={teamMember.acf.fullname}
            width={800}
            height={800}
          />
          <h3 className={s.team__name}>{teamMember.acf.fullname}</h3>
          <p className={classNames(s.team__position, s.pDefault)}>
            {teamMember.acf.jobtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurTeamComponent;
