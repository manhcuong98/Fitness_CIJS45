//console.log(model.programs)



const view = {}
view.setActiveScreen = async (screenName, program = undefined) => {
    switch (screenName) {
        case 'programs':
            document.getElementById('web').innerHTML = components.programsScreen
            model.loadprograms()
            break;
        case 'a-program':
            document.getElementById('web').innerHTML = components.showProgram
            model.loadComments(program.id)
            document.getElementsByClassName('video')[0].innerHTML = `<iframe width="1100px" height="618.75px"  src="${program.video}" frameborder="0"></iframe>`
            console.log(program.video)
            let text = `
            <br><h2 style = "font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">WORKOUT DETAILS </h2>
            <span class = "text" style="font-weight:Bold"> Duration : </span> ${program.time} minutes. <br>
            <span class = "text" style="font-weight:Bold">Calories burn : </span>${program.calo - 20} - ${program.calo + 20}. <br>
            <span class = "text" style="font-weight:Bold">Gender :</span> ${controller.changeGender(program.sex)}. <br>
            `
            document.getElementsByClassName('text-des')[0].innerHTML = text
            let temp = document.getElementsByClassName('text-des')[0]
            
            temp.innerHTML += `<div class= "text" style="font-weight:Bold" >Description: </div>`
            for (let i = 0; i < program.des.length; i++) {
                temp.innerHTML += `<div class = "text-detail">- ${program.des[i]}.<div>`
            }
            const sendCommentForm = document.getElementById('send-comment-form')
            sendCommentForm.addEventListener('submit' , (event) => {
                event.preventDefault();
                console.log(sendCommentForm.comment.value)
                const date = new Date().toLocaleString('en-GB', { timeZone: "Asia/Bangkok" }).substr(0, 20).replace('T', ' ')
                model.addComment(program.id,sendCommentForm.comment.value,date,"Undefined")

                sendCommentForm.comment.value = "" 
            })
            model.listenCommentChange("programs")
            break;
    }

}

view.loadPrograms = (programs) => {
    document.getElementsByClassName('list-program')[0].innerHTML = ""
    for (let program of programs) {
        let child = document.createElement('div')
        child.classList.add('program')
        child.id = `${program.id}`
        child.innerHTML = `
            <div class="image" style=" background-image: url(${program.img[0]});"></div>
            <div class="program-detail">
                <span style="font-weight: bold;"> - Program: </span> ${program.name}<br>
                <span style="font-weight: bold;"> - Time: </span> ${program.time} minutes <br>
                <span style="font-weight: bold;"> - Calories burn: </span> ${program.calo - 20} - ${program.calo + 20}.
            </div>
        `
        document.querySelector('.list-program').appendChild(child)
        child.addEventListener('click', () => {
            
            view.setActiveScreen('a-program', program)

        })
    }
    
}
view.loadCurrentComments = (currentComment) => {
    
    for(let i=0 ; i<currentComment.length ;i++) {
        let commentWrapper = document.createElement('div')
        commentWrapper.classList.add('program-comment')
        commentWrapper.innerHTML = `
        <div id="information">
        <div id="user">${currentComment[i].user}</div>
        <div id="date">${currentComment[i].date}</div>
        </div>
        <div id="content">${currentComment[i].comment}</div>
        `
        document.querySelector('.list-comment').appendChild(commentWrapper)
    }
    view.scrollToEndElement()
}
view.addComment = (comment,user,date) => {
    let commentWrapper = document.createElement('div')
        commentWrapper.classList.add('program-comment')
        commentWrapper.innerHTML = `
        <div id="information">
        <div id="user">${user}</div>
        <div id="date">${date}</div>
        </div>
        <div id="content">${comment}</div>
        `
        document.querySelector('.list-comment').appendChild(commentWrapper)
        view.scrollToEndElement()
}

view.scrollToEndElement = () => {
    const element = document.querySelector('.list-comment')
    element.scrollTop = element.scrollHeight;
}
