import { computed } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';

import g from '../global';
import chatStore from '../global/chatStore';
import contactStore from '../global/contactStore';
import Notify from './Notify';

@observer
class ChatGroupInvite extends React.Component {
  @computed get GroupIds() {
    return chatStore.groups.filter(g => !g.jointed).map(g => g.id);
  }

  static contextTypes = {
    uc: PropTypes.object.isRequired,
  };

  render() {
    return this.GroupIds.map(group => (
      <Notify
        key={group}
        {...this.formatGroup(group)}
        accept={this.accept}
        reject={this.reject}
        type={`inviteChat`}
      />
    ));
  }

  formatGroup = group => {
    const { id, inviter, name } = chatStore.getGroup(group) || {};
    const inviterName = contactStore.getUCUser(inviter)?.name;
    return {
      id: id,
      name,
      inviter: inviterName || inviter,
    };
  };

  //Todo: rejected but existed in chat home => error when click.
  reject = group => {
    this.context.uc
      .leaveChatGroup(group)
      .then(this.onRejectSuccess)
      .catch(this.onRejectFailure);
  };
  onRejectSuccess = res => {
    chatStore.removeGroup(res.id);
  };
  onRejectFailure = err => {
    console.error(err);
    g.showError({ message: `reject the group chat` });
  };

  accept = group => {
    this.context.uc.joinChatGroup(group).catch(this.onAcceptFailure);
  };
  onAcceptFailure = err => {
    console.error(err);
    g.showError({ message: `accept the group chat` });
  };
}

export default ChatGroupInvite;
