function TableHead({columns}) {
    return (
        <>
            <thead className="has-background-burgundy">
                <tr >
                    {columns.map((column) => 
                        <th key={column} >{column}</th>
                    )}
                </tr>
            </thead>
        </>
    )
}

export default TableHead;