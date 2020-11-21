import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import ArticulesView from "./arcticulesview/articulesView";
import noteView from "./noteView/noteView";
import twittersView from "./twitterView/twittersView";
import Header from "../../components/navigation/header/header";
import Modal from "../../components/modal/modal";

class Root extends React.Component {
  state = {
    twitter: [],
    article: [],
    note: [],

    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.activeOption]: [...prevState[newItem.activeOption], newItem],
    }));

    this.closeModal();
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

    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFunc={this.openModal} />
          <Switch>
            <Route exact path="/" component={twittersView} />
            <Route path="/articules" component={ArticulesView} />
            <Route path="/notes" component={noteView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
