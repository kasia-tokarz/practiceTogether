import React from 'react';
import "./ImageBox.scss";

const ImageBox = () => {
    return (
        <>
        <div id="photoDiv">
                        <div></div>
                    </div>

                    <div id="aboutUs">
                        <div id="aboutWrapper">
                            <div className="aboutDiv" id="aboutDivFirst">
                                <div id="first"></div>
                                <p className="hashTekst">#makeYourCommunity </p>

                            </div>
                            <div className="aboutDiv">
                                <div id="second"></div>
                                <p className="hashTekst">#respectYourBody</p>

                            </div>
                            <div className="aboutDiv">
                                <div id="third"></div>
                                <p className="hashTekst">#takeCareAboutYourTime</p>

                            </div>
                        </div>


                    </div>

            
        </>
    );
};

export default ImageBox;