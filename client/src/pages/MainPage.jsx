import React, { Component } from "react";
import Header from "./../components/Header";
import PageTitle from "./../components/PageTitle";
import Footer from "./../components/Footer";
import EventDesc from "./../components/EventDesc";
import SectionMain from "./../components/SectionMain";

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          eventName: "Platform Front-end",
          adress: "@ Latte Pytho 12 Zybitskaya St., Minsk",
          eventFrequency: "every Monday, 16:00",
          subscribe: "Subscribe",
          key: 1,
        },
        {
          eventName: "Platform Back-end",
          adress: "@ Latte Pytho 12 Zybitskaya St., Minsk",
          eventFrequency: "every Monday, 16:00",
          subscribe: "Subscribe",
          key: 2,
        },
        {
          eventName: "Something event",
          adress: "Something adress",
          eventFrequency: "hz vasche",
          subscribe: "Unsubscribe",
          key: 3,
        },
      ],
      userTelegramId: undefined,
    };
  }

  render() {
    const { events } = this.state;

    console.log("id = " + this.state.userTelegramId);

    return (
      <div>
        <Header />
        {this.state.user ? (
          <PageTitle title="Hello, " desc="feel free at this website" />
        ) : (
          <PageTitle title="Get your own kick off" desc="with Wargaming S&C" />
        )}
        <SectionMain />
        <EventDesc events={events} />
        {/* <Footer /> */}
      </div>
    );
  }

  componentDidMount() {
    const telegramId = localStorage.getItem("telegramId");

    if (!telegramId) {
      const locationHash = !!this.props.location.search
        ? this.props.location.search
            .slice(1)
            .split("&")
            .map(s => s.split("="))
            .filter(v => v[0] === "id")[0][1]
        : undefined;

      localStorage.setItem("telegramId", locationHash);
      this.setState({
        userTelegramId: localStorage.getItem("telegramId") || locationHash,
      });
    } else {
      this.setState({
        userTelegramId: telegramId,
      });
    }

    fetch(
      `http://forge-development.herokuapp.com/api/users/${
        this.state.userTelegramId
      }`,
    )
      .then(data => data.json())
      .then(user => {
        console.log(user);

        this.setState({ user });
      });
  }
}
