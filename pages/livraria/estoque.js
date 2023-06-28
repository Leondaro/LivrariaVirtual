import api from "../../services/api";
import { useState, useEffect } from "react";
import { SectionTitle, TableHead, TableFoot } from "../../components";
import { Column, Level, Generic, Block, Box, Field, Label, Control, Help, Icon, Input, Textarea, File, Button, Table } from "rbx";
import Layout from "./layout";


function Estoque() {
    const [inputs, setInputs] = useState([]);
    const [updates, setUpdates] = useState([]);
    const [idItem, setIdItem] = useState(null);
    const [edit, setEdit] = useState(false);
    const [fileImage, setfileImage] = useState([]);
    //const [previewImg, setPreviewImg] = useState("");
    const [books, setBooks] = useState([]);
    const tableColumns = [
        "Título", 
        "Autor", 
        "Editora", 
        "Gênero", 
        "Ano", 
        "Descrição", 
        "Preço", 
        "Desconto"
    ]

    const handleSelectRow = (e) => {
        handleCleanForm();
        setIdItem(e.target.parentElement.dataset.id);
        setEdit(true);
    }
    const handleCleanForm = () => {
        setIdItem(null);
        setEdit(false);
        setUpdates([]);
        setInputs([]);
        setfileImage([]);
    }
    const handleChange = (e) => {
        setInputs(values => ({...values, [e.target.name]: e.target.value }));
        if (edit) setUpdates(values => ({...values, [e.target.name]: e.target.value }));
    }
    const handleUploadChange = (e) => {
        setfileImage(e.target.files[0])
    }
    useEffect(() => {
        if (idItem !== null)
            books.forEach(book => {
                if (book._id === idItem) setInputs(values => ({ ...values, ...book }));
            });
    }, [idItem])

    useEffect(() => {
        (async () => {
            api.get('/clients')
            .then(response => {
                setBooks(response.data.docs);
            });
        })();
    }, []);

    const HandlerFindBooks = async (e) => {
        e.preventDefault();
        try {
            await api.get('/clients')
            .then(response => {
                setBooks(response.data)
            });
            console.log("data reloaded!")
        } catch (error) {
            console.log(error);
        }
    }
    const HandlerInsertBook = async (e) => {
        e.preventDefault();
        try {
            /*
            if (!fileImage.type.startsWith("image")) {
                console.log("Please select a valide image");
                return;
            }//
            //setPreviewImg(URL.createObjectURL(fileImage));
            /**/
            const formData = new FormData();
            formData.append("fileImage", fileImage);
            formData.append("inputFields", JSON.stringify(inputs));
            
            const { data } = await api.post('/clients', formData);
            handleCleanForm();
            HandlerFindBooks(e);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const HandlerUpdateBook = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("fileImage", fileImage);
            formData.append("inputFields", JSON.stringify(updates));

            const { data } = await api.put(`/clients/${idItem}`, formData);
            handleCleanForm();
            HandlerFindBooks(e);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const HandlerDeleteBook = async (e) => {
        try {
            const { data } = await api.delete(`/clients/${idItem}`);
            handleCleanForm();
            HandlerFindBooks(e);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <Layout name={"Estoque"}>
            <Block>
                <Generic className={"justify-content"}>
                    <Generic className={"home"}>
                        <Box className={"half-width"}>
                            <SectionTitle>Novo Livro</SectionTitle>
                            <Level.Item>
                                <Column size={"10"}>
                                    <form id="cadBook" onSubmit={idItem === null ? HandlerInsertBook : HandlerUpdateBook} encType="multipart/form-data" method="post">
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Capa</Label>
                                                <Control>
                                                    <File hasName={true}>
                                                        <File.Label>
                                                            <File.Input name="bookCover" accept="image/*" onChange={handleUploadChange}></File.Input>
                                                            <File.CTA>
                                                                <File.Icon>
                                                                    <i className="fa fa-upload"></i>
                                                                </File.Icon>
                                                                <Generic as="span">Anexar imagem...</Generic>
                                                            </File.CTA>
                                                            <File.Name backgroundColor={"white"}>{fileImage.name || ""}</File.Name>
                                                        </File.Label>
                                                    </File>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Selecione uma imagem válida.</Help>
                                            </Field>
                                        </Block>
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Título</Label>
                                                <Control iconLeft={true}>
                                                    <Icon align={"left"}><i className={"fa fa-book"}></i></Icon>
                                                    <Input type={"text"} name={"titulo"} placeholder={"O título do livro"} 
                                                    value={inputs.titulo || ""} maxlenght={70} onChange={handleChange} ></Input>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Digite um e-mail válido.</Help>
                                            </Field>
                                        </Block>
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Autor</Label>
                                                <Control iconLeft={true}>
                                                    <Icon align={"left"}><i className={"fa fa-user"}></i></Icon>
                                                    <Input type={"text"} name={"autor"} placeholder={"O autor do livro"} 
                                                    value={inputs.autor || ""} maxlenght={60} onChange={handleChange} ></Input>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Digite um nome válido.</Help>
                                            </Field>
                                        </Block>
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Editora</Label>
                                                <Control iconLeft={true}>
                                                    <Icon align={"left"}><i className={"fa fa-building"}></i></Icon>
                                                    <Input type={"text"} name={"editora"} placeholder={"A editora do livro"} 
                                                    value={inputs.editora || ""} maxlenght={30} onChange={handleChange} ></Input>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Digite um nome válido.</Help>
                                            </Field>
                                        </Block>
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Gênero</Label>
                                                <Control iconLeft={true}>
                                                    <Icon align={"left"}><i className={"fa fa-tag"}></i></Icon>
                                                    <Input type={"text"} name={"genero"} placeholder={"O tipo literário do livro"} 
                                                    value={inputs.genero || ""} maxlenght={30} onChange={handleChange} ></Input>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Digite uma categoria válido.</Help>
                                            </Field>
                                        </Block>
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Ano</Label>
                                                <Control iconLeft={true}>
                                                    <Icon align={"left"}><i className={"fa fa-calendar"}></i></Icon>
                                                    <Input type={"text"} name={"ano"} placeholder={"O ano de lançamento do livro"} 
                                                    value={inputs.ano || ""} maxlenght={4} onChange={handleChange} ></Input>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Digite um ano válido.</Help>
                                            </Field>
                                        </Block>
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Preço</Label>
                                                <Control iconLeft={true}>
                                                    <Icon align={"left"}><i className={"fa fa-usd"}></i></Icon>
                                                    <Input type={"text"} name={"preco"} placeholder={"O preço do livro"} 
                                                    value={inputs.preco || ""} maxlenght={5} onChange={handleChange} ></Input>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Digite um preço válido.</Help>
                                            </Field>
                                        </Block>
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Desconto</Label>
                                                <Control iconLeft={true}>
                                                    <Icon align={"left"}><i className={"fa fa-percent"}></i></Icon>
                                                    <Input type={"text"} name={"desconto"} placeholder={"O desconto do livro, se houver (%)"} 
                                                    value={inputs.desconto || ""} maxlenght={3} onChange={handleChange} ></Input>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Digite um valor válido.</Help>
                                            </Field>
                                        </Block>
                                        <Block>
                                            <Field>
                                                <Label textColor="white">Descrição</Label>
                                                <Control iconLeft={true}>
                                                    <Textarea name={"descricao"} placeholder={"Uma breve descrição sobre o livro"} 
                                                    value={inputs.descricao || ""} onChange={handleChange} ></Textarea>
                                                </Control>
                                                <Help textColor="danger" hidden={true}>Escreva um texto válido.</Help>
                                            </Field>
                                        </Block>
                                        <Level.Item className="space-around">
                                            <Button color={"warning"} onClick={HandlerDeleteBook}>DELETAR !</Button>
                                            <Button color={"warning"} onClick={handleCleanForm}>CANCELAR !</Button>
                                            <Button color={"warning"} type="submit" >MANDAR ME !</Button>
                                        </Level.Item>
                                    </form>
                                </Column>
                            </Level.Item>
                        </Box>
                    </Generic>
                </Generic>

                <Level className={"justify-content"}>
                    <Generic className={"home"}>
                        <Column>
                            <Box>
                                <SectionTitle>Estoque</SectionTitle>
                                <Level.Item>
                                    <Table backgroundColor={"grey-lighter"} hoverable={true} onLoad={HandlerFindBooks}>
                                        <TableHead columns={tableColumns} />
                                        <TableFoot columns={tableColumns} />
                                        <Table.Body>
                                            {
                                                books.map((book, index) =>
                                                    <Table.Row key={index} data-id={book._id} onClick={handleSelectRow} >
                                                        <Table.Cell >{book.titulo}</Table.Cell>
                                                        <Table.Cell>{book.autor}</Table.Cell>
                                                        <Table.Cell>{book.editora}</Table.Cell>
                                                        <Table.Cell>{book.genero}</Table.Cell>
                                                        <Table.Cell>{book.ano}</Table.Cell>
                                                        <Table.Cell>{book.capa}</Table.Cell>
                                                        <Table.Cell>{book.preco}</Table.Cell>
                                                        <Table.Cell>{book.desconto}</Table.Cell>
                                                    </Table.Row>
                                                )
                                            }
                                        </Table.Body>
                                    </Table>
                                </Level.Item>
                            </Box>
                        </Column>
                    </Generic>
                </Level>
            </Block>
        </Layout>
    )
}

export default Estoque;