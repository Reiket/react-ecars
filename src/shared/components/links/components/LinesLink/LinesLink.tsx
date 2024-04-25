import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import RouterLink from "../../RouterLink";
import Text from "../../../Title/Text";
import {ROUTES} from "../../../../../app/router/router";

const LinesLink: React.FC = () => {
    return <RouterLink url={ROUTES.blog} classnames={"lines-link"}>
        <div className="lines-link__circle">
            <RiArrowRightLine/>
        </div>
        <Text text={"All articles"} classnames={"lines-link__text"}/>
    </RouterLink>
};

export default LinesLink;