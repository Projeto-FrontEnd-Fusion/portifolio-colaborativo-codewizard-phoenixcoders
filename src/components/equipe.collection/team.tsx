import React, { useEffect, useState } from "react"
import { Heading } from "./components/ui/heading"
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon
} from "lucide-react"
import {
  Team,
  TeamName,
  TeamSubtitle,
  TeamPersonalMain,
  TeamPersonalSocial,
  TeamPersonalSocialIcon,
  TeamPersonalAboutText,
  TeamProjectHeader,
  TeamProjectMain,
  TeamProjectContent,
  TeamProjectContentItem
} from "./components/teamComponent";
import { Button } from "./components/ui/button";
import { TeamType, getTeamData } from "../../data/getData";



export default function OurTeam() {
  const [data, setData] = useState<TeamType>()
//useffect para chamar função que faz o fetch dos dados na api e salvar com uso do usestate
  useEffect(() => {
    const dataFethc = async () => {
      const data = await getTeamData()
      setData(data)
    }
    dataFethc()
  }, [])
  return (
    <section className=" min-h-screen container mx-auto px-4 pb-6">
      <Heading className="py-4 mb-16" hilight>
        Desenvolvedores FrontEnd
      </Heading>
      <div className="space-y-14">
      
        {data?.people.map((team) => (
          <Team key={team.id}>
            <TeamPersonalMain imagerUrl={team.githubImgUrl}>
              <TeamName>
                {team.name}
              </TeamName>
              <TeamSubtitle>
                {team.subTitle}
              </TeamSubtitle>
              <TeamPersonalSocial>
                <TeamPersonalSocialIcon href={team.githubUrl}>
                  <GithubIcon />
                </TeamPersonalSocialIcon>
                <TeamPersonalSocialIcon href={team.linkedinUrl}>
                  <LinkedinIcon />
                </TeamPersonalSocialIcon>
                <TeamPersonalSocialIcon href={team.instagramUrl}>
                  <InstagramIcon />
                </TeamPersonalSocialIcon>
                <TeamPersonalSocialIcon href={team.facebookUrl}>
                  <FacebookIcon />
                </TeamPersonalSocialIcon>
              </TeamPersonalSocial>
              <TeamPersonalAboutText>
                {team.text}
              </TeamPersonalAboutText>
            </TeamPersonalMain>
            <TeamProjectMain >
              <TeamProjectHeader >
                <Button>Projeto Recentes</Button>
                <Button>Habilidades</Button>
              </TeamProjectHeader>
              <TeamProjectContent>
                {team.projects.map((project) => (
                  <TeamProjectContentItem
                    alt={project.projectUrl}
                    src={project.projectUrl}
                    key={project.id}
                  />
                ))}
              </TeamProjectContent>
            </TeamProjectMain>
          </Team>
        ))}
      </div>
    </section>
  )
}