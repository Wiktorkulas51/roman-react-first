import React from "react";
import styles from "./Form.module.scss";
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
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    const { activeOption } = this.state;
    return (
      <div className={styles.wrapper}>
        <Title className={styles.title}>
          Add new {description[activeOption]}
        </Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
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
            name="name"
            label={activeOption === types.twitter ? "Twitter name" : "title"}
            maxLength={30}
          />
          {activeOption !== types.note ? (
            <Input
              name="link"
              label={activeOption === types.twitter ? "Twitter link" : "link"}
            />
          ) : null}
          {activeOption === types.twitter ? (
            <Input name="image" label="Image" />
          ) : null}
          <Input tag="textarea" name="description" label="Description" />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
