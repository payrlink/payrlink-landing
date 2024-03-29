import React from "react";
import { Row, Col } from "react-bootstrap";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import Discord from "../assets/discord.svg";
import Telegram from "../assets/telegram.svg";
import Behance from "../assets/behance.svg";

const teamData = [
  {
    name: "Boiko J.",
    occupation: "(Founder & CEO)",
    linkedin: "https://www.linkedin.com/in/maxsim-boiko-jin-1877b7205/",
    github: "https://github.com/leonboripgs",
    telegram: "https://t.me/midasico",
    discreption: "Boiko is highly motivated Founder of PayrLink with a combined experience in blockchain, which includes leadership, program and organizational development. Specialized expertise in the development of innovative Defi and he is pushing Payrlink to the goal of next generation Escrow."
  },
  {
    name: "Jason M.",
    occupation: "(CTO)",
    github: "https://github.com/IntelMin",
    telegram: "https://t.me/intelmin",
    discreption: "Jason has spent multiple years building up blockchain infrastructure for several organizations with combined experience in FinTech, Data Science, Software Engineering, and Blockchain Industry."
  },
  {
    name: "Blake L.",
    occupation: "(CIO & HR)",
    linkedin: "https://www.linkedin.com/in/blake-lin-aaa876203/",
    github: "https://github.com/magic990619",
    telegram: "https://t.me/blake0619",
    discreption: "Blake is the Chief Information Officer and Hiring Manager at PayrLink with more than six years of experience with creating and promoting blockchain projects. Former Lead Dev at Codiant, Contributor at Yam, and community builder."
  },
  {
    name: "Sunil C.",
    occupation: "(Senior Developer)",
    telegram: "https://t.me/sunil_rojariya",
    linkedin: "http://www.linkedin.com/in/sunil-rojariya",
    discreption: "Sunil has more than 4 years experience in full-stack development with great skills of React.js, PHP, and Node.js."
  },
  {
    name: "Gabriel M.",
    occupation: "(Blockchain Engineer)",
    github: "https://github.com/gabriel-reine-13",
    discreption: "A professional full-stack blockchain engineer. Gabriel has become quite a familiar face in the crypto community from helping several top projects with management, advisory, and dev work."
  },
  {
    name: "Camilo I.",
    occupation: "(Marketing Operator)",
    telegram: "https://t.me/marketing_camilo",
    discreption: "Experienced and energetic marketing professional with proven ability to create highly successful membership programs and insight driven integrated digital marketing campaigns."
  },
  {
    name: "Tarun T.",
    occupation: "(Designer)",
    telegram: "https://t.me/tarun_thusu",
    linkedin: "https://www.linkedin.com/in/tarun-thusu-b6706613a",
    behance: "https://www.behance.net/tarun_thusu",
    discreption: "Tarun is an insightful individual with 3+ years of expertise in the UI/UX designing. He is passionate about utilising his creative & technical skills and work with the community to provide unique designs."
  },
  {
    name: "Santosh K.",
    occupation: "(Full-Stack Developer)",
    telegram: "https://t.me/sanwebnet",
    linkedin: "https://www.linkedin.com/in/santosh-k-thakur-a3372044",
    discreption: "An expert in React.js, Node.js, ...   with multiple years of experience along with this, determining strategic directions, leading long-range planning with industry leaders is his strength. Hands-on experience with handling the process of product development."
  },
];

const team = () => {
  return (
    <>
        <Row className="app_secondery  px-5">
          <Col md="12" xl="12">
            <h1 className="text-white font-weight-bold mb-5 pb-3 pb-md-5 text-center">
              Team
            </h1>
          </Col>
        </Row>
        <Row className="px-md-5 app_secondery text-white justify-content-center bg_team">
          <Col xl={10}>
            <Row>
              {teamData.map((e) => (
                <Col xl="6" className="my-3 my-col">
                  <div className="card_div h-100 trans member-div">
                    <h3 className="font-weight-bold">{e.name}</h3>
                    <h5 className="text-white-50">{e.occupation}</h5>
                    <div className="d-flex my-4">
                      {e.linkedin && 
                        <div className="icon_over mr-3">
                            <a href={e.linkedin} target="_blank" rel="noopener noreferrer">
                              <img src={Linkedin} width="15" alt="" />
                            </a>
                        </div>
                      }
                      {e.github && 
                        <div className="icon_over mr-3">
                          <a href={e.github} target="_blank" rel="noopener noreferrer">
                            <img src={Github} width="18" alt="" />
                          </a>
                        </div>
                      }
                      {e.twitter && 
                        <div className="icon_over mr-3">
                          <a href={e.twitter} target="_blank" rel="noopener noreferrer">
                            <img src={Twitter} width="15" alt="" />
                          </a>
                        </div>
                      }
                      {e.telegram && 
                        <div className="icon_over mr-3">
                          <a href={e.telegram} target="_blank" rel="noopener noreferrer">
                            <img src={Telegram} width="15" alt="" />
                          </a>
                        </div>
                      }
                      {e.discord && 
                        <div className="icon_over mr-3">
                          <a href={e.discord} target="_blank" rel="noopener noreferrer">
                            <img src={Discord} width="15" alt="" />
                          </a>
                        </div>
                      }
                      {e.behance && 
                        <div className="icon_over mr-3">
                          <a href={e.behance} target="_blank" rel="noopener noreferrer">
                            <img src={Behance} width="20" alt="" />
                          </a>
                        </div>
                      }
                    </div>
                    <h5 className="font-weight-normal mb-5">{e.discreption}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </>
  );
}

export default team;
