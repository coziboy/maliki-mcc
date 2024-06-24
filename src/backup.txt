import React, { useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

export const Admission = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.target);

    try {
      const response = await axios.post('https://maliki-mcc-backend-production.up.railway.app/submit-form', {
        name: formData.get('name'),
        whatsapp: formData.get('whatsapp'),
        message: formData.get('message'),
      });

      if (response.status === 200) {
        setMessage({ type: 'success', text: 'Data submitted successfully!' });
      } else {
        setMessage({ type: 'error', text: 'Failed to submit data.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit data.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="daftar main-container">
      <div className="daftar-left">
        <form onSubmit={handleSubmit} className="daftar-form">
          <div>
            <input type="text" placeholder="Masukkan Nama Anda" name="name" required />
          </div>
          <div>
            <input type="text" placeholder="Masukkan Nomer WhatsApp Anda" name="whatsapp" required />
          </div>
          <div>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Masukkan key-message untuk mendaftar" required></textarea>
          </div>
          <div>
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? (
                <ClipLoader
                color="white"
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              ) : (
                'Daftar Menjadi Anggota'
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="daftar-right">
        <div className="daftar-item">
          <div className="daftar-item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 14h-24l4-8h3.135c.385.641.798 1.309 1.232 2h-3.131l-2 4h17.527l-2-4h-3.131c.435-.691.848-1.359 1.232-2h3.136l4 8z"></path>
            </svg>
          </div>
          <div className="daftar-item-detail">
            <h4>Alamat</h4>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="daftar-item">
          <div className="daftar-item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"></path>
            </svg>
          </div>
          <div className="daftar-item-detail">
            <h4>No Telepon</h4>
            <p>(+62) 895429811999</p>
          </div>
        </div>

        <div className="daftar-item">
          <div className="daftar-item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"></path>
            </svg>
          </div>
          <div className="daftar-item-detail">
            <h4>Email</h4>
            <p>admnmmcc@gmail.com</p>
          </div>
        </div>
      </div>

      {message && (
        <div className={`popup-message ${message.type}`}>
          {message.text}
        </div>
      )}

    </div>
  );
};
