
import{Navbar, Container, Nav, Button, Col, Card, Row} from "react-bootstrap"
import {Depresi, Disosiatif, Panik, Stres, Kecemasan, Kepribadian} from "./Imagesrc";
import "../App.css"


const Navs = ({title,imageUrl,body})=>{
   
    return(

    <Row xs={1} md={4} className="g-3">
        
        
        <Col md={4} >
            <Card className="card-image" >
            <Card.Img className="image-container"
                variant="top"
                src={Kecemasan}
            />
            <Card.Body>
                <h6>Apa itu Kecemasan ?</h6>
                <Card.Text>Keluhan pertama yang dialami adalah rasa cemas berlebihan, dimana penderitanya merasa khawatir dan ketakutan secara terus menerus. Kondisi ini bisa terjadi kapan saja, terutama bagi wanita diatas 30 tahun.</Card.Text>
            </Card.Body>
            </Card>
        </Col>    

        <Col md={4} className="mb-4">
            <Card className="shadow" >
            <Card.Img className="image-container"
                variant="top"
                src={Depresi}
            />
            <Card.Body>
                <h6>Apa itu depresi ?</h6>
                <Card.Text>Depresi merupakan sebuah penyakit yang di tandain dengan rasa sedih yang berkepanjangan dan kehilangan minat terhadap kegiatan-kegiatan yang biasanya kita lakukan dengan senang hati.</Card.Text>
            </Card.Body>
            </Card>
        </Col>   

        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" >
            <Card.Img className="image-container"
                variant="top"
                src={Panik}
            />
            <Card.Body>
                <h6>Apa itu Serangan Panik ?</h6>
                <Card.Text>Panik Attack adalah suatu serangan ketakutan yang intens atau kuat, yang akan memicu berbagai gejala fisik yang parah padahal tidak ada bahaya yang nyata atau penyebab yang jelas.</Card.Text>
            </Card.Body>
            </Card> 
        </Col>    

        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" >
            <Card.Img className="image-container"
                variant="top"
                src={Stres}
            />
            <Card.Body>
                <h6>Apa itu Stres ?</h6>
                <Card.Text>Stres adalah reaksi seseorang baik secara fisik maupun emosional (mental/psikis) apabila ada perubahan dari lingkungan yang mengharuskan seseorang menyesuaikan diri.</Card.Text>
            </Card.Body>
            </Card> 
        </Col>    

        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" >
            <Card.Img className="image-container"
                variant="top"
                src={Disosiatif}
            />
            <Card.Body>
                <h6>Apa itu Disosiatif ?</h6>
                <Card.Text>Jenis gangguan mental yang menghilangkan kesinambungan antara pikiran, tindakan, ingatan, hingga identitas. Gangguan ini sering dialami seseorang dengan pengalaman traumatis yang mendalam sebagai bentuk pertahanan diri dari trauma tersebut.</Card.Text>
            </Card.Body>
            </Card> 
        </Col>    

        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" >
            <Card.Img className="image-container"
                variant="top"
                src={Kepribadian}
            />
            <Card.Body>
                <h6>Apa itu Gangguan Kepribadian ?</h6>
                <Card.Text>Gangguan kepribadian (Personality disorder) merupakan kondisi ketika seseorang memiliki pola pikir dan perilaku yang tidak sehat. Saat mengalami gangguan kepribadian, Seseorang akan merasa kesulitan untuk berhubungan dengan orang lain.</Card.Text>
            </Card.Body>
            </Card> 
        </Col>    
        
     
    </Row>    

    
    );
}


export default Navs;