import React, {Component} from 'react';

import Paper from 'material-ui/Paper';

const style = {
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1%',
    marginBottom: '1%',
    padding: '1%',
    width: '800px',
  }
};

export default class Panel extends Component {
  render() {
    return (
      <Paper style={style.paper} zDepth={1}>
        {this.props.children}
      </Paper>
    );
  }
}
