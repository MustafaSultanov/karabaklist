// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useEffect, useState } from "react";
// import { Flip, ToastContainer, Zoom, toast } from "react-toastify";
// // import Iphone from "@/components/asset/phone.png";
// import emailjs from "emailjs-com";
// import scss from "./FormComponent.module.scss";
// import "react-toastify/dist/ReactToastify.css";

// export const FormComponent = () => {
//   const [fName, setFName] = useState<string>("");
//   const [fEmail, setFEmail] = useState<string>("");
//   const [fNumber, setFNumber] = useState<string>("");
//   const [fText, setFText] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [validation, setValidation] = useState(false);

//   const ResetState = () => {
//     setFName("");
//     setFEmail("");
//     setFNumber("");
//     setFText("");
//     setIsLoading(false);
//   };

//   const sendEmail = () => {
//     setIsLoading(true);
//     emailjs
//       .send(
//         "service_w0i4r4l",
//         "template_gft7y0j",
//         {
//           from_name: fName,
//           email: fEmail,
//           phone: fNumber,
//           text: fText,
//         },
//         "3NB3jo4m9L0Ja5pb2"
//       )
//       .then(
//         (result) => {
//           toast.success("Заявка успешно отправлена !", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: 0,
//             theme: "dark",
//             transition: Zoom,
//           });
//           ResetState();
//         },
//         (error) => {
//           toast.error("Что-то пошло не так попытайтесь по позже !", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: 0,
//             theme: "dark",
//             transition: Flip,
//           });
//           ResetState();
//         }
//       );
//   };

//   useEffect(() => {
//     const isFNameEmpty = fName.trim() === "";
//     const isFEmailEmpty = fEmail.trim() === "";
//     const isFNumberEmpty = fNumber.trim() === "";
//     const isFEmailValid = fEmail.includes("@");

//     setValidation(
//       isFNameEmpty || isFEmailEmpty || !isFEmailValid || isFNumberEmpty
//     );
//   }, [fName, fEmail, fNumber]);

//   return (
//     <>
//       <ToastContainer />
//       <div className={scss.form}>
//         <div className={scss.form_wrapper}>
//           <div className={scss.form_title}>
//             <h2 data-aos="fade-zoom-in" className={scss.h1}>Оставить заявку</h2>
//           </div>
//           <div className={scss.inp_place}>
//             <div className={scss.top_inp}>
//               <input
//                 className={scss.input}
//                 value={fName}
//                 type="text"
//                 placeholder="Имя"
//                 onChange={(e) => setFName(e.target.value)}
//               />
//               <input
//                 className={scss.input}
//                 value={fEmail}
//                 type="text"
//                 placeholder="E-mail"
//                 onChange={(e) => setFEmail(e.target.value)}
//               />
//             </div>
//             <input
//               className={scss.input}
//               value={fNumber}
//               type="number"
//               placeholder="Номер телефона"
//               onChange={(e) => setFNumber(e.target.value)}
//             />
//             <input
//               className={scss.input}
//               value={fText}
//               type="text"
//               placeholder="Описание"
//               onChange={(e) => setFText(e.target.value)}
//             />
//           </div>
//           <button
//             className={scss.form_btn}
//             onClick={sendEmail}
//             disabled={validation}
//           >
//             {!isLoading ? (
//               <span>Отправить</span>
//             ) : (
//               <svg viewBox="25 25 50 50">
//                 <circle r="20" cy="50" cx="50"></circle>
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
