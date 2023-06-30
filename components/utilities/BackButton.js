import { Button, Generic, Icon } from "rbx";
import router from "next/router";

const BackButton = () => {
    const handleNavigateToBack = () => {
        router.back();
    }

    return(
        <Button color={"info"} outlined={true} onClick={handleNavigateToBack}>
            <Icon>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Icon>
            <Generic as="span">Voltar</Generic>
        </Button>
    );
}

export default BackButton;