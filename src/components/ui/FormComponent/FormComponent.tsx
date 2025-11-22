// /* eslint-disable @typescript-eslint/no-unused-vars */

// import { useEffect, useState } from "react";
// // import Iphone from "@/componx

//     setFText("");
//     setIsLoading(false);
//   };
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
