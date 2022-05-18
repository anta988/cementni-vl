import Card from "../UI/Card";
import colorplast from '../assets/colorplast-36.jpg';
import dekorit from '../assets/dekorit.jpg'
import classes from '../Components/SuggestedProducts.module.css'

const SuggestedProducts = () => {
    return (
        <Card>
            <h1>Preporuceni proizvodi</h1>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis nunc vitae pretium lacinia. Morbi id nulla rutrum, laoreet quam eu, fringilla erat. Nullam lacinia risus sapien, in tempor neque efficitur a. Curabitur ut rhoncus ligula, quis eleifend ex. Sed interdum mauris magna, vel auctor odio venenatis ac. Integer id erat velit.</p>
                <p> Suspendisse eu porta quam, vel porta nisi. Aenean volutpat sem mi, nec congue est sollicitudin non. Suspendisse non fermentum diam.</p>
            </div>
            <div className={`${classes.images} centered`}>
                <img src={colorplast} alt='' />
                <img src={dekorit} alt='' />
            </div>
        </Card >
    );
};

export default SuggestedProducts;