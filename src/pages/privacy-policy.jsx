import React from "react";
import Head from "next/head";
import DarkTheme from "../layout/Dark";
import PrivacyNavBar from "../components/PrivacyNavBar/navbar";
import HeaderPrivacy from "../components/HeaderPrivacy/HeaderPrivacy";
import Footer from "../components/Footer/footer";

const PrivacyPolicy = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DarkTheme mobileappstyle>
        <PrivacyNavBar nr={navbarRef} />
        <HeaderPrivacy />
        <div className="circle-blur"></div>
        <Footer />
      </DarkTheme>
    </>
  );
};

export default PrivacyPolicy;
