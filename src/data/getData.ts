type Project = {
  id: string;
  projectUrl: string;
  personId: string;
};

type Person = {
  id: string;
  name: string;
  githubName: string;
  githubImgUrl: string;
  subTitle: string;
  text: string;
  teamId: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  created_at: string;
  updated_at: string;
  projects: Project[];
};

export type TeamType = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  people: Person[];
};

//função criada para realizar o fetch dos dados e faz cache para caso for usada em outra parte não seja preciso fazer requisição de novo.
export const getTeamData = async (): Promise<TeamType>=>{
  try {
    const response = await fetch('https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/api/PhoenixCoders', { cache: 'force-cache' });
    const data: TeamType = await response.json();
   
    return data;
  } catch (error) {
    console.error('Failed to fetch team data:', error);
    throw error;
  }
}


