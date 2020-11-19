import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticulesView from "./arcticulesview/articulesView";
import noteView from "./noteView/noteView";
import twittersView from "./twitterView/twittersView";
import Header from "../../components/navigation/header/header";
import Modal from "../../components/modal/modal";

const initialStateItems = [
  {
    image:
      "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg",
    name: "Dan Abramov",
    description: "React core member",
    twitterLink: "https://twitter.com/dan_abramov",
  },
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: false,
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <BrowserRouter>
        <>
          <Header openModalFunc={this.openModal} />
          <Switch>
            <Route exact path="/" component={twittersView} />
            <Route path="/articules" component={ArticulesView} />
            <Route path="/notes" component={noteView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
