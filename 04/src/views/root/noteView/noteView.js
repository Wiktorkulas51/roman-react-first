import React from "react";
import AppContext from "../../../context";
import List from "../../../components/List/List";

const noteView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div>
          <List items={context.note} />
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default noteView;
