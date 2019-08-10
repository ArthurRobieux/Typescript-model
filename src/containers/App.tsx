import React from "react";
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

import styles from "./styles.module.scss";
import { Page } from "../modules/common-ui";
import { Module1 } from "../modules/Module1";
import { Module2 } from "../modules/Module2";
import { Header } from "../Layout/Header";
import { MainMenu } from "../Layout/MainMenu";

export type RoutesProps = {
  id: number;
} & RouteComponentProps;

const App = withRouter(({ id, history }: RoutesProps) => {
  return (
    <Page>
      <Header />
      <MainMenu />
      <hr className={styles.hr} />
      <Switch>
        <Route exact path="/" component={Module1} />
        <Route path="/2/" component={Module2} />
      </Switch>
    </Page>
  );
});

export default App;
