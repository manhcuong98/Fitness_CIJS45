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
            break;
        case 'forumScreen' :
            document.getElementById('web').innerHTML=components.forumScreen
            model.loadForumPosts()
            break;
    }

}

view.loadForumPosts = (forumPosts) => {
    console.log(forumPosts);
    for(let post of forumPosts){
        const postWrapper =document.createElement('div')
        postWrapper.classList.add('forum-post')
        postWrapper.id = `${post.id}`
        postWrapper.innerHTML=`
        <div class="image" style="background: url(${post.img});">
                </div>
                <div class="title">
                   ${post.title}
                </div>
                <div>
                
                </div>
        `
        document.querySelector('.aside-left').appendChild(postWrapper)
        postWrapper.addEventListener('click',()=> {
            view.showOneForumPost(post)
        })
    }
}

view.loadListTitles =(forumPosts) =>{
    for(let post of forumPosts){
        const oneTitle =document.createElement('div')
        oneTitle.innerHTML=`
        <div class="title-post">
                   ${post.title}
                </div>
        `
        document.querySelector('.list-title').appendChild(oneTitle)
    }
}

view.showOneForumPost =(post) =>{
    document.getElementsByClassName('aside-left')[0]=''
    const onePost=document.createElement('div')
    onePost.classList.add('one-forum-post')
    onePost.innerHTML=`
    <div class="image" style="background: url(${post.img});">
                </div>
                <div class="title">
                   ${post.title}
                </div>
                <p>${post.content}</p>

    `
    document.querySelector('.aside-left').appendChild(onePost)
    // const onePost=document.getElementsByClassName('aside-left')[0]
    // onePost.innerHTML=''
    // const html=`
    // <div class="image" style="background: url(${post.img});">
    //             </div>
    //             <div class="title">
    //                 ${post.title}
    //             </div>
    //              <p>${post.content}</p>
    // `
    // onePost.innerHTML=html

    
}

view.loadPrograms = (programs) => {
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



