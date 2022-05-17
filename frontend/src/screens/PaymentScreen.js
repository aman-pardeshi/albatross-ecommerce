import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../redux/actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) navigate('./shipping');

  const paymentArray = [
    'PayPal',
    'Stripe',
    'Debit Card',
    'Credit Card',
    'Bitcoin',
    'UPI',
  ];
  const [paymentMethod, setPaymentMethod] = useState(paymentArray[0]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>{' '}
          {paymentArray.map((element, index) => (
            <Col key={index}>
              <Form.Check
                type='radio'
                label={element}
                id={element}
                name='paymentMethod'
                value={element}
                onChange={(e) => setPaymentMethod(element)}
              ></Form.Check>
            </Col>
          ))}
        </Form.Group>
        <Button type='submit' varient='primary' className='mt-3'>
          Countinue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
