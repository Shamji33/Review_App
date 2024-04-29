import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';

function Review_list() {

  const navigate = useNavigate();

  var review_data= JSON.parse(localStorage.getItem("review_data"));
  console.log(review_data);


  const handleDelete =()=>{
    //Data was deleted when id was creating but this time i don't complete..

  }

  const handleEdit=()=>{
     //Data was Edited when id was creating but this time i don't complete..
    navigate('/Edit')

  }

  return (
    <div className="container mt-5 ">
        <div className="row">
            <h2 className='mb-5 text-center text-danger'>
                Review List
            </h2>
            
        <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th >Title</th>
          <th>Rating</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{review_data.title}</td>
          <td>{review_data.rating}</td>
          <td>{review_data.description}</td>
          <td>
            <Button variant="danger me-5" onClick={handleDelete}>Delete</Button>
            <Button variant="success" onClick={handleEdit}>Edit</Button>
          </td>
        </tr>

      </tbody>
    </Table>
        </div>
    </div>
  );
}

export default Review_list;