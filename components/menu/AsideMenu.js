import { useFilter } from "../../hooks/useFilter";
import { useBooks } from "../../hooks/useBooks";
import { usePagination } from "../../hooks/usePagination";
import { Generic, Box, Column, Highlight, Level, Navbar, Button } from "rbx";
import MenuBurger from "./MenuBurger";
import router from "next/router";


function AsideMenu({ children }) {
    const { filter, updateFilter } = useFilter();
    const { updatePage } = usePagination();
    const { updateBooks } = useBooks();


    const handleChangeQueryFilter = (filter) => {
        updateFilter(filter);
        updateBooks({ queryFilter: filter });
        updatePage(1);
        router.push("/livraria/acervo/1");
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
                                    className={category === filter ? "selected" : ''} 
                                    onClick={() => { handleChangeQueryFilter(category); }}>
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