import React from "react";
import ReactLogo from "../images/logo512.png";

function Main() {
    return (
        <main>
            <div className="main--sec1">
                <div className="main--about">
                    <h1>About</h1>
                    <p>
                        Passionate front-end web developer with experience in providing quality services in a team-oriented
                        environment. Eager to apply recent Front-End Development education and problem-solving, web design,
                        and collaboration skills to create a technological impact within the tech industry. Seeking to use my skills
                        to create functioning software for a company.
                    </p>
                </div>
                <div className="main--interests">
                    <h1>Interests</h1>
                    <p>
                        Coding is a passion of mine and would love to have a job involved with this field of study. It's satifying
                        to see a project work after trial and errors. When I'm not coding usually you'll catch me watching
                        some football or playing video games if I get the chance.
                    </p>
                </div>
            </div>
            <div className="main--sec2">
                <h1>Contacts</h1>
                <div className="sec2--buttons">
                    <button type="button" className="button--email">Email</button>
                    <button type="button" className="button--linkedin">LinkedIn</button>
                </div>
                <h2>This Project</h2>
                <p>
                    This React is for testing new Ideas and theories that I may come up with in the future.
                    With the evolving state of technology I come back here often.
                </p>
            </div>
        </main>
    )
}

export default Main;