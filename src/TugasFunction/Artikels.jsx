import { useEffect, useState } from "react";
import { Row, CardGroup, Button, Col, Container, CardBody, Form, Input, Card, CardImg, CardTitle, CardSubtitle, CardText } from "reactstrap";

const Artikels = () => {
    let [berita, setberita] = useState([]);
    let [kondisi, setkondisi] = useState('');
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?category=technology&q=${kondisi}&apiKey=73991280e5124b388b6c65cf1cac98c8`
        fetch(url)
            .then(res => res.json())
            .then(res => setberita(res.articles))
    }, [kondisi])
    return (
        <div>
            <Container>
                <div className="my-5">
                    <Form>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="12" xl="12">
                                <Input
                                    type="text"
                                    name="kondisi"
                                    onChange={(e) => setkondisi(e.target.value)} />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <CardGroup>
                    <Row>
                        {berita.map((item, i) =>
                            <Col sm="6" md="4" className="my-5" key={i}>
                                <Card>
                                    <CardImg
                                        alt="Card image cap"
                                        src={item.urlToImage}
                                        top
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {item.title}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {item.publishedAt}
                                        </CardSubtitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {item.author}
                                        </CardSubtitle>
                                        <CardText>
                                            {item.description}
                                        </CardText>
                                        <Button
                                            color="success"
                                        >
                                            Read More
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </CardGroup>
            </Container>
        </div>
    )
}
export default Artikels;