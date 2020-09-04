import React from 'react';
import "../about-comp/style.css";
  


class Aboutcomp extends React.Component {
    constructor(){
        super();
        this.state = {
            skills: [
              { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
              { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
              {
                id: "JavaScript_skill",
                content: "JavaScript",
                porcentage: "90%",
                value: "90"
              },
              { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
              {
                id: "ReactJS_skill",
                content: "ReactJS",
                porcentage: "80%",
                value: "80"
              },
              {
                id: "Python_skill",
                content: "Python",
                porcentage: "75%",
                value: "75"
              },
              {
                id: "VanillaJS_skill",
                content: "VanillaJS",
                porcentage: "85%",
                value: "85"
              },
              {
                id: "Wordpress_skill",
                content: "Wordpress",
                porcentage: "80%",
                value: "80"
              }
            ],
            about_me: [
              {
                id: "first-p-about",
                content:
                  "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
              },
              {id: "second-p-about",
              content:
                "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
            },
            {
              id: "third-p-about",
              content:
                "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
            }
          ]
        }
    }
        render(){
            return(
              
            
          <div class="row">
            <div class="box-shadow-full">
              <div class="both">
              <div class="col-6 left">
                <div className="skill-mf">
                       <h5 className="title-left">Skill</h5> 
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>
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
             
             
              <div class="col-6 right">
                <div class="about-mf">
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
              
              
            );
        
                            }

}
export default Aboutcomp;