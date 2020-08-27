
var firebaseConfig = {
  apiKey: "AIzaSyCpJXiGVJAPyZ6st_WGXJUlSE_U24OcFaQ",
  authDomain: "fitness-website-c0a58.firebaseapp.com",
  databaseURL: "https://fitness-website-c0a58.firebaseio.com",
  projectId: "fitness-website-c0a58",
  storageBucket: "fitness-website-c0a58.appspot.com",
  messagingSenderId: "953895248721",
  appId: "1:953895248721:web:5155373d60b55cc4e5a970"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// function programDetail(id) {
//   console.log(id)
// }

init = () => {
  view.setActiveScreen('forumScreen')
}
window.onload = init 