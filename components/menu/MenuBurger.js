function MenuBurger({ targetEl }) {
    const handleClick = (e) => {
        const burgerBtn = e.target;
        const menuId = burgerBtn.dataset.target;
        const menuContent = document.getElementById(menuId);
        
        burgerBtn.classList.toggle("is-active");
        menuContent.classList.toggle("is-active");
    }

    return (
        <>
            <div>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target={targetEl} onClick={handleClick} >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </>
    );
}

export default MenuBurger;