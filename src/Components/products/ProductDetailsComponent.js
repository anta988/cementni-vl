import { Fragment, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../UI/Card";
import classes from './ProductDetailsComponent.module.css'
const DUMMY_DATA = [
    {
        img: [require('../../assets/dekorit.jpg')],
        name: 'Dekorit',
        description: 'Dekorativni plastificirani malter na bazi hidrauličnih veziva, mermernog agregata i aditiva.',
        usage: 'Završna dekorativna obrada unutrašnjih zidova.',
        preparation: 'U odgovarajućoj posudi meša se oko 5 minuta 30 kilograma DEKORITA sa 9 litara vode, električnom bušilicom jače snage sa mikser dodatkom. Masa se ostavi da bubri oko 10 minuta. Pred nanošenje se promeša još jednom i nakon toga je spremna za upotrebu.',
        expirationDate: '12 meseci',
        consumption: '2.5',
        unit: 'kg',
        measure: 'm',
        measureUnit: '2'
    },
    {
        img: [require('../../assets/bavalit.jpg'), require('../../assets/akrilplast.jpg'), require('../../assets/dekorit.jpg')],
        name: 'Bavalit jednokomponentni',
        description: 'Dekorativni plastificirani malter na bazi hidrauličnih veziva, mineralnih agregata i aditiva.',
        usage: 'Završna obrada fasadnih zidova. Završni sloj kod politerm sistema toplotne zaštite fasade. Dekorativna obrada unutrašnjih površina objekata.',
        preparation: 'U odgovarajućoj posudi meša se 5 minuta 30 kilograma BAVALITA sa 7-8 litara vode, električnom bušilicom jače snage sa mikser dodatkom. Masa se ostavi da bubri oko 10 minuta. Pred nanošenje se promeša još jednom i nakon toga je spremna za upotrebu.',
        expirationDate: '12 meseci',
        consumption: '3',
        unit: 'kg',
        measure: 'm',
        measureUnit: '2'
    },
    {
        img: [require('../../assets/akrilplast.jpg')],
        name: 'Akrilplast',
        description: 'Dekorativni plastificirani malter na bazi hidrauličnih veziva, mermernog agregata i aditiva.',
        usage: 'Završna dekorativna obrada unutrašnjih zidova.',
        preparation: 'U odgovarajućoj posudi meša se oko 5 minuta 30 kilograma DEKORITA sa 9 litara vode, električnom bušilicom jače snage sa mikser dodatkom. Masa se ostavi da bubri oko 10 minuta. Pred nanošenje se promeša još jednom i nakon toga je spremna za upotrebu.',
        expirationDate: '12 meseci',
        consumption: '5',
        unit: 'kg',
        measure: 'm',
        measureUnit: '2'
    },
    {
        img: [require('../../assets/mermerplast.jpg')],
        name: 'Mermerplast',
        description: 'Dekorativni plastificirani malter na bazi hidrauličnih veziva, mineralnih agregata i aditiva.',
        usage: 'Završna obrada fasadnih zidova. Završni sloj kod politerm sistema toplotne zaštite fasade. Dekorativna obrada unutrašnjih površina objekata.',
        preparation: 'U odgovarajućoj posudi meša se 5 minuta 30 kilograma BAVALITA sa 7-8 litara vode, električnom bušilicom jače snage sa mikser dodatkom. Masa se ostavi da bubri oko 10 minuta. Pred nanošenje se promeša još jednom i nakon toga je spremna za upotrebu.',
        expirationDate: '12 meseci',
        consumption: '1',
        unit: 'kg',
        measure: 'm',
        measureUnit: '2'

    }
]
const ProductDetails = () => {

    const params = useParams()

    const { productId } = params;

    const getSingleProduct = (productId) => {
        let product = DUMMY_DATA.filter((product) => product.name === productId)

        return product.length > 0 ? product[0] : null;
    }
    const product = getSingleProduct(productId);

    const neededInputRef = useRef();
    const [neededConsumationValue, setNeededConsumationValue] = useState(0)
    const consumptionHandler = () => {
        let value = neededInputRef.current.value
        setNeededConsumationValue(value);
    }
    console.log(neededConsumationValue)
    return (
        <Fragment>
            <Card>
                <div className={`centered ${classes.detailWrapper}`}>
                    <h2>{product.name.toUpperCase()}</h2>
                    <div className={classes.imagesWrapper}>
                        {product.img.map((image) => (
                            <img src={image} alt='Not found!' />
                        ))}
                    </div>
                    <p>{product.description}</p>
                    <div>
                        <h3>{product.name.toUpperCase()} - UPOTREBA</h3>
                        <p>{product.usage}</p>
                    </div>
                    <div>
                        <h3>{product.name.toUpperCase()} - PRIPREMA</h3>
                        <p>{product.preparation}</p>
                    </div>
                    <div>
                        <h3>{product.name.toUpperCase()} - POTROŠNJA</h3>
                        <p>{product.consumption} {product.unit}/{product.measure}{<sup>{product.measureUnit}</sup>}</p>
                    </div>
                </div>
                <Card>
                    <div className={`centered ${classes.calculator}`}>
                        <label>Izračunajte potrebnu količinu proizvoda za {product.measure}{<sup>{product.measureUnit}</sup>}</label>
                        <input type='number' step={0.1} min={0} placeholder='Unesite' onChange={consumptionHandler} ref={neededInputRef} />
                        <div className={classes.calculated}>{(neededConsumationValue * product.consumption).toFixed(2)} {product.unit}</div>
                    </div>
                </Card>
            </Card>
        </Fragment>
    );
};

export default ProductDetails;