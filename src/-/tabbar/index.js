import { observer } from 'mobx-react';
import React from 'react';

import authStore from '../authStore';
import callStore from '../callStore';
import FooterTabs from '../components-Home/FooterTabs';
import routerStore from '../routerStore';

@observer
class View extends React.Component {
  render() {
    return (
      <FooterTabs
        chatsEnabled={authStore.profile?.ucEnabled}
        pressCallsManage={routerStore.goToCallsManage}
        pressCallsRecent={routerStore.goToCallsRecent}
        pressCallsCreate={routerStore.goToCallsCreate}
        pressSettings={routerStore.goToSettings}
        pressUsers={routerStore.goToUsersBrowse}
        pressChats={routerStore.goToChatsRecent}
        pressBooks={routerStore.goToPhonebooksBrowse}
        runningIds={callStore.runnings.map(c => c.id)}
      />
    );
  }
}

export default View;