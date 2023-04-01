function TableFoot({columns}) {
    return (
        <>
            <tfoot className="has-background-burgundy">
                <tr>
                    {columns.map((column) => 
                        <th key={column} >{column}</th>
                    )}
                </tr>
            </tfoot>
        </>
    )
}

export default TableFoot;