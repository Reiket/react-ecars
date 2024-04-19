import React from 'react';
import BrandsCard from "./components/BrandsCard/BrandsCard";
import {useAppDispatch, useAppSelector} from "../../../../../../app/store/hooks";
import {Icons} from "../../../../../../shared/components/Icons/Icons";
import {Title} from "../../../../../../shared/components/Title/Title";
import BrandsShow from "./components/BrandsShow/BrandsShow";
import Section from "../../../../../../shared/components/Section/Section";
import {fetchBrands} from "./store/thunks/fetchBrands";
import {brandsSelector, hasMoreSelector, isLoadingSelector} from "./store/selectors/brands-selectors";
import {actions} from "./store/actions/brands-actions";
import Container from "../../../../../../shared/components/Container/Container";

const Brands: React.FC = () => {
    const brands = useAppSelector(brandsSelector)
    const isLoading = useAppSelector(isLoadingSelector)
    const hasMore = useAppSelector(hasMoreSelector)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(fetchBrands(hasMore))
    }, [dispatch, hasMore])
    const onClickToShowAll = () => {
        dispatch(actions.toggleMore(!hasMore))
    };
    return  <Section name={"brands"} classnames={"section-home-page"}>
        <Container classnames={"brands"}>
            <Title tag={"h2"} classnames={"home-title"} text={"Browse by brand"}/>
            <div className={"brands__body"}>
                {!isLoading ? brands.map(brand => <BrandsCard key={brand.id} {...brand.attributes}/>) : <Icons.loader/>}
            </div>
            <BrandsShow isShowAll={hasMore} onClickToShowAll={onClickToShowAll}/>
        </Container>
    </Section>
};

export default Brands;

