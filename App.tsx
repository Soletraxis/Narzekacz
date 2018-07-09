import React from 'react';
import { Component } from 'react';
import StackRouter from 'Config/stackRouter';
import initializeFirebase from "./app/services/InitiateFirebase";

type Props = {};
export default class App extends Component<Props> {
  async componentWillMount(){
    await initializeFirebase();
    console.disableYellowBox = true
  }
  render() {
    return (
      <StackRouter/>
    );
  }
}
