const model = {}
model.programs = [];
model.selectedProgram = undefined;
model.getComment = undefined
model.currentForumComment = undefined
model.currentUser = undefined
model.forumPosts = []
model.selectedForumPost = undefined
model.forumChange = undefined
model.commentChange = undefined

model.login = async (data) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password)

    } catch (err) {
        if (err.code === 'auth/user-not-found') {
            document.getElementById('emailError').innerHTML = err.message
            document.getElementById('emailError').innerHTML = "Your email is not found, please register an account if you don't have one"
            return;
        }
        if (err.code === 'auth/wrong-password') {
            document.getElementById('passwordError').innerHTML = err.message
            document.getElementById('passwordError').innerHTML = "Your password is incorrect, please try again"
            return;
        }   
    }
    view.setActiveScreen('homeScreen')

}
model.register = (data) => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
        firebase.auth().currentUser.updateProfile({
            displayName: data.yourName
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert("The email has been registered, please check your email and verfify your account")
        view.setActiveScreen('loginScreen')
    }).catch((err) => {
        console.log(err.code);
        if (err.code === 'auth/email-already-in-use') {
            document.getElementById('email-error').innerText = err.message;
        }
        if (err.code === 'auth/weak-password') {
            document.getElementById('passwordError').innerText = err.message
        }
    })
}
getDataFromDoc = (doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
}
getDataFromDocs = (docs) => {
    return docs.map(item => getDataFromDoc(item))
}
model.loadForumPosts = async () => {
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
    model.commentChange = firebase.firestore().collection(collection).onSnapshot((res) => {
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
model.loadGymNetwork = async () => {
    const respone = await firebase.firestore().collection("network").doc('D7LCMIcgD20m5lVArTZ2').get()
    //console.log(respone)
    model.getNetwork = await getDataFromDoc(respone)
    //console.log(model.getNetwork.gymNetwork)
    view.loadGymNetWork(model.getNetwork.gymNetwork)
}
model.gymFindLocation = async () => {
    const respone = await firebase.firestore().collection("network").doc('D7LCMIcgD20m5lVArTZ2').get()
    let locationNetwork = await getDataFromDoc(respone)
    let location = +document.getElementById("location").value;
    console.log(location);
    if (location == 1 || location == 2) {
        let result = locationNetwork.gymNetwork.filter(function (value) {
            return value.city == location;
        }
        )
        view.loadGymNetWork(result);
        return;
    }
    view.loadGymNetWork(locationNetwork.gymNetwork);
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
   model.forumChange = firebase.firestore().collection('forum').onSnapshot((res) => {
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
                view.addForumComment(lastComment.comment, lastComment.user)
                view.scrollToEnd()
            }
        }
    })
}
model.filterProgram = async () => {
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
        view.loadPrograms(filterProgram)
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
model.uploadPost = (file, contentUpload, titleUpload) => {
    console.log(file)
    const fileName = file.name
    const filePath = `forum/${fileName}`
    const fileRef = firebase.storage().ref().child(filePath)
    fileRef.put(file).then(res => {
        const newPost = {
            title: titleUpload,
            content: contentUpload,
            img: getFileUrl(fileRef),
            comments: []
        }
        firebase.firestore().collection('forum').add(newPost)
        document.getElementById('web').innerHTML = components.forumScreen
        model.loadForumPosts()
        model.listenForumCommentChange()
        console.log("done");
    })
}
model.logout = () => {
    if(model.commentChange) {
        model.commentChange()
    }
    if(model.forumChange) {
        model.forumChange()
    }
    // model.()
    firebase.auth().signOut();
    view.setActiveScreen('loginScreen')
}