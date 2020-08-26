const model = {}
model.programs = [];
model.selectedProgram= undefined;
// firebase.firestore().collection("programs").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         //console.log(doc.id, " => ", doc.data());
//         //doc.data().id = doc.id;
//         let temp = doc.data();
//         temp.id = doc.id
//         model.programs.push(temp)
//     });
// });

getDataFromDoc = (doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
}
getDataFromDocs = (docs) => {
    return docs.map(item => getDataFromDoc(item))
}
model.loadprograms = async () => {
    const respone = await firebase.firestore().collection('programs').get()
    model.programs = await getDataFromDocs(respone.docs)
    view.loadPrograms(model.programs)
}

