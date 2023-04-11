import { isNullOrUndefined } from "util";
import {
    Footer, NavMenu, FieldForm, UploadImgFieldForm, TextFieldForm, UpdateButton, DeleteButton,
    SubmitButton, InputErrorMsg, Section, SectionTitle, TableMenu, TableHead, TableFoot 
} from "../components";
import api from "../services/api";
import { useState, useEffect } from "react";
//import UploadImage from "../helpers/uploadImage";


function Estoque() {
    const [inputs, setInputs] = useState([]);
    const [updates, setUpdates] = useState([]);
    const [item, setItem] = useState([]);
    const [idItem, setIdItem] = useState(null);
    const [edit, setEdit] = useState(false);
    const [fileImage, setfileImage] = useState([]);
    const [previewImg, setPreviewImg] = useState("");
    const [books, setBooks] = useState([]);
    const tableCol = [
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
        //if ((inputs._id === undefined) || (inputs._id === null))
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
        //console.log(idItem);
    }, [idItem])
    /*
    useEffect(() => {
        if (idItem) {
            setUpdates(values => ({ ...values, "fileImage": fileImage }));   
        }
        //console.log(fileImage)
    }, [fileImage])
    
    useEffect(() => {
        if (Object.keys(inputs).length > 0) console.log(updates);
    }, [updates])
    
    useEffect(() => {
        if (Object.keys(inputs).length > 0 && edit) 
        {
            //setUpdates(values => ({...values, []:  }));
            console.log(updates);
        }
    }, [inputs])*/
    /*
    useEffect(() => {
        if (!edit) setIdItem("");
    }, [edit])*/

    useEffect(() => {
        (async () => {
            api.get('/clients')
            .then(({ data }) => {
                console.log("data ready!")
                setBooks(data.content)
            });
        })();
    }, []);

    const HandlerFindBooks = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.get('/clients');
            setBooks(data.content);
            console.log("data reloaded!")
        } catch (error) {
            console.log(error);
        }
    }
    const HandlerInsertBook = async (e) => {
        e.preventDefault();
        try {
            /*console.log(inputs);*/
            /*
            if (!fileImage.type.startsWith("image")) {
                console.log("Please select a valide image");
                return;
            }//
            //setPreviewImg(URL.createObjectURL(fileImage));
            //console.log(fileImage);
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
        <>
            <div>
                <meta name="robots" content="Estoque, follow" />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Site sobre..." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>Livraria Virtual - Estoque</title>
            </div>
            <header>
                <NavMenu />
            </header>
            <Section>
                <SectionTitle title="Novo Livro" />
                <div className="level-item">
                    <div className="column is-10">
                        <form id="cadBook" onSubmit={ idItem === null ? HandlerInsertBook : HandlerUpdateBook } encType="multipart/form-data" method="post">
                            <UploadImgFieldForm label="Capa" inputName="bookCover" value={fileImage}
                            typeImages="image/*" handleChange={handleUploadChange} /> 
                            <InputErrorMsg errorMsg="Selecione uma imagem válida." />

                            <FieldForm label="Título" inputType="text" inputName="titulo" 
                            placeholder="O título do livro" value={inputs.titulo} maxLenght="70" icon="book" 
                            handleChange={handleChange} />
                            <InputErrorMsg errorMsg="Digite um e-mail válido." />
                    
                            <FieldForm label="Autor" inputType="text" inputName="autor" 
                            placeholder="O autor do livro" value={inputs.autor} maxLenght="60" icon="user" 
                            handleChange={handleChange} />
                            <InputErrorMsg errorMsg="Digite um nome válido." />
                    
                            <FieldForm label="Editora" inputType="text" inputName="editora" 
                            placeholder="A editora do livro" value={inputs.editora} maxLenght="30" icon="building" 
                            handleChange={handleChange} />
                            <InputErrorMsg errorMsg="Digite um nome válido." />
                    
                            <FieldForm label="Gênero" inputType="text" inputName="genero" 
                            placeholder="O tipo literário do livro" value={inputs.genero} maxLenght="30" icon="tag" 
                            handleChange={handleChange} />
                            <InputErrorMsg errorMsg="Digite uma categoria válida." />
                    
                            <FieldForm label="Ano" inputType="text" inputName="ano" 
                            placeholder="O ano de lançamento do livro" value={inputs.ano} maxLenght="4" icon="calendar-alt" 
                            handleChange={handleChange} />
                            <InputErrorMsg errorMsg="Digite um ano válido." />
                    
                            <FieldForm label="Preço" inputType="text" inputName="preco" 
                            placeholder="O preço do livro" value={inputs.preco} maxLenght="5" icon="dolar-sign" 
                            handleChange={handleChange} />
                            <InputErrorMsg errorMsg="Digite um preço válido." />
                    
                            <FieldForm label="Desconto" inputType="text" inputName="desconto" 
                            placeholder="O desconto do livro, se houver (%)" value={inputs.desconto} maxLenght="3" 
                            icon="percent-sign" handleChange={handleChange} />
                            <InputErrorMsg errorMsg="Digite um valor válido." />

                            <TextFieldForm label="Descrição" inputName="descricao" placeholder="Uma breve descrição sobre o livro" 
                            value={inputs.descricao} handleChange={handleChange} />
                            <InputErrorMsg errorMsg="Escreva um texto válido." />
                    
                            
                            <button className="button is-warning" type="button" onClick={HandlerDeleteBook} > DELETAR ! </button>
                            <button className="button is-warning" type="button" onClick={handleCleanForm} > CANCELAR ! </button>
                            {/*<SubmitButton /
                            <a className="button is-warning" onClick={() => console.log(idItem)} > CHECAR ME! </a>
                            >*/}
                            <button className="button is-warning" type="submit" > MANDAR ME! </button>
                        </form>
                    </div>
                </div>
                
                <SectionTitle title="Estoque" />
                <div className="level-item">
                    <div className="table-container">
                        <table onLoad={HandlerFindBooks} className="table is-hoverable has-background-grey-lighter">
                            <TableHead columns={tableCol} />
                            <TableFoot columns={tableCol} />
                            <tbody>
                                {
                                    books.map((book, index) =>
                                        <tr key={index} data-id={book._id} onClick={handleSelectRow} >
                                            <td >{book.titulo}</td>
                                            <td>{book.autor}</td>
                                            <td>{book.editora}</td>
                                            <td>{book.genero}</td>
                                            <td>{book.ano}</td>
                                            <td>{book.capa}</td>
                                            <td>{book.preco}</td>
                                            <td>{book.desconto}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}

export default Estoque;