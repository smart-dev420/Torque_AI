import { ReactElement } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";

export const ItemList: React.FC<{icon:ReactElement , title: string, content: string}> = ({icon, title, content }) => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className="flex flex-col gap-[8px] text-left rounded-[2px] p-[8px] w-full" style={{backgroundColor:themeContext?.theme.inputBackground}}>
            <div className="font-b5-500 ">{icon} {title}</div>
            <div className="font-button-700 text-[#6775F0]">{content}</div>
        </div>
    );
}