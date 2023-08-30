// import React, { Component } from 'react';
// import QRCode from 'qrcode.react';

// class QRCodeGenerator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       linkValue: '', // Valor del enlace para el cual generaremos el código QR
//     };
//   }

//   handleLinkChange = (event) => {
//     this.setState({ linkValue: event.target.value });
//   };

//   render() {
//     const { linkValue } = this.state;

//     return (
//       <div>
//         <h1>Generador de Código QR desde un Enlace</h1>
//         <input
//           type="text"
//           value={linkValue}
//           onChange={this.handleLinkChange}
//           placeholder="https://www.youtube.com/"
//         />
//         {linkValue && (
//           <div>
//             <QRCode value={linkValue} />
//             <p>Enlace: {linkValue}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default QRCodeGenerator;