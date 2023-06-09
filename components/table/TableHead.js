import { Table } from "rbx";

function TableHead({columns}) {
    return (
        <Table.Head>
            <Table.Row>
                {columns.map((column) => 
                    <Table.Cell textColor={"white"} textWeight={"bold"} key={column} >
                        {column}
                    </Table.Cell>
                )}
            </Table.Row>
        </Table.Head>
    )
}

export default TableHead;