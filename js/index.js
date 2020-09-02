
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
firebase.auth().onAuthStateChanged(function (user) {
  if (user && user.emailVerified) {
    model.currentUser = {
      displayName: user.displayName,
      email: user.email
    }
    console.log(model.currentUser)
    document.getElementById('user-item').innerHTML =
      `
      <li onclick = "model.logout()">
        <a href = "#">Log out</a> </li>
      `
    //view.setActiveScreen(`chatScreen`)
    console.log("aaaa")

  } else {
    model.currentUser = undefined
    //view.setActiveScreen('loginScreen');
    console.log("bbbb")
    document.getElementById('user-item').innerHTML =
      `
      <li onclick="view.setActiveScreen('loginScreen')">
                                                    <a href="#">Login</a>
                                                </li>
                                                <li onclick="view.setActiveScreen('registerScreen')">
                                                <a href="#">Register</a>
                                            </li>                         
      `
  }
});

init = () => {
  view.setActiveScreen('homeScreen');
  //view.setActiveScreen('forumScreen')
}
window.onload = init
function getFileUrl(fileRef) {
  return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
}