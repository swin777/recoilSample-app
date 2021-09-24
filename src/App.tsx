import React, {Suspense} from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import CurrentUserInfo from './components/CurrentUserInfo';
import CurrentUserInfoDataFlow from './components/CurrentUserInfoDataFlow';
import CurrentUserInfoPreFetch from './components/CurrentUserInfoPreFetch';
import TodoList from './components/TodoList';
import UserInfo from './components/UserInfo';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      {/* <TodoList/> */}
      <ErrorBoundary>
        <Suspense fallback={<div style={{padding:10}}>Loading...</div>}>
          {/* <CurrentUserInfo /> */}
          {/* <UserInfo userID={0} />
          <UserInfo userID={1} />
          <UserInfo userID={2} /> */}
          {/* <CurrentUserInfoDataFlow/> */}
          <CurrentUserInfoPreFetch/>
        </Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;

// https://codesandbox.io/s/hik7u
// https://codesandbox.io/s/tmc9k
// https://codesandbox.io/s/082nu
