import { Tag, Highlight } from "rbx";

function NavTag({ children }) {
    return (
        <Tag size="small" rounded={true}>
            <Highlight textWeight="bold">{children}</Highlight>
        </Tag>
    )
}

export default NavTag;