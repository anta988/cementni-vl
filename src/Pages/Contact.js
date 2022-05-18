import Card from "../UI/Card";

const Contact = () => {
    return (
        <Card>
            <div >
                <label>Zemlja:</label>
                <strong>Srbija</strong>
            </div>
            <div >
                <label>Grad:</label>
                <strong>Vlasotince 16210</strong>
            </div>
            <div >
                <label>Ulica</label>
                <strong>Industrijska zona b.b.</strong>
            </div>
            <div >
                <label>Telefon / Fax</label>
                <strong>+381(0)16/875-484</strong>
                <strong>+381(0)16/875-100</strong>
                <strong>+381(0)16/875-928</strong>
            </div>
        </Card>
    );
};

export default Contact;