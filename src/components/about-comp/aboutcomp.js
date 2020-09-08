import React from 'react';
import "../about-comp/style.css";
import Male from "../../img/male1.png"


class Aboutcomp extends React.Component {
    constructor(){
        super();
        this.state = {
            skills: [
              { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
              { id: "CSS_skill", content: "CSS", porcentage: "75%", value: "75" },
              {
                id: "JavaScript_skill",
                content: "JavaScript",
                porcentage: "80%",
                value: "80"
              },
              { id: "Java_skill", content: "Java", porcentage: "75%", value: "75" },
              {
                id: "ReactJS_skill",
                content: "ReactJS",
                porcentage: "80%",
                value: "80"
              },
              {
                id: "Git_skill",
                content: "Git",
                porcentage: "80%",
                value: "80"
              },
              {
                id: "NodeJS_skill",
                content: "NodeJS",
                porcentage: "85%",
                value: "85"
              },
              {
                id: "SQL_skill",
                content: "SQL",
                porcentage: "75%",
                value: "75"
              }
            ],
            about_me: [
              {
                id: "first-p-about",
                content:
                  ""
              },
              {id: "second-p-about",
              content:
                "Hey, My name is Musadiq Soso as you already know. Thank you for taking the time to explore my About me page, I am a recent Software engineering graduate from the University of Ontario Institute of Technology. At the moment I am in search of employment in the Software/IT industry, while searching for jobs I have also used this free time to nurture and develop my Technical skills by taking on courses and projects so as to be a hundred per cent ready for my next employer. I like to call myself a Software Developer, I have some experience in Software/IT as a front-end Web Developer Intern which I learned a lot and I’m grateful for. If you wish to get in touch with or learn further about me you can Navigate to the Contact page Thank you."
            },
            {
              id: "third-p-about",
              content:
                ""
            }
          ]
        }
    }
        render(){
            return(
              
            
              <section id="about" className="about-mf sect-pt4 route" >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="box-shadow-full">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div
                              className="col-sm-6 col-md-5"
                              style={{ margin: "0 auto" }}
                            >
                              <div
                                className="about-img"
                                style={{ textAlign: "center" }}
                              >
                                <img
                                  className="img-fluid rounded b-shadow-a"
                                  alt=""
                                  src={Male}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="skill-mf">
                            {/* <p className="title-s">Skill</p> */}
                            {this.state.skills.map(skill => {
                              return (
                                <React.Fragment key={skill.id}>
                                  <span>{skill.content}</span>{" "}
                                  <span className="pull-right">
                                    {skill.porcentage}
                                  </span>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: skill.porcentage }}
                                      aria-valuenow={skill.value}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="about-me pt-4 pt-md-0">
                            <div className="title-box-2">
                              <h5 className="title-left">About Me</h5>
                              
                            </div>
                            {this.state.about_me.map(content => {
                              return (
                                <p className="lead" key={content.id}>
                                  {content.content}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
              
            );
        
                            }

}
export default Aboutcomp;