const model = {}
model.programs = [];
model.selectedProgram = undefined;
model.getComment = undefined
model.currentForumComment=undefined
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
model.forumPosts=[]
model.selectedForumPost=undefined

getDataFromDoc = (doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
}
getDataFromDocs = (docs) => {
    return docs.map(item => getDataFromDoc(item))
}
model.loadForumPosts =async () => {
    const respone = await firebase.firestore().collection('forum').get()
    model.forumPosts = await getDataFromDocs(respone.docs)
    view.loadForumPosts(model.forumPosts)
    view.loadListTitles(model.forumPosts)
}

model.loadprograms = async () => {
    const respone = await firebase.firestore().collection('programs').get()
    model.programs = await getDataFromDocs(respone.docs)
    view.loadPrograms(model.programs)
}
model.addComment = (id, Comment, Date, User) => {
    const dataUpdate = {
        comments: firebase.firestore.FieldValue.arrayUnion({
            comment: Comment,
            user: User,
            date: Date,
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
                view.addComment(lastComment.comment, lastComment.user, lastComment.date)
                view.scrollToEndElement()
            }
        }
    })
}

model.loadForumComments = async (id) => {
    const respone = await firebase.firestore().collection("forum").doc(id).get()
    //console.log(respone)
    model.currentForumComment = await getDataFromDoc(respone)
    //console.log(model.getComment.comments)
    if (model.currentForumComment.comments.length > 0) {
        //model.comments = model.conversations[0]
        view.loadCurrentForumComments(model.currentForumComment.comments)
       
    }
}
model.addForumComment = (id, Comment, User) => {
    const dataUpdate = {
        comments: firebase.firestore.FieldValue.arrayUnion({
            comment: Comment,
            user: User
        })
    }
        firebase.firestore().collection('forum').doc(id).update(dataUpdate)
}
model.listenForumCommentChange = () => {
    let isFirstRun = true;
    firebase.firestore().collection('forum').onSnapshot((res) => {
        if (isFirstRun) {
            isFirstRun = false;
            return;
        }
        const docChanges = res.docChanges();
        for (oneChange of docChanges) {
            const type = oneChange.type

            if (type == "modified") {
                const docData = getDataFromDoc(oneChange.doc)
                const lastComment = docData.comments[docData.comments.length - 1]
                view.addForumComment(lastComment.comment,lastComment.user)
                view.scrollToEnd()
            }
        }
    })
}
model.filter = async () => {
    console.log("a")
    let filterProgram = []
    const respone = await firebase.firestore().collection('programs').get()
    let programs = await getDataFromDocs(respone.docs)
    let calo = +document.getElementById("calo").value;
    let time = +document.getElementById("time").value;
    let sex = +document.getElementById("sex").value;
    // ko nhập cả 3
    if (isNaN(calo) && isNaN(time) && isNaN(sex)) {
        view.loadPrograms(programs);
        console.log(1)
        return;
    }
    // chỉ nhập calo
    if (!isNaN(calo) && isNaN(time) && isNaN(sex)) {
        filterProgram = programs.filter(function (value) {
            return (value.calo >= calo - 20 && value.calo <= calo + 20);
        }
        )
        view.loadPrograms(filterProgram);
        console.log(2)
        return;
    }
    // chỉ nhập sex
    if (isNaN(calo) && isNaN(time) && !isNaN(sex)) {
        filterProgram = programs.filter(function (value) {
            return value.sex == sex;
        }
        )
        console.log(3)
        view.loadPrograms(filterProgram);
        return;
    }
    // chỉ nhập time
    if (isNaN(calo) && !isNaN(time) && isNaN(sex)) {
        filterProgram = programs.filter(function (value) {
            return value.time >= time - 5 && value.time <= time + 5;
        }
        )
        console.log(4)
        view.loadPrograms(filterProgram);
        return;
    }
    // nhập calo và sex
    if (!isNaN(calo) && isNaN(time) && !isNaN(sex)) {
        filterProgram = programs.filter(function (value) {
            return value.sex == sex && (value.calo >= calo - 20 && value.calo <= calo + 20);
        }
        )
        console.log(5)
        view.loadPrograms(filterProgram);
        return;
    }
    // calo và time
    if (!isNaN(calo) && !isNaN(time) && isNaN(sex)) {
        filterProgram = programs.filter(function (value) {
            return (value.time >= time - 5 && value.time <= time + 5) && (value.calo >= calo - 20 && value.calo <= calo + 20);
        }
        )
        console.log(5)
        view.loadPrograms(filterProgram);
        return;
    }
    // time và sex
    if (isNaN(calo) && !isNaN(time) && !isNaN(sex)) {
        filterProgram = programs.filter(function (value) {
            return (value.time >= time - 5 && value.time <= time + 5) && value.sex == sex;
        }
        )
        console.log(6)
        view.loadPrograms(filterProgram);
        return;
    }
    // nhập cả 3
    if (!isNaN(calo) && !isNaN(time) && !isNaN(sex)) {
        filterProgram = programs.filter(function (value) {
            return (value.time >= time - 5 && value.time <= time + 5) && value.sex == sex && (value.calo >= calo - 20 && value.calo <= calo + 20);
        }
        )
        console.log(7)
        view.loadPrograms(filterProgram);
        return;
    }
}