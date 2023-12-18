import React from 'react'
import { About } from "./About";
import { Community } from "./Community";
import { ContactUs } from "./ContactUs";
import { Download } from "./Download";
import { Facebook } from "./Facebook";
import { Group } from "./Group";
import { IconComponentNode } from "./IconComponentNode";
import { Instagram } from "./Instagram";
import { Linkdin } from "./Linkdin";
import { NamecandidateNameTwitterScore101 } from "./NamecandidateNameTwitterScore101";
import { Property1Default } from "./Property1Default";
import { Support } from "./Support";
import { Twitter } from "./Twitter";
import { Vector } from "./Vector";
import './Community.css'
export default function CommunityScreen() {
  return (
            <div className="COMMUNITY-screen">
                <div className="COMMUNITY">
                    <div className="menu">
                        <div className="menu-2">
                            <div className="menu-wrapper">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group">
                                        <div className="line" />
                                        <div className="menu-3">
                                            <div className="text-wrapper-6">Home</div>
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
                                                <Download className="download-instance" property1="default" to="/community" />
                                            </div>
                                            <div className="contact-US">
                                                <img className="line-3" alt="Line" src="image.svg" />
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
                                <Property1Default className="linkdin-instance" />
                            </div>
                            <Group className="group-10" />
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="copyright">
                            <img className="line-4" alt="Line" src="line.svg" />
                            <div className="copyright-a-EYE-wrapper">
                                <p className="copyright-a-EYE">
                                    <span className="span">Copyright © A-EYE | Designed by FCAI Graduates - Powered by Figma.</span>
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <div className="content-2">
                                <div className="pages">
                                    <div className="text-wrapper-7">Pages</div>
                                    <div className="about-community">
                                        About&nbsp;&nbsp;
                                        <br />
                                        Community
                                        <br />
                                        Support
                                        <br />
                                        Download <br />
                                        Contact us
                                    </div>
                                </div>
                                <div className="subscribe">
                                    <div className="text-wrapper-7">Subscribe</div>
                                </div>
                                <div className="name-wrapper">
                                    <div className="name">
                                        <div className="div-wrapper">
                                            <div className="text-wrapper-8">Email here*</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="follow-2">
                                        <IconComponentNode className="instagram-instance" />
                                        <Facebook className="facebook-instance" />
                                        <NamecandidateNameTwitterScore101 className="twitter-instance" />
                                        <Linkdin className="linkdin-instance" />
                                    </div>
                                    <button className="button-2">
                                        <div className="text-wrapper-9">Send Now</div>
                                    </button>
                                </button>
                            </div>
                            <div className="logo">
                                <img className="rectangle" alt="Rectangle" src="../assets/rectangle-97.png" />
                                <p className="p">
                                    A-EYE for designing and visualizing your space with your creativity and power of modern technology.
                                </p>
                                <div className="address-wrapper">
                                    <div className="address">
                                        <div className="email">
                                            <p className="div-2">
                                                <a href="mailto:contact@hvcargologistics.com" rel="noopener noreferrer" target="_blank">
                                                    <span className="text-wrapper-10">
                                                        Email
                                                        <br />
                                                    </span>
                                                </a>
                                                <span className="text-wrapper-10">aeye.s2024@gmail.com</span>
                                            </p>
                                            <div className="icon">
                                                <div className="vector-wrapper">
                                                    <img className="vector-2" alt="Vector" src="../assets/call.svg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="call">
                                            <p className="div-2">
                                                Call Us <br />
                                                (+20) 112 365 4890
                                            </p>
                                            <div className="icon">
                                                <img className="vector-3" alt="Vector" src="../assets/mail.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <img className="rectangle-2" alt="Rectangle" src="image.png" />    */}
                    <img className="rectangle-3" alt="Rectangle" src="../assets/rectangle-99.png" />
                    <img className="rectangle-4" alt="Rectangle" src="../assets/rectangle-101.png" />
                    <img className="rectangle-5" alt="Rectangle" src="../assets/rectangle-100.png" />
                    <div className="text-wrapper-11">EXPLORE DESIGEN PROJECTS</div>
                    <div className="group-2">
                        <div className="text-wrapper-12">LUXURY LIVING ROOM</div>
                        <div className="overlap">
                            <div className="text-wrapper-13">Neda’a Hamed</div>
                            <div className="group-3">
                                <Vector className="vector-instance" />
                                <img className="material-symbols" alt="Material symbols" src="../assets/material-symbols-share.svg" />
                                <img className="grommet-icons-view" alt="Grommet icons view" src="../assets/grommet-icons-view.svg" />
                                <img className="icon-profile-circled" alt="Icon profile circled" src="../assets/icon-profile-circled-icon.png" />
                            </div>
                        </div>
                        <div className="text-wrapper-14">16k</div>
                    </div>
                    <div className="group-4">
                        <div className="text-wrapper-12">MODERN LIVING ROOM</div>
                        <div className="overlap">
                            <div className="text-wrapper-13">Omar Reda</div>
                            <div className="group-3">
                                <Vector className="icon-instance-node" />
                                <img className="material-symbols" alt="Material symbols" src="../assets/material-symbols-share-2.svg" />
                                <img className="grommet-icons-view" alt="Grommet icons view" src="../assets/grommet-icons-view-2.svg" />
                                <img className="icon-profile-circled" alt="Icon profile circled" src="../assets/icon-profile-circled-icon-2.png" />
                            </div>
                        </div>
                        <div className="text-wrapper-14">20k</div>
                        <div className="group-5">
                            <div className="text-wrapper-12">A-EYE CO. OFFICE</div>
                            <div className="overlap-group-2">
                                <div className="text-wrapper-15">Ahmed Hatem</div>
                                <div className="group-3">
                                    <Vector className="vector-instance" />
                                    <img className="material-symbols" alt="Material symbols" src="../assets/material-symbols-share-3.svg" />
                                    <img className="grommet-icons-view" alt="Grommet icons view" src="../assets/grommet-icons-view-3.svg" />
                                    <img
                                        className="icon-profile-circled"
                                        alt="Icon profile circled"
                                        src="../assets/icon-profile-circled-icon-3.png"
                                    />
                                </div>
                            </div>
                            <div className="text-wrapper-14">17k</div>
                        </div>
                    </div>
                </div>
            </div>
        );
};
    
