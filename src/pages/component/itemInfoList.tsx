import { ReactElement } from "react";

export const ItemInfoList: React.FC<{icon:ReactElement , title: string, content: string}> = ({icon, title, content }) => {

    return (
        <div className="flex flex-row gap-[8px] text-left rounded-[4px] p-[8px] w-full justify-between border-[1px] border-[#666666]" >
            <div className="font-b5-500 ">{icon} {title}</div>
            <div className="font-button-700 text-[#D9DCFB]">{content}</div>
        </div>
    );
}