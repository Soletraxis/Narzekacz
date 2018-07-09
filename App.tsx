import React from 'react';
import { Component } from 'react';
import StackRouter from 'Config/stackRouter';

type Props = {};
export default class App extends Component<Props> {
  async componentWillMount(){
    console.disableYellowBox = true
  }
  render() {
    return (
      <StackRouter/>
    );
  }
}
