import { useRecoilValue } from "recoil";
import { charCountState } from "../states/CountState";

function CharacterCount() {
const count = useRecoilValue(charCountState);
    return <>Character Count: {count}</>;
}

export default CharacterCount;