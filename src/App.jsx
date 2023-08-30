import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import domtoimage from 'dom-to-image';
import './App.css'; // Importa la hoja de estilos

function App() {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const qrCodeRef = useRef();

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleGenerate = () => {
    setIsGenerated(true);
  };

  const handleDownload = () => {
    const container = qrCodeRef.current;
    if (container) {
      domtoimage.toBlob(container).then(function (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'qr_code.png';
        link.click();
      });
    }
  };

  return (
    <div className="App">
      <h1>Solo ingresar enlaces validos</h1>
  
      {!isGenerated ? (
        <>
                   
          <input
            type="text"
            placeholder="Ingresa un enlace"
            value={link}
            onChange={handleLinkChange}
            style={{ width: '500px', height: '' }} // Cambia el ancho según tus necesidades
          />

        <input
          type="text"
          placeholder="Ingresa un nombre o título para el enlace"
          value={title}
          onChange={handleTitleChange}
          style={{ width: '300px' }} // Cambia el ancho según tus necesidades
          />
          
          {/* <button onClick={handleGenerate}>Generar Código QR</button> */}
          <button className="button-generate" onClick={handleGenerate}>
            Generar Código QR
          </button>
          
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div className="qr-code-container" ref={qrCodeRef}>
            <QRCode value={link} size={400} renderAs="canvas" />
          </div>
          <p>{title}</p>
          <button onClick={handleDownload}>Descargar QR</button>
        </div>
      )}
    </div>
  );
}

export default App;
