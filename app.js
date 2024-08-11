window.addEventListener("load", () => {
    console.log(localStorage.getItem("user"));
    if (!localStorage.getItem("user")) {
        window.location.replace("../pages/signup.html");
    }
});


import { db, doc, getDoc, ref, uploadBytesResumable, getDownloadURL, } from "./js/firebase.js";

window.addEventListener("load", async () => {
    if (!localStorage.getItem("user")) {
        window.location.replace("../pages/login.html");
        return;
    }

    console.log(localStorage.getItem("user"));

    // get user Data on firestore
    const userID = localStorage.getItem("user");
    console.log(userID);

    const response = await getDoc(doc(db, "users", userID));
    console.log("response", response.data());
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const gender = document.querySelector("#gender");
    name.innerHTML = `Name : ${response.data().name}`;
    email.innerHTML = `Email : ${response.data().email}`;
    gender.innerHTML = `Gender : ${response.data().gender}`;
});
