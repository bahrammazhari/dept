import abn from "../../assets/images/clients/abn.svg"
import adidas from "../../assets/images/clients/adidas.svg"
import klm from "../../assets/images/clients/klm.svg"
import microsoft from "../../assets/images/clients/microsoft.svg"
import mona from "../../assets/images/clients/mona.svg"
import nationale from "../../assets/images/clients/nationale.svg"
import nivea from "../../assets/images/clients/nivea.svg"
import oxxio from "../../assets/images/clients/oxxio.svg"
import pathe from "../../assets/images/clients/pathe.svg"
import tomtom from "../../assets/images/clients/tomtom.svg"
import transavia from "../../assets/images/clients/transavia.svg"
import triumph from "../../assets/images/clients/triumph.svg"
import unilever from "../../assets/images/clients/unilever.svg"
import walibi from "../../assets/images/clients/walibi.svg"
import zalando from "../../assets/images/clients/zalando.svg"
import ziggo from "../../assets/images/clients/ziggo.svg"
export interface Clients{
    name:string;
    image:string;
}

/**
 * CLIENTS - A list of clients
 * @type {Array<Clients>}
 */
const CLIENTS:Clients[] = [
    {
        name: "nivea",
        image: nivea
    },
    {
        name: "mona",
        image: mona
    },
    {
        name: "transavia",
        image: transavia
    },
    {
        name: "zalando",
        image: zalando
    },
    {
        name: "tomtom",
        image: tomtom
    },
    {
        name: "unilever",
        image: unilever
    },
    {
        name: "adidas",
        image: adidas
    },
    {
        name: "pathe",
        image: pathe
    },
    {
        name: "abn",
        image: abn
    },
    {
        name: "triumph",
        image: triumph
    },
    {
        name: "microsoft",
        image: microsoft
    },
    {
        name: "oxxio",
        image: oxxio
    },
    {
        name: "nationale",
        image: nationale
    },
    {
        name: "ziggo",
        image: ziggo
    },
    {
        name: "walibi",
        image: walibi
    },
    {
        name: "klm",
        image: klm
    },
]

/**
 * It Shows the Clients
 * @param props - it gets the clients device type from parent by {@link isMobile}
 * @component
 */
function Clients(props:{isMobile:boolean;}) {
    return (
        <section className="clients">
            <h2 className="title">CLIENTS</h2>
            <p>We value a great working relationship with our clients above all else. It’s why they often come to our
                parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
            <div className="row icons">
                {CLIENTS.map((client, index) => (
                    (!props.isMobile ||index<6) && <img width={64} height={30} src={client.image} alt={client.name} className="icon" key={index}/>
                ))}
            </div>
        </section>
    )
}

export default Clients;