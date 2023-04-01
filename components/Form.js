import UploadImgFieldForm from "./UploadImgFieldForm";
import FieldForm from "./FieldForm";
import TextFieldForm from "./TextFieldForm";
import SubmitButton from "./SubmitButton";
import InputErrorMsg from "./InputErrorMsg";


const Form = ({idForm, crudForm, itemName, funcSubmit}) => {
  const inputCodItem = (itemName) => {
    return <input type="hidden" id={"cod"+itemName} name={"cod"+itemName} />
  }
  
  return (
        <>
          <div className="level-item">
            <div className="column is-10">
              <form id={idForm} onSubmit={funcSubmit}>
                {/*crudForm ? inputCodItem(itemName) : null*/}
                
                <UploadImgFieldForm label="Capa" inputName="bookCover" typeImages="image/*" />
                <InputErrorMsg errorMsg="Selecione uma imagem válida." />

                <FieldForm label="Título" inputType="text" inputName="titulo" 
                placeholder="O título do livro" maxLenght="70" icon="book" />
                <InputErrorMsg errorMsg="Digite um e-mail válido." />
          
                <FieldForm label="Autor" inputType="text" inputName="autor" 
                placeholder="O autor do livro" maxLenght="60" icon="user" />
                <InputErrorMsg errorMsg="Digite um nome válido." />
          
                <FieldForm label="Editora" inputType="text" inputName="editora" 
                placeholder="A editora do livro" maxLenght="30" icon="building" />
                <InputErrorMsg errorMsg="Digite um nome válido." />
          
                <FieldForm label="Gênero" inputType="text" inputName="genero" 
                placeholder="O tipo literário do livro" maxLenght="30" icon="tag" />
                <InputErrorMsg errorMsg="Digite uma categoria válida." />
          
                <FieldForm label="Ano" inputType="text" inputName="ano" 
                placeholder="O ano de lançamento do livro" maxLenght="4" icon="calendar-alt" />
                <InputErrorMsg errorMsg="Digite um ano válido." />
          
                <FieldForm label="Preço" inputType="text" inputName="preco" 
                placeholder="O preço do livro" maxLenght="5" icon="dolar-sign" />
                <InputErrorMsg errorMsg="Digite um preço válido." />
          
                <FieldForm label="Desconto" inputType="text" inputName="desconto" 
                placeholder="O desconto do livro, se houver (%)" maxLenght="3" icon="percent-sign" />
                <InputErrorMsg errorMsg="Digite um valor válido." />

                <TextFieldForm label="Descrição" placeholder="Uma breve descrição sobre o livro" />
                <InputErrorMsg errorMsg="Escreva um texto válido." />
          
                <SubmitButton />
              </form>
            </div>
          </div>
        </>
    )
}

export default Form;