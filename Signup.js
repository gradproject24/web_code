import React from 'react'
import { About } from "./About";
import { Button } from "./Button";
import { Community } from "./Community";
import { ContactUs } from "./ContactUs";
import { DoYouHaveAn } from "./DoYouHaveAn";
import { Download } from "./DownloadScreen";
import { Facebook } from "./Facebook";
import { Group } from "./Group";
import { Instagram } from "./Instagram";
import { Linkdin } from "./Linkdin";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import { Support } from "./Support";
import { Twitter } from "./Twitter";
import { UnlockTheDoorTo } from "./UnlockTheDoorTo";
import { Vector } from "./Vector";
import "./Signup.css";
export default function Signup() {
  return (
        <div className="SIGNUP">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group-wrapper">
                        <div className="overlap">
                            <div className="banner">
                                <img className="backgroound" alt="Backgroound" src="../assets/backgroound.jpg" />
                            </div>
                            <Button className="button-instance" />
                            <div className="menu">
                                <div className="menu-2">
                                    <div className="menu-wrapper">
                                        <div className="div-wrapper">
                                            <div className="overlap-group">
                                                <div className="line" />
                                                <div className="menu-3">
                                                    <div className="text-wrapper-9">Home</div>
                                                    <div className="about-2">
                                                        <img className="img" alt="Line" src="line-1.svg" />
                                                        <About className="about-instance" />
                                                    </div>
                                                    <div className="support-2">
                                                        <img className="img" alt="Line" src="line-3.svg" />
                                                        <Support className="support-instance" />
                                                    </div>
                                                    <div className="community-2">
                                                        <img className="img" alt="Line" src="line-2.svg" />
                                                        <Community className="community-instance" />
                                                    </div>
                                                    <div className="download-2">
                                                        <img className="line-2" alt="Line" src="line-4.svg" />
                                                        <Download className="download-instance" />
                                                    </div>
                                                    <div className="contact-US">
                                                        <img className="line-3" alt="Line" src="line-3-2.svg" />
                                                        <ContactUs className="contact-us-instance" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="follow">
                                        <Instagram className="instagram-instance" />
                                        <Facebook className="facebook-instance" />
                                        <Twitter className="twitter-instance" />
                                        <Linkdin className="linkdin-instance" />
                                    </div>
                                    <Group className="group-10" property1="default" to="/signup" />
                                </div>
                            </div>
                            <UnlockTheDoorTo
                                className="UNLOCK-THE-DOOR-TO-BOUNDLESS-CREATIVITY"
                                property1="default"
                                propertyDefault="UNLOCK-THE-DOOR-TO-BOUNDLESS-CREATIVITY.svg"
                            />
                            <img className="rectangle" alt="Rectangle" src="../assets/rectangle-97.png" />
                        </div>
                    </div>
                    <div className="BACKGROUND">
                        <div className="overlap-2">
                            <img className="rectangle-2" alt="Rectangle" src="../assets/rectangle-85.png" />
                            <Vector className="vector-instance" />
                        </div>
                    </div>
                    <div className="group-2">
                        <div className="overlap-3">
                            <div className="text-wrapper-10">CREATE PASSWORD</div>
                        </div>
                    </div>
                    <div className="group-3">
                        <div className="overlap-3">
                            <div className="text-wrapper-11">EMAIL</div>
                        </div>
                    </div>
                    <DoYouHaveAn className="do-you-have-an-account-login" property1="default" />
                    <div className="text-wrapper-12">WELCOME TO A-EYE</div>
                    <PropertyDefaultWrapper className="group-8" />
                    <div className="group-4">
                        <div className="overlap-3">
                            <div className="text-wrapper-13">CONFIRM PASSWORD</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
