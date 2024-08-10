import React, { useState } from 'react';
import '../Styles/Modal.css';
 // Ensure you have a CSS file for styling

const Modal = ({ isOpen, onClose, onConfirm }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    upiId: '',
    upiAmount: '',
    upiPin: '',
  });

  if (!isOpen) return null;

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
    setFormData({
      cardNumber: '',
      cardExpiry: '',
      cardCVV: '',
      upiId: '',
      upiAmount: '',
      upiPin: '',
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayNow = () => {
    // Handle payment submission logic here
    alert('Thank you for your donation! Your payment was successful.');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Payment Options</h2>
        <p>Please select a payment method:</p>
        <div className="payment-methods">
          <button onClick={() => handlePaymentMethodChange('Credit Card')}>Credit Card</button>
          <button onClick={() => handlePaymentMethodChange('PayPal')}>QR Payment</button>
          <button onClick={() => handlePaymentMethodChange('UPI')}>UPI</button>
        </div>
        <button className="close-button" onClick={onClose}>X</button>

        {selectedMethod === 'Credit Card' && (
          <div className="payment-form">
            <h3>Enter Credit Card Details</h3>
            <label>
              Card Number:
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleFormChange} />
            </label>
            <label>
              Expiry Date:
              <input type="text" name="cardExpiry" value={formData.cardExpiry} onChange={handleFormChange} />
            </label>
            <label>
              CVV:
              <input type="text" name="cardCVV" value={formData.cardCVV} onChange={handleFormChange} />
            </label>
            <button onClick={handlePayNow}>Pay Now</button>
          </div>
        )}

        {selectedMethod === 'UPI' && (
          <div className="payment-form">
            <h3>Enter UPI Details</h3>
            <label>
              UPI ID:
              <input type="text" name="upiId" value={formData.upiId} onChange={handleFormChange} />
            </label>
            <label>
              Amount:
              <input type="number" name="upiAmount" value={formData.upiAmount} onChange={handleFormChange} />
            </label>
            <label>
              UPI PIN:
              <input type="password" name="upiPin" value={formData.upiPin} onChange={handleFormChange} />
            </label>
           
            <div className="button-container">
              <button onClick={handlePayNow}>Pay Now</button>
              <button className="cancel-button" onClick={onClose}>Cancel</button>
            </div>
          </div>
        )}

        {selectedMethod === 'PayPal' && (
          <div className="payment-form">
          <div className="qr-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="QR Code" className="qr-image" width="200px" height="200px" />
        </div>
            <button onClick={handlePayNow}>Confirm Payment</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
