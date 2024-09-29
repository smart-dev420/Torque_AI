import { ReactElement } from "react";

export const ItemList: React.FC<{icon:ReactElement , title: string, content: string}> = ({icon, title, content }) => {

    return (
        <div className="flex flex-col gap-[8px] bg-[#292929] text-left rounded-[2px] p-[8px] w-full" >
            <div className="font-b5-500 ">{icon} {title}</div>
            <div className="font-button-700 text-[#6775F0]">{content}</div>
        </div>
    );
}