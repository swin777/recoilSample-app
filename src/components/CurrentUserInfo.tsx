import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserNameState, currentUserNameQuery, userInfoQuery, currentUserIDState, userInfoQueryRequestIDState, userInfoQuery2} from "../states/UserState"

export default function CurrentUserInfo() {
    const userName:any = useRecoilValue(currentUserNameQuery);
    return <div style={{padding:10}}>{userName}</div>;
}