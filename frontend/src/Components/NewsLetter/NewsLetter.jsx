// import React from 'react'
// import "./NewsLetter.css"
// export const NewsLetter = () => {
//   return (
//     <div className='newsletter'>
//         <h1>Get Exclusive Offers On Your Email</h1>
//         <p>suscribe to Your newsletter and stay updated</p>
//         <div>
//             <input type="email" placeholder='Your Email id' />
//             <button>Suscribe</button>
//         </div>
//     </div>
//   )
// }
// export default NewsLetter




import React from 'react';
import Swal from 'sweetalert2';  // Import SweetAlert2
import './NewsLetter.css';

export const NewsLetter = () => {

  const handleSubscribe = () => {
    // Display a styled alert box using SweetAlert2
    Swal.fire({
      title: 'Thank you for subscribing!',
      text: 'You will receive our latest offers via email.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'subscribe-popup',
      },
    });
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
