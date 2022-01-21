// import { OPEN_ERR_MODAL, SET_ERR } from "./modal";

// // utils
// import { API_URL } from "../../utils/constants";
// import { setCookie } from "../../utils/utils";

// export const AUTHORIZE_REQUEST = "AUTHORIZE_REQUEST";
// export const AUTHORIZE_SUCCESS = "AUTHORIZE_SUCCESS";
// export const AUTHORIZE_FAILED = "AUTHORIZE_FAILED";

// export function authorize(email, password) {
//   return function (dispatch) {
//     dispatch({
//       type: AUTHORIZE_REQUEST,
//     });
//     fetch(`${API_URL}auth/login`, {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify({ email, password }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           dispatch({
//             type: AUTHORIZE_FAILED,
//           });
//         }
//         return Promise.reject(res.status);
//       })

//       .then((data) => {
//         if (data.success) {
//           dispatch({
//             type: AUTHORIZE_SUCCESS,
//             auth: data,
//           });
//           let accessToken = data.accessToken.split("Bearer ")[1];
//           if (accessToken) {
//             setCookie("token", accessToken);
//           }

//           let authToken = data.refreshToken;
//           if (authToken) {
//             setCookie("authToken", authToken);
//           }
//         }
//       })
//       .catch((err) => {
//         if (err === 401) {
//           dispatch({
//             type: AUTHORIZE_FAILED,
//           });
//           dispatch({
//             type: SET_ERR,
//             text: `${err} Неправильные почта или пароль`,
//           });
//           dispatch({
//             type: OPEN_ERR_MODAL,
//           });
//         } else {
//           dispatch({
//             type: AUTHORIZE_FAILED,
//           });
//           dispatch({
//             type: SET_ERR,
//             text: err,
//           });
//           dispatch({
//             type: OPEN_ERR_MODAL,
//           });
//         }
//       });
//   };
// }
