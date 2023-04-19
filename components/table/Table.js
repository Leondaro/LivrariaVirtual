import TableHead from "./TableHead"
import TableFoot from "./TableFoot"

function Table({columns, data}) {
    return(
        <>
            <div className="level-item">
                <div className="table-container">
                    <table className="table is-hoverable has-background-grey-lighter">
                        <TableHead columns={columns} />
                        <TableFoot columns={columns} />
                        <tbody>
                            {
                                data.map((book, index) =>
                                    <tr key={index}>
                                        <td>{book._id /*.titulo*/}</td>
                                        <td>{book.name /*.autor*/}</td>
                                        <td>{book.orderFromSun /*.editora*/}</td>
                                        <td>{book.hasRings /*.genero*/}</td>
                                        <td>{book.mainAtmosphere[0] /*.ano*/}</td>
                                        <td>{book.mainAtmosphere[1] /*.descricao*/}</td>
                                        <td>{book.mainAtmosphere[2] /*.preco*/}</td>
                                        <td>{book.name /*.desconto*/}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table;