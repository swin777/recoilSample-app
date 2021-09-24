import { useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserIDState, currentUserInfoQuery, friendsInfoQuery, userInfoQuery } from "../states/UserState";

export default function CurrentUserInfoPreFetch() {
    const currentUser = useRecoilValue(currentUserInfoQuery);
    const friends = useRecoilValue(friendsInfoQuery);

    const setCurrId = useSetRecoilState(currentUserIDState)
  
    const changeUser = useRecoilCallback(({snapshot, set}:any) => (userID:number) => {
      snapshot.getLoadable(userInfoQuery(userID)); // pre-fetch user info
      set(currentUserIDState, userID); // change current user to start new render
    });

    const onClickHander = (friendId:any) => {
        setCurrId(friendId);
    }
  
    return (
      <div>
        <h1>{currentUser.name}</h1>
        <ul>
          {friends.map((friend:any) => (
            <li key={friend.id} onClick={() => changeUser(friend.id)}>
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  