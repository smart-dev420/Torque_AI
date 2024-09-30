import { ReactElement } from "react";
import {
    useContext,
} from "react";
import { ThemeContext } from "../../components/Theme/context";
export const ItemCreatives: React.FC<{icon:ReactElement , title: string, content: string}> = ({icon, title, content }) => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className="flex flex-row gap-[8px] text-left rounded-[4px] p-[8px] w-full justify-between " style={{backgroundColor:themeContext?.theme.activeColor}} >
            <div className="font-b5-500 self-center ">{icon} {title}</div>
            <div className="font-button-700 ">{content}</div>
        </div>
    );
}