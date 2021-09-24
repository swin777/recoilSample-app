import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {currentUserInfoQuery, friendsInfoQuery, currentUserIDState} from "../states/UserState"

export default function CurrentUserInfoDataFlow() {
    const currentUser = useRecoilValue(currentUserInfoQuery);
    const friends = useRecoilValue(friendsInfoQuery);
    const setCurrentUserID = useSetRecoilState(currentUserIDState);

    return (
        <div>
        <h1>{currentUser.name}</h1>
        <ul>
            {friends.map((friend:any) => (
            <li key={friend.id} onClick={() => setCurrentUserID(friend.id)}>
                {friend.name}
            </li>
            ))}
        </ul>
        </div>
    );
}