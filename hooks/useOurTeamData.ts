import { useState, useEffect } from "react";

const teamReqUrl =
  "https://softlion.blog/wp-json/wp/v2/our-team?per_page=100&acf_format=standard&_fields=id,acf,title";

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

const useOurTeamData = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const req = await fetch(teamReqUrl, { cache: "no-cache" });
      const fetchedTeam: TeamMember[] = await req.json();
      setTeam(fetchedTeam.reverse());
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return { team, loading, error };
};

export default useOurTeamData;
