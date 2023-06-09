import { Navbar, Highlight } from "rbx";

function MenuBurger({ targetEl }) {
    const handleClick = (e) => {
        const burgerBtn = e.target;
        const menuId = burgerBtn.dataset.target;
        const menuContent = document.getElementById(menuId);
        
        burgerBtn.classList.toggle("is-active");
        menuContent.classList.toggle("is-active");
    }

    return (
        <Navbar.Burger textColor="warning" aria-label="menu" aria-expanded="false" data-target={targetEl} onClick={handleClick}>
            <Highlight as="span" aria-hidden="true"></Highlight>
            <Highlight as="span" aria-hidden="true"></Highlight>
            <Highlight as="span" aria-hidden="true"></Highlight>
        </Navbar.Burger>
    );
}

export default MenuBurger;