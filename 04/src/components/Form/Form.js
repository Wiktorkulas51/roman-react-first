import React from "react";
import styles from "./Form.module.scss";
import AppContext from "../../context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const description = {
  twitter: "Favorite twitter account",
  article: "Article",
  note: "Note",
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
    title: "",
    link: "",
    image: "",
    description: "",
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };
  handleInputeChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { activeOption } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => {
          return (
            <div className={styles.wrapper}>
              <Title className={styles.title}>
                Add new {description[activeOption]}
              </Title>
              <form
                autoComplete="off"
                className={styles.form}
                onSubmit={(e) => context.addItem(e, this.state)}
              >
                <input
                  id={types.twitter}
                  type="radio"
                  checked={activeOption === types.twitter}
                  onChange={() => {
                    this.handleRadioButtonChange(types.twitter);
                  }}
                />
                <label htmlFor={types.twitter}>Twitter</label>
                <input
                  id={types.article}
                  type="radio"
                  checked={activeOption === types.article}
                  onChange={() => {
                    this.handleRadioButtonChange(types.article);
                  }}
                />
                <label htmlFor={types.article}>Article</label>
                <input
                  id={types.note}
                  type="radio"
                  checked={activeOption === types.note}
                  onChange={() => {
                    this.handleRadioButtonChange(types.note);
                  }}
                />
                <label htmlFor={types.note}>Note</label>

                <Input
                  onChange={this.handleInputeChange}
                  value={this.state.title}
                  name="title"
                  label={
                    activeOption === types.twitter ? "Twitter name" : "title"
                  }
                  maxLength={30}
                />
                {activeOption !== types.note ? (
                  <Input
                    onChange={this.handleInputeChange}
                    value={this.state.link}
                    name="link"
                    label={
                      activeOption === types.twitter ? "Twitter link" : "link"
                    }
                  />
                ) : null}
                {activeOption === types.twitter ? (
                  <Input
                    onChange={this.handleInputeChange}
                    value={this.state.image}
                    name="image"
                    label="Image"
                  />
                ) : null}
                <Input
                  onChange={this.handleInputeChange}
                  value={this.state.description}
                  tag="textarea"
                  name="description"
                  label="Description"
                />
                <Button>add new item</Button>
              </form>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Form;
