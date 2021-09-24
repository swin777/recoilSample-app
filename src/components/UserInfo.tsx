import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { userNameQuery } from "../states/UserState";

export default function UserInfo({userID}:any) {
  const userName = useRecoilValue(userNameQuery(userID));
  return <div style={{padding:10}}>{userName}</div>;
}

// export default function UserInfo({userID}:any) {
//   const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));
//   switch (userNameLoadable.state) {
//     case 'hasValue':
//       return <div style={{padding:10}}>{userNameLoadable.contents}</div>;
//     case 'loading':
//       return <div style={{padding:10}}>로딩이라는 입장이쥬...</div>;
//     case 'hasError':
//       throw userNameLoadable.contents;
//   }
// }