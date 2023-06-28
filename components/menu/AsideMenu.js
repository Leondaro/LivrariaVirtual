import { useFilter } from "../../hooks/useFilter";
import { useBooks } from "../../hooks/useBooks";
import { Generic, Box, Column, Highlight, Level, Navbar, Button } from "rbx";
import MenuBurger from "./MenuBurger";


function AsideMenu({ children }) {
    const { type, changeType } = useFilter();
    const { updateBooks } = useBooks();
    
    const handleChangeCategory = (category) => {
        changeType(category);
        updateBooks(category);
    }

    return(
        <Column>
            <Box as="aside">
                <Navbar.Brand>
                    <Level marginless={true} className="max-width">
                        <Level.Item>
                            <Highlight textColor="info">Categorias</Highlight>
                        </Level.Item>
                        <MenuBurger targetEl={"asideMenu"} />
                    </Level>
                </Navbar.Brand>
                <Navbar.Menu id="asideMenu">
                    <Generic as="ul" className="aside-list">
                            {children.map((category, index) => {
                                return (
                                    <Button as="li" marginless={true} key={index} 
                                    className={category === type ? "selected" : ''} 
                                    onClick={() => { handleChangeCategory(category); }}>
                                        <Highlight textColor="white">{category}</Highlight>
                                    </Button>
                                );
                            })}
                    </Generic>
                </Navbar.Menu>
            </Box>
        </Column>
    )
}

export default AsideMenu;