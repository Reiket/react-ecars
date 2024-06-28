import React, {FC} from 'react';
import {cn} from "../../utils";
import Container from "../Container/Container";
import {Title} from "../Title/Title";
import Text from "../Title/Text";
interface Props {
    name: string;
    title: string;
    text?: string
    children: React.ReactNode
}
const Page: FC<Props> = ({name, title, text, children}) => {
    return <div className={cn(`page page__${name}`, name)}>
        <Container classnames={name}>
           <Container classnames={name} size={"big"}>
               <Title tag={"h1"} text={title} classnames={"page-title page-title_text"}/>
               {!!text && <Text text={text} classnames={"text_sub"}/>}
               {children}
           </Container>
        </Container>
    </div>
};

export default Page;