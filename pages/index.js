import { React, useState } from "react";
import SingIn from "../components/SingIn";

function Login() {
    return (
        <>
            <div>
                <meta name="robots" content="Index, follow" />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Site sobre..." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>Bem-Vindo! - Livraria Virtual</title>
            </div>
            <SingIn />
        </>
    );
}

function UploadForm() {
    const [image, setImage] = useState('');

    const uploadImage = async e => {
        e.preventDefault();
        console.log(image);
    }

    return (
        <form className="container" onSubmit={uploadImage}>
            <div className="level">
                <input type="file" name="image" onChange={e => setImage(e.target.files[0])} />
            </div>
            <div className="level">
                <button type="submit">Enviar</button>
            </div>
        </form>
    );
}

export default Login;