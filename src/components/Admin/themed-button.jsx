import React, { Component } from "react";

import {ColorsContext} from './test-provider';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let colors = this.context;
    return (
      <button
        {...props}
        style={{
            backgroundColor: colors.background,
            color: colors.text
        }}
      />
    );
  }
}
ThemedButton.contextType = ColorsContext;

export default ThemedButton;