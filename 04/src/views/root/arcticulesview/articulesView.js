import React from "react";
import AppContext from "../../../context";
import List from "../../../components/List/List";

const ArticulesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div>
          <List items={context.article} />
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ArticulesView;
