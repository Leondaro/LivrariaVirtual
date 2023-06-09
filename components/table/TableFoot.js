import { Table } from "rbx";

function TableFoot({columns}) {
    return (
        <Table.Foot>
            <Table.Row>
                {columns.map((column) => 
                    <Table.Cell textColor={"white"} textWeight={"bold"} key={column} >
                        {column}
                    </Table.Cell>
                )}
            </Table.Row>
        </Table.Foot>
    )
}

export default TableFoot;