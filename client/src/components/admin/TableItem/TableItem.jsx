import React, { useContext } from 'react'
import MainContext from '../../../context/context';
import axios from 'axios';

const TableItem = ({item}) => {
  const { data, setData } = useContext(MainContext);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:8080/${id}`).then((res) => {
      if (res.status === 200) {
        const updatedData = data.filter(item => item._id !== id);
        setData(updatedData);
      } else {
        console.error("Failed to delete item");
      }
    }).catch(error => {
      console.error("There was an error deleting the item!", error);
    });
  };
  return (
    <tr>
      <th scope="row">{item._id}</th>
      <td><img src={item.image} alt="" width="60px" height="60px" /></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>{item.name}</td>
      <td>
        <button className='btn btn-danger' onClick={() => deleteItem(item._id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default TableItem