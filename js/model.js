var program = [];
firebase.firestore().collection("programs").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        //doc.data().id = doc.id;
        let temp = doc.data();
        temp.id = doc.id
        program.push(temp)
    });
});
console.log(program)