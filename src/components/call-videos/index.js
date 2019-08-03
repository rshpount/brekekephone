import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { createModelView } from 'redux-model';

import UI from './ui';

@observer
@createModelView(
  getter => state => ({
    callIds: getter.runningVideos.idsByOrder(state),
    callById: getter.runningVideos.detailMapById(state),
  }),
  action => emit => ({
    //
  }),
)
@observer
class View extends Component {
  render() {
    return <UI callIds={this.props.callIds} resolveCall={this.resolveCall} />;
  }

  resolveCall = id => {
    const call = this.props.callById[id];

    return {
      enabled: call.localVideoEnabled,
      sourceObject: call.remoteVideoStreamObject,
    };
  };
}

export default View;
