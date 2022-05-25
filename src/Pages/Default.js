import { Fragment } from "react";
import Slider from "../Components/Slider/Slider";
import SuggestedProducts from "../Components/SuggestedProducts";

const Default = () => {
    return (
        <Fragment>
            <Slider />
            <SuggestedProducts />
        </Fragment>
    );
};

export default Default;