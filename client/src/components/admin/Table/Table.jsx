import React, { useContext } from 'react';
import MainContext from '../../../context/context';
import TableItem from '../TableItem/TableItem';

const Table = () => {
    const {data}=useContext(MainContext)
    return (
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">image</th>
                    <th scope="col">title</th>
                    <th scope="col">price</th>
                    <th scope="col">name</th>
                    <th scope="col">delete</th>
                </tr>
            </thead>
            <tbody>
                {
                data.map((item, index) => {
                    return (
                        <TableItem key={index} item={item} />
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table;