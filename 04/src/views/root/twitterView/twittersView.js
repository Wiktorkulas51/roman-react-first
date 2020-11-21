import React from "react";
import AppContext from "../../../context";
import List from "../../../components/List/List";

const twittersView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div>
          <List items={context.twitter} />
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default twittersView;
