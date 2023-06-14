import { Generic, Box, Column, Highlight, Level, Navbar, Button } from "rbx";
import MenuBurger from "./MenuBurger";
import { handleSelectFilter } from "../../hooks/useFilter";


function AsideMenu({ children }) {
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
                    <Button as="li" className="selected" marginless={true} onClick={(e) => { handleSelectFilter(e) }}><Highlight textColor="white" >Todos</Highlight></Button>
                        {children.map((item, index) => {
                            return <Button as="li" marginless={true} key={index} onClick={(e) => { handleSelectFilter(e) }}><Highlight textColor="white">{item}</Highlight></Button>
                        })}
                    </Generic>
                </Navbar.Menu>
            </Box>
        </Column>
    )
}

export default AsideMenu;