import React from "react";
import { FormGroup, Label, Input, Button, Form, Row, Col, Container} from "reactstrap";
const ShowErrors = ({errors}) => {
    return(
        <ul style={{color: 'red', marginLeft: '-10px', backgroundColor: '#ffd1d1'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
export default class FormRegister extends React.Component{
    state = {
        nama:'',
        gender:'',
        email:'',
        tempatLahir:'',
        tanggalLahir:'',
        password:'',
        errors: []
    }
    handleSubmit = event =>{
        event.preventDefault();
        const {nama,gender,email,tempatLahir,tanggalLahir,password} = this.state;
        let message = [];
        if(email.length === 0){
            message = [...message, 'Email tidak boleh kosong'];
        }
        if(password.length === 0){
            message = [...message, 'Password tidak boleh kosong'];
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())){
            message = [...message, 'Email Tidak Valid']
        }
        if(password.length < 8){
            message = [...message,'Password minimal 8 karakter']
        }
        if(nama.length === 0){
            message = [...message,'Nama tidak boleh kosong']
        }
        if(tanggalLahir.length === 0){
            message = [...message,'Tanggal Lahir tidak boleh kosong']
        }
        if(tempatLahir.length === 0){
            message = [...message,'Tempat Lahir tidak boleh kosong']
        }
        if(gender.length === 0){
            message = [...message,'Jenis Kelamin tidak boleh kosong']
        }
        if(message.length > 0){
            this.setState({
                errors: message
            });
        }else{
            alert(`
            Berhasil registrasi
            `);
            this.setState({
                errors: []
            })
        }
        
    }
    2905
    render(){
        return(
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h4>Form Registrasi</h4>
                        <Row>
                            <Col sm={8} md={8} lg={5}>
                                {
                                    <ShowErrors errors={this.state.errors}/>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8} md={8} lg={5}>
                                <FormGroup>
                                    <Label for="exampleNama">
                                    Nama
                                    </Label>
                                    <Input
                                    id="exampleNama"
                                    name="nama"
                                    placeholder="Nama Lengkap"
                                    type="text"
                                    onChange={ e => this.setState({nama: e.target.value}) } 
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8} md={8} lg={5}>
                                <FormGroup>
                                    <Label>
                                        Tempat Lahir
                                    </Label>
                                    <Input 
                                    type="text" 
                                    id="tempatLahir" 
                                    name="tempatLahir" 
                                    placeholder="Tempat Lahir"
                                    onChange={e=>this.setState({tempatLahir: e.target.value})} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8} md={8} lg={5}>
                                <FormGroup>
                                    <Label>
                                        Tanggal Lahir
                                    </Label>
                                    <Input 
                                    type="date" 
                                    id="tanggalLahir" 
                                    name="tanggalLahir" 
                                    onChange={e=>this.setState({tanggalLahir: e.target.value})} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8} md={8} lg={5}>
                                <FormGroup tag="fieldset">
                                    <Label>
                                        Jenis Kelamin
                                    </Label>
                                    <FormGroup check>
                                    <Input
                                        name="gender"
                                        type="radio"
                                        value="Laki-Laki"
                                        onChange={ e => this.setState({gender: e.target.value})}
                                    />
                                    <Label check>
                                        Laki-Laki
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Input
                                    name="gender"
                                    type="radio"
                                    value="Perempuan"
                                    onChange={ e => this.setState({gender: e.target.value})}
                                />
                                <Label check>
                                    Perempuan
                                </Label>
                                </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8} md={8} lg={5}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                    Email
                                    </Label>
                                    <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    onChange={ e => this.setState({email: e.target.value})}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8} md={8} lg={5}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                    Password
                                    </Label>
                                    <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    onChange={ e => this.setState({password: e.target.value})}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8} md={8} lg={5}>
                                <Button color="warning">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}