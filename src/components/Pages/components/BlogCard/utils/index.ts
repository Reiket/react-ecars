import {AiOutlineCalendar, AiOutlineEye} from 'react-icons/ai';
import {RiPriceTag3Line} from 'react-icons/ri';
import {formatDate} from "../../../../../shared/utils";

export const newsCardList = (added: string, views: number) => ([
    {
        text: formatDate(added),
        icon: AiOutlineCalendar
    },
    {
        text: `${views} views`,
        icon: AiOutlineEye
    },
    {
        text: "tips, new car, UAE, Dubai",
        icon: RiPriceTag3Line
    },
]);