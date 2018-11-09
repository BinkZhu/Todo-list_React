import React, { Component } from 'react';
import { Button, ButtonGroup, Icon } from '@QCFE/lego-ui';

class Filter extends Component {
  changeShowing = (e) => {
    const { nowShowing } = e.target.dataset;

    this.props.changeShowing(nowShowing);
  }

  render() {
    const { nowShowing } = this.props;

    return (
      <ButtonGroup className="btngroup">
      <Button 
        type="default"
        disabled={nowShowing === 'all'}
        onClick={this.changeShowing}
        data-now-showing="all"
        >
        All
      </Button>
      <Button 
        type="default"
        disabled={nowShowing === 'active'}
        onClick={this.changeShowing}
        data-now-showing="active"
        >
        Active
      </Button>
      <Button 
        type="default"
        disabled={nowShowing === 'complete'}
        onClick={this.changeShowing}
        data-now-showing="completed"
        >
        Completed
      </Button>
    </ButtonGroup>
      // <ul className="todo-filter">
      //   <li
      //     className={nowShowing === 'all' ? 'current' : ''}
      //     onClick={this.changeShowing}
      //     data-now-showing="all"
      //   >
      //     all
      //   </li>
      //   <li
      //     className={nowShowing === 'active' ? 'current' : ''}
      //     onClick={this.changeShowing}
      //     data-now-showing="active"
      //   >
      //     active
      //   </li>
      //   <li
      //     className={nowShowing === 'completed' ? 'current' : ''}
      //     onClick={this.changeShowing}
      //     data-now-showing="completed"
      //   >
      //     completed
      //   </li>
      // </ul>
    );
  }
}

export default Filter;