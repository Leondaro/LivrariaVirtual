function NavLink({ children, href, color }) {
    return (
        <a href={href} className={"button is-outlined "+color}>
            {children}
        </a>
    )
}

export default NavLink;