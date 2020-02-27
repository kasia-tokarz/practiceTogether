import React from 'react';
import "./About.scss";

const About = () => {
    return (
        <div>
            <div id="wrapperDiv" className="wrapperDivAbout">

                <div id="aboutDiv" className="aboutDiv">

                </div>
                <div id="textDiv" className="textDivAbout">
                    <div id="headerTitle" className="headerTitleAbout">
                        <h2><i class="fas fa-hashtag"></i>whatAboutMe</h2>

                    </div>
                    <p>Wszytskim nam dzisiaj brakuje czasu, mieszkamy w róznych częściach naszych miast, mamy napięte grafiki, a nasze to do listy są w ciągłej gotowości.. A co gdbyśmy umawiali się z sąsiadem z bloku na przecikwo pobiegać? Nowa relacja, nowe doświadczenie, wymiana poglądów i niesamowita oszczedność czasu! Pomyśl o tym!!</p>
                </div>


            </div>


        </div>
    );
};

export default About;