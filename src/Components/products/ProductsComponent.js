import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import classes from './ProductsComponent.module.css'

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
        img: [require('../../assets/bavalit.jpg')],
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
        consumption: '2.5',
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
        consumption: '3',
        unit: 'kg',
        measure: 'm',
        measureUnit: '2'

    }
]
const Products = () => {

    return (
        <div className={classes.products}>
            {
                DUMMY_DATA.map((product) => (
                    <Card>
                        <div className={`centered ${classes.card}`}>
                            <img src={product.img[0]} alt='No img found!' />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <Link className="btn" to={`${product.name}`}>Detalji</Link>
                        </div>
                    </Card>
                ))
            }
        </div>
    );
};

export default Products;