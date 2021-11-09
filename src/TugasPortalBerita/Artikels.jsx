import React from "react";
import { Form, Spinner, Row, Col, Container, CardGroup, CardTitle, CardBody, CardImg, Card, CardSubtitle, CardText, Button, Input } from "reactstrap";

export default class Artikels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            kondisi:''
        }
    }
    componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?category=technology&q=${this.state.kondisi}&apiKey=73991280e5124b388b6c65cf1cac98c8`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.articles
                })
            });
            
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.componentDidMount(this.state.kondisi);
    }
    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return (
                <Spinner>Loading... </Spinner>
            )
        } else {
            return (
                <div>
                    <Container>
                        <div className="my-5">
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col xs="9" sm="10" md="10" lg="11" xl="11">
                                        <Input 
                                        type="text" 
                                        name="kondisi" 
                                        onChange={value => this.setState({kondisi: value.target.value})}/>
                                    </Col>
                                    <Col xs="2" sm="2" md="2" lg="1" xl="1">
                                        <Button
                                            color="success"
                                        >Search</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <CardGroup>
                            <Row>
                                {items.map((item, i) => 
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

    }
}