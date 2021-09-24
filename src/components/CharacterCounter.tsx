import { useRecoilState } from "recoil";
import CharacterCount from "./CharacterCount";
import {textState} from "../states/CountState";

function CharacterCounter() {
    return (
        <div>
        <TextInput />
        <CharacterCount />
        </div>
    );
}

function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: any) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    );
}

export default CharacterCounter;