const model = {}
model.programs = [];
model.selectedProgram = undefined;
model.getComment = undefined
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
model.addComment = (id, Comment, User) => {
    const dataUpdate = {
        comments: firebase.firestore.FieldValue.arrayUnion({
            comment: Comment,
            user: User
        })
    }
    if (Comment != '' || Comment.trim() != '') {
        firebase.firestore().collection('programs').doc(id).update(dataUpdate)
        //console.log("aaa")
    }
}
model.loadComments = async (id) => {
    const respone = await firebase.firestore().collection("programs").doc(id).get()
    //console.log(respone)
    model.getComment = await getDataFromDoc(respone)
    //console.log(model.getComment.comments)
    if (model.getComment.comments.length > 0) {
        //model.comments = model.conversations[0]
        view.loadCurrentComments(model.getComment.comments)
    }
}
model.listenCommentChange = (collection) => {
    let isFirstRun = true;
    console.log('g')
    firebase.firestore().collection(collection).onSnapshot((res) => {
        console.log("alo")
        if (isFirstRun) {
            isFirstRun = false;
            view.scrollToEndElement();
            return;
        }
        const docChanges = res.docChanges();
        for (oneChange of docChanges) {
            const type = oneChange.type

            if (type == "modified") {
                const docData = getDataFromDoc(oneChange.doc)
                const lastComment = docData.comments[docData.comments.length - 1]
                view.addComment(lastComment.comment,lastComment.user)
                view.scrollToEndElement()
            }
        }
    })
}