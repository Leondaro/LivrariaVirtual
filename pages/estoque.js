import {
    Footer, NavMenu, FieldForm, UploadImgFieldForm, TextFieldForm, UpdateButton, DeleteButton,
    SubmitButton, InputErrorMsg, Section, SectionTitle, TableMenu, TableHead, TableFoot 
} from "../components";
import api from "../services/api";
import { useState, useEffect } from "react";
//import UploadImage from "../helpers/uploadImage";


function Estoque() {
    const [inputs, setInputs] = useState([]);
    const [item, setItem] = useState([]);
    const [idItem, setIdItem] = useState(null);
    const [fileImg, setFileImg] = useState([]);
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

    const handleChange = (e) => { 
        setInputs(values => ({...values, [e.target.name]: e.target.value }))
    }
    const handleUploadChange = (e) => {
        setFileImg(e.target.files[0])
    }
/*
    useEffect(() => {
        // COMO FAZER UMA CHAMADA GET DENTRO DE USEEFFECT?
        /*
        (async () => {
            try {
                const { data } = await api.get('/clients');
                setBooks(data.content);                
                //console.log(data);
            } catch (error) {
                console.log(error);                
            }
            //console.log(books);
        })()

        // https://www.facebook.com/rocketseat/videos/j%C3%A1-se-deparou-com-o-erro-de-loop-infinito-em-seu-useeffect/129139478508370/
        // https://morioh.com/p/17935b12ac7e
        // https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900
        // https://pt.stackoverflow.com/questions/523136/loop-de-requisi%C3%A7%C3%B5es-no-useeffect
        api.get('/clients').then( //Promisse dando erro
            () => {
                //setBooks(value => [...value, data.content]);
                console.log(books);
            }
        );
    }, []); 
    */
    useEffect(() => {
        (async () => {
            api.get('/clients')
            .then(({ data }) => {
                console.log("data ready!")
                setBooks(data.content)
            });
        })();
    }, []);

    const HandlerFindBook = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.get('/clients');
            //setBooks(res.data.content);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const HandlerInsertBook = async (e) => {
        e.preventDefault();
        try {
            /*console.log(inputs);*/
            
            if (!fileImg.type.startsWith("image")) {
                console.log("Please select a valide image");
                return;
            }

            //setPreviewImg(URL.createObjectURL(fileImg));
            //console.log(fileImg);
            /**/
            
            /**/
            const formData = new FormData();
            formData.append("fileImage", fileImg);
            formData.append("inputFields", JSON.stringify(inputs));
            //const { data } = await api.post('/clients', formData);
            console.log(formData);
        } catch (error) {
            console.log(error);
        }
    }
    const HandlerUpdateBook = async (e) => {
        e.preventDefault;
        try {
            const res = await api.put(`/clients/${idItem}`, { item });
            console.log(res.data);
            //console.log([idItem, item])
        } catch (error) {
            console.log(error);
        }
    }
    const HandlerDeleteBook = async () => {
        try {
            const res = await api.delete(`/clients/${idItem}`);
            console.log(res.data);
            //console.log(idItem)
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
                <div className="button is-warning" data-value="Valor de teste" onClick={HandlerFindBook} /*onClick={idItem === null ? HandlerInsertBook : HandlerUpdateBook}*/ >CLICK ME!</div>
                {/*}
                <form  >
                    <label>Campo</label>
                    <input type="file" name="imgTest" placeholder="Escolha" onChange={(e) => setFileImg(e.target.files[0])} />
                </form>
                
                <Form idForm="cadLivro" crudForm={true} itemName="Livro" funcSubmit={HandlerInsertBook} />          
                {*/}

                <div className="level-item">
                    <div className="column is-10">
                        <form id="cadBook" onSubmit={HandlerInsertBook} encType="multipart/form-data" >
                            <div className="field mb-5">
                                {/*
                                <label className="label has-text-white">label</label>
                                <div className="file has-name is-fullwidth">
                                    <label className="file-label">
                                        <input type="file" name="imgTest" placeholder="Escolha" onChange={(e) => setFileImg(e.target.files[0])} />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fa fa-upload"></i>
                                            </span>
                                            <span className="file-label">
                                                Anexar imagem…
                                            </span>
                                        </span>
                                        <input className="file-name" defaultValue={fileImg || ""} />
                                    </label>
                                </div>*/}
                            </div>
                             <UploadImgFieldForm label="Capa" inputName="bookCover" value={fileImg}
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
                    
                            {/*<SubmitButton />*/}
                            <button className="button is-warning" type="submit"> MANDAR ME! </button>
                        </form>
                    </div>
                </div>
                
                <SectionTitle title="Estoque" />
                <TableMenu inputContent={item} >
                    <UpdateButton />
                    <DeleteButton onClick={HandlerDeleteBook} idTarget={idItem} />
                </TableMenu>
                <div className="level-item">
                    <div className="table-container">
                        <table onLoad={HandlerFindBook} className="table is-hoverable has-background-grey-lighter">
                            <TableHead columns={tableCol} />
                            <TableFoot columns={tableCol} />
                            <tbody>
                                {
                                    books.map((book, index) =>
                                        <tr key={index}>
                                            <td>{book._id /*.titulo*/}</td>
                                            <td>{book.name /*.autor*/}</td>
                                            <td>{book.orderFromSun /*.editora*/}</td>
                                            <td>{book.hasRings /*.genero*/}</td>
                                            <td>{book.mainAtmosphere[0] /*.ano*/}</td>
                                            <td>{book.mainAtmosphere[1] /*.descricao*/}</td>
                                            <td>{book.mainAtmosphere[2] /*.preco*/}</td>
                                            <td>{book.name /*.desconto*/}</td>
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