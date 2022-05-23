import { Fragment } from "react";
import Card from "../../UI/Card";
import classes from './Certificates.module.css';
import { useDispatch } from "react-redux";
import { imgAction } from "../../store/img-slice";

const DUMMY_DATA = [
    {
        img: require('../../assets/ISO_14001_1996.jpg'),
        name: 'ISO 14001:1996',
        description: `<strong>DRUŠTVO ZA SERTIFIKACIJU I NADZOR SISTEMA KVALITETA d.o.o.<br/>
        ORGANIZATION FOR QUALITY SYSTEMS CERTIFICATION</strong><br/>
        <em>Trg Republike 3/1, Belgrade, Serbia &amp; Montenegro<br/>
        on the basic of the environmental management system audit<br/>
        report no. I-536/04<br/>
        issues the</em><br/>
        <strong>CERTIFICATE</strong><br/>
        <em>Reg. no. 0243<br/>
        by which it is certified that the environmental management system<br/>
        established and applied by</em><br/>
        <strong>Cementni Proizvodi<br/>
        Vlasotince<br/>
        Industrijska zona b.b.</strong><br/>
        <em>is in compliance with the international standard</em><br/>
        <strong>ISO 14001:1996</strong><br/>
        <em>and it refers to the</em><br/>
        <strong>whole enterprise</strong><br/>
        <em>Field of activity</em><br/>
        <strong>production of powdery and paste materials<br/>
        and concrete prefabricated products</strong>`,
        certificatedBy: `<em>Belgrade</em></br>
        <strong>5. July, 2004</strong></br> 
        <em>President of certification committee</br>
        Antonije Laketić</em>`,
        validation: `<em>This certificate is valid until</em><br>
        <strong>4. July, 2007</strong><br>
        <em>Manager of YUQS-a<br>
        Sofia Djurdjević</em>`

    },
    {
        img: require('../../assets/JUS_ISO_14001_1997.jpg'),
        name: 'JUS ISO 14001:1997',
        description: `<strong>DRUŠTVO ZA SERTIFIKACIJU I NADZOR SISTEMA KVALITETA d.o.o.<br/>
        ORGANIZATION FOR QUALITY SYSTEMS CERTIFICATION</strong><br/>
        <em>Trg Republike 3/1, Beograd, Srbija i Crna Gora<br/>
        na osnovu izveštaja o ocenjivanju<br/>
        sistema upravljanja zaštitom životne sredine broj I-536/04<br/>
        izdaje</em><br/>
        <strong>SERTIFIKAT</strong><br/>
        <em>Reg. br. 0243<br/>
        kojim se potvrđuje da je sistem upravljanja zaštitom životne sredine<br/>
        koji je uspostavilo i primenjuje</em><br/>
        <strong>Cementni Proizvodi<br/>
        Vlasotince<br/>
        Industrijska zona b.b.</strong><br/>
        <em>u saglasnosti sa međunarodnim standardom</em><br/>
        <strong>JUS ISO 14001:1997</strong><br/>
        <em>i odnosi se na</em></br> 
        <strong>celu organizaciju</strong><br/>
        <em>Delokrug rada</em><br/>
        <strong>proizvodnja praškastih i pastoznih materijala<br/>
        i betonskih prefabrikata</strong>`,
        certificatedBy: `<em>Belgrade</em></br>
        <strong>05. 07. 2004. godine</strong></br> 
        <em>Predsednik sertifikacione komisije</br>
        Antonije Laketić</em>`,
        validation: `<em>Ovaj sertifikat važi do</em><br>
        <strong>04. 07. 2007. godine</strong><br>
        <em>Direktor JUQS-a<br>
        Sofia Djurdjević</em>`
    },
    {
        img: require('../../assets/JUS_ISO_9002.jpg'),
        name: 'ISO 9001:2000',
        description: `<strong>DRUŠTVO ZA SERTIFIKACIJU I NADZOR SISTEMA KVALITETA d.o.o.<br/>
        ORGANIZATION FOR QUALITY SYSTEMS CERTIFICATION</strong><br/>
        <em>Trg Republike 3/1, Belgrade, FR Yugoslavia<br/>
        on the basic of the quality management system audit report<br/>
        no. I-370/02<br/>
        issues the</em><br/>
        <strong>CERTIFICATE</strong><br/>
        <em>Reg. no. 0146 – IR<br/>
        by which it is certified that the quality management system<br/>
        established and applied by</em><br/>
        <strong>Cementni Proizvodi<br/>
        Vlasotince<br/>
        Industrijska zona b.b.</strong><br/>
        <em>is in compliance with the international standard for<br/>
        quality management systems</em><br/>
        <strong>ISO 9001:2000</strong><br/>
        <em>and it refers to the</em><br/>
        <strong>whole enterprise</strong><br/>
        <em>Field of activity</em><br/>
        <strong>production of powdery and paste materials<br/>
        and concrete prefabricated products</strong>`,
        certificatedBy: `<em>Belgrade</em></br>
        <strong>27. December, 2002</strong></br> 
        <em>President of certification committee</br>
        Antonije Laketić</em>`,
        validation: `<em>This certificate is valid until</em><br>
        <strong>4. July, 2007</strong><br>
        <em>Manager of YUQS-a<br>
        Sofia Djurdjević</em>`
    },
    {
        img: require('../../assets/JUS_ISO_9002.jpg'),
        name: 'JUS ISO 9002',
        description: `<strong>DRUŠTVO ZA SERTIFIKACIJU I NADZOR SISTEMA KVALITETA d.o.o.<br/>
        ASSOCIATION FOR QUALITY SYSTEMS MANAGEMENT</strong><br/>
        <em>Trg Republike 3/1, Beograd, SR Jugoslavija<br/>
        na osnovu izveštaja o ocenjivanju sistema kvaliteta broj I-088/99<br/>
        izdaje</em><br/>
        <strong>SERTIFIKAT</strong><br/>
        <em>>Reg. br. 0028<br/>
        kojim se potvrđuje da je sistem kvaliteta koji je uspostavilo i primenjuje</em><br/>
        <strong>Cementni Proizvodi<br/>
        Vlasotince<br/>
        Industrijska zona b.b.<strong><br/>
        <em>u saglasnosti sa međunarodnim standardom za obezbeđenje kvaliteta</em><br/>
        </strong>JUS ISO 9002</strong><br/>
        <em>i odnosi se na</em><br/>
        <strong>celo preduzeće</strong><br/>
        <em>Delokrug rada</em><br/>
        <strong>proizvodnja praškastih i pastoznih materijala<br/>
        i betonskih prefabrikata</strong>`,
        certificatedBy: `<em>Belgrade</em></br>
        <strong>27. 12. 1999.</strong></br> 
        <em>Predsednik sertifikacione komisije</br>
        Antonije Laketić</em>`,
        validation: `<em>Ovaj sertifikat važi do</em><br>
        <strong>26. 12. 2002.</strong><br>
        <em>Direktor JUQS-a<br>
        Sofia Djurdjević</em>`
    },


]

const Certificates = () => {

    const dispatch = useDispatch();
    const imageClickHandler = (imageUrl) => {
        dispatch(imgAction.showImage({
            img: imageUrl
        }))
    }

    return (
        <Fragment>
            {DUMMY_DATA.map((element) => (
                <Card key={element.name}>
                    <div className={`centered ${classes.certificationCard}`}>
                        <h2>{element.name}</h2>
                        <img src={element.img} alt='Not found!' onClick={() => imageClickHandler(element.img)} />
                        <p dangerouslySetInnerHTML={{ __html: element.description }} ></p>
                        <div className={`${classes.grid}`}>
                            <p dangerouslySetInnerHTML={{ __html: element.certificatedBy }}></p>
                            <p dangerouslySetInnerHTML={{ __html: element.validation }}></p>
                        </div>
                    </div>
                </Card>
            ))
            }
        </Fragment >
    )
}

export default Certificates;