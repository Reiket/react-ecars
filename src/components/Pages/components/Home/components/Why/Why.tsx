import React from 'react';
import Title from "../../../../../../shared/components/Title/Title";
import Text from "../../../../../../shared/components/Title/Text";
import ItemTitle from "../../../../../../shared/components/Title/ItemTitle";
const amountItems = 3;
const Why: React.FC = () => {
    return (
        <section className="section__why why">
            <div className="why__container">
                <div className="why__body">
                    <div className="why__image">
                        <img src="/assets/image/why/01.png" alt="whyImage"/>
                    </div>
                    <div className="why__content">
                        <Title text={"Why choose us"} classnames={"why__title"}/>
                        <div className="why__paragraphs">
                            <Text text={"Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque. Pellentesque habitant morbi tristique senectus et. Eget gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit adipiscing bibendum. "}/>
                            <Text text={"Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat id porta nibh venenatis cras sed."}/>
                        </div>
                        <ul className="why__advantages advantages-why">
                            {[...Array(amountItems)].map((_, id) => (
                                <li key={id} className="advantages-why__item">
                                    <ItemTitle classnames={"advantages-why__title"} text={"Some headline"} size={"small"}/>
                                    <p className="advantages-why__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;