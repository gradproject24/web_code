import React from 'react'
import { About } from "./About";
import { Community } from "./Community";
import { ContactUs } from "./ContactUs";
import { Download } from "./DownloadScreen";
import { Facebook } from "./Facebook";
import { Group } from "./Group";
import { IconComponentNode } from "./IconComponentNode";
import { Instagram } from "./Instagram";
import { Linkdin } from "./Linkdin";
import { NamecandidateNameLinkdinScore101 } from "./NamecandidateNameLinkdinScore101";
import { NamecandidateNameTwitterScore101 } from "./NamecandidateNameTwitterScore101";
import { Support } from "./Support";
import { Twitter } from "./Twitter";
import'./Download.css'
export default function DownloadScreen() {
    return (
            <div className="DOWNLOAD-screen">
                <div className="DOWNLOAD">
                    <div className="overlap">
                        <img className="rectangle" alt="Rectangle" src="../assets/rectangle-92.png" />
                        <img className="img" alt="Rectangle" src="../assets/rectangle-93.png" />
                        <div className="overlap-wrapper">
                            <div className="overlap-group">
                                <div className="text-wrapper-6">GET ON APP STORE</div>
                            </div>
                        </div>
                        <div className="rectangle-2" />
                        <div className="text-wrapper-7">GET ON PLAY STORE</div>
                        <img className="ic-round-apple" alt="Ic round apple" src="../assets/ic-round-apple.svg" />
                        <div className="rectangle-3" />
                        <div className="text-wrapper-8">DOWNLOAD GAME</div>
                        <img className="vector" alt="Vector" src="vector.svg" />
                        <img className="icon-google-play" alt="Icon google play" src="../assets/icon-google-play.png" />
                        <img className="rectangle-4" alt="Rectangle" src="../assets/rectangle-97.png" />
                    </div>
                    <div className="menu">
                        <div className="menu-2">
                            <div className="menu-wrapper">
                                <div className="div-wrapper">
                                    <div className="menu-3">
                                        <div className="text-wrapper-9">Home</div>
                                        <div className="about-2">
                                            <img className="line" alt="Line" src="line-1.svg" />
                                            <About className="about-instance" />
                                        </div>
                                        <div className="support-2">
                                            <img className="line" alt="Line" src="line-3.svg" />
                                            <Support className="support-instance" />
                                        </div>
                                        <div className="community-2">
                                            <img className="line" alt="Line" src="line-2.svg" />
                                            <Community className="community-instance" />
                                        </div>
                                        <div className="download-2">
                                            <img className="line-2" alt="Line" src="line-4.svg" />
                                            <Download className="download-instance" property1="default" to="/download" />
                                        </div>
                                        <div className="line-3" />
                                        <div className="contact-US">
                                            <img className="line-4" alt="Line" src="../assets/image.svg" />
                                            <ContactUs className="contact-us-instance" />
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
                            <Group className="group-10" />
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="copyright">
                            <img className="line-5" alt="Line" src="line.svg" />
                            <div className="copyright-a-EYE-wrapper">
                                <p className="copyright-a-EYE">
                                    <span className="span">Copyright © A-EYE | Designed by FCAI Graduates - Powered by Figma.</span>
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <div className="content-2">
                                <div className="pages">
                                    <div className="text-wrapper-10">Pages</div>
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
                                    <div className="text-wrapper-10">Subscribe</div>
                                </div>
                                <div className="name-wrapper">
                                    <div className="name">
                                        <div className="overlap-group-2">
                                            <div className="text-wrapper-11">Email here*</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="follow-2">
                                        <IconComponentNode className="instagram-instance" />
                                        <Facebook className="facebook-instance" />
                                        <NamecandidateNameTwitterScore101 className="twitter-instance" />
                                        <NamecandidateNameLinkdinScore101 className="linkdin-instance" />
                                    </div>
                                    <button className="button-2">
                                        <div className="text-wrapper-12">Send Now</div>
                                    </button>
                                </button>
                            </div>
                            <div className="logo">
                                <img className="rectangle-5" alt="Rectangle" src="../assets/image.png" />
                                <p className="p">
                                    A-EYE for designing and visualizing your space with your creativity and power of modern technology.
                                </p>
                                <div className="address-wrapper">
                                    <div className="address">
                                        <div className="email">
                                            <p className="div-2">
                                                <a href="mailto:contact@hvcargologistics.com" rel="noopener noreferrer" target="_blank">
                                                    <span className="text-wrapper-13">
                                                        Email
                                                        <br />
                                                    </span>
                                                </a>
                                                <span className="text-wrapper-13">aeye.s2024@gmail.com</span>
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
                </div>
            </div>
 );
    
};

