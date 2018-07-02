import React from 'react';
import { Component } from 'react';
import StackRouter from './app/config/stackRouter';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StackRouter/>
    );
  }
}
