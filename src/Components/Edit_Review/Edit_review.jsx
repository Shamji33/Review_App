import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
function Edit_data() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const[review,setReview] = useState({

    title : '',
    rating : '',
    description : ''
  });

  const handleChange =(event)=>{
    const name =  event.target.name;
    const value = event.target.value;

    setReview(({...review, [name]: value}))

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const uid = Math.floor(Math.random() * 100);
    console.log(uid);
    const id = '';
    setReview(({...review, [id] : uid}))


    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const review_list = [];

    review_list[{...review }]

    console.log(review);
    navigate('/review_table');
    localStorage.setItem('review_data', JSON.stringify(review));

    setReview(
    {
        title : '',
        rating : '',
        description : ''
     }
    )
  }

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
      <Form className='form-container' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3  d-flex justify-content-center">
        <h3 className='text-center mt-4 mb-3'>Review Update</h3>
        <Form.Group as={Col} md="10" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name='title'
            value={review.title}
            placeholder="title here"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="10" controlId="validationCustom02">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            required
            type="text"
            name='rating'
            value={review.rating}
            placeholder="Give Rating"
            onChange={handleChange}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="10" controlId="validationCustom02">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            name='description'
            value={review.description}
            placeholder=" Write Description here"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Button type="submit" className='form-btn'>Submit</Button>
      </Row>
      
    </Form>
      </div>
    </div>
  );
}

export default Edit_data;