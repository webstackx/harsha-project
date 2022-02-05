import React, { Component } from "react";
import Features from "../components/Home/Features";
import ContactUs from "../components/Home/ContactUs";
import Footer from "../components/Home/Footer";
import Banner from "../components/Home/Banner";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import Loader from "../utils/Loader/Loader";
import SuccessModal from "../components/MiniComponents/SuccessModal";
import About from "../components/Home/About";
import ScrollTop from "../components/MiniComponents/ScrollTop";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isBackground: false,
      isNavbar: false,
      mobileArray: [],
      emailArray: [],
      isLoader: true,
      isSuccess: false,
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 500) {
        this.setState({ isBackground: true });
      } else {
        this.setState({ isBackground: false });
      }
    };
    this.getDetails();
    this.loaderSet();
  }

  toggleNavbar = () => {
    this.setState({ isNavbar: !this.state.isNavbar });
  };

  toggleSuccess = () => {
    this.setState({ isSuccess: !this.state.isSuccess });
  };

  loaderSet = () => {
    setTimeout(() => {
      this.setState({ isLoader: false });
    }, 2000);
  };

  gotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  getDetails = () => {
    fetch(`https://webstackx.herokuapp.com/api/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "failure") {
          console.log(res.message);
        } else {
          this.setState({ mobileArray: res.mobile, emailArray: res.email });
        }
      })
      .catch((err) => console.log(err.message));
  };

  render() {
    const {
      isBackground,
      isNavbar,
      mobileArray,
      emailArray,
      isLoader,
      isSuccess,
    } = this.state;
    return isLoader ? (
      <Loader />
    ) : (
      <div className="Home">
        <Header isBackground={isBackground} toggleNavbar={this.toggleNavbar} />
        <Banner isBackground={isBackground} />
        <div id="Services"></div>
        <Features />
        <div id="Contact"></div>
        <ContactUs
          mobileArray={mobileArray}
          emailArray={emailArray}
          toggleSuccess={this.toggleSuccess}
        />
        <div id="About"></div>
        <About />
        <Footer />
        {isBackground ? <ScrollTop gotoTop={this.gotoTop} /> : ""}
        {isNavbar ? <Navbar toggleNavbar={this.toggleNavbar} /> : ""}
        {isSuccess ? <SuccessModal toggleSuccess={this.toggleSuccess} /> : ""}
      </div>
    );
  }
}

export default Home;
