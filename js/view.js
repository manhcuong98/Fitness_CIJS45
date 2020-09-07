//console.log(model.programs)

const view = {}
view.setActiveScreen = async (screenName, program = undefined) => {
    switch (screenName) {
        case 'homeScreen':
            document.getElementById('web').innerHTML = components.homeScreen;
            var siteMenuClone = function() {

                $('.js-clone-nav').each(function() {
                    var $this = $(this);
                    $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
                });
        
        
                setTimeout(function() {
                    
                    var counter = 0;
              $('.site-mobile-menu .has-children').each(function(){
                var $this = $(this);
                
                $this.prepend('<span class="arrow-collapse collapsed">');
        
                $this.find('.arrow-collapse').attr({
                  'data-toggle' : 'collapse',
                  'data-target' : '#collapseItem' + counter,
                });
        
                $this.find('> ul').attr({
                  'class' : 'collapse',
                  'id' : 'collapseItem' + counter,
                });
        
                counter++;
        
              });
        
            }, 1000);
        
                $('body').on('click', '.arrow-collapse', function(e) {
              var $this = $(this);
              if ( $this.closest('li').find('.collapse').hasClass('show') ) {
                $this.removeClass('active');
              } else {
                $this.addClass('active');
              }
              e.preventDefault();  
              
            });
        
                $(window).resize(function() {
                    var $this = $(this),
                        w = $this.width();
        
                    if ( w > 768 ) {
                        if ( $('body').hasClass('offcanvas-menu') ) {
                            $('body').removeClass('offcanvas-menu');
                        }
                    }
                })
        
                $('body').on('click', '.js-menu-toggle', function(e) {
                    var $this = $(this);
                    e.preventDefault();
        
                    if ( $('body').hasClass('offcanvas-menu') ) {
                        $('body').removeClass('offcanvas-menu');
                        $this.removeClass('active');
                    } else {
                        $('body').addClass('offcanvas-menu');
                        $this.addClass('active');
                    }
                }) 
        
                // click outisde offcanvas
                $(document).mouseup(function(e) {
                var container = $(".site-mobile-menu");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                  if ( $('body').hasClass('offcanvas-menu') ) {
                            $('body').removeClass('offcanvas-menu');
                        }
                }
                });
            }; 
            siteMenuClone();
        
        
            var sitePlusMinus = function() {
                $('.js-btn-minus').on('click', function(e){
                    e.preventDefault();
                    if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
                        $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
                    } else {
                        $(this).closest('.input-group').find('.form-control').val(parseInt(0));
                    }
                });
                $('.js-btn-plus').on('click', function(e){
                    e.preventDefault();
                    $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
                });
            };
            // sitePlusMinus();
        
        
            var siteSliderRange = function() {
            $( "#slider-range" ).slider({
              range: true,
              min: 0,
              max: 500,
              values: [ 75, 300 ],
              slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
              }
            });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
              " - $" + $( "#slider-range" ).slider( "values", 1 ) );
            };
            // siteSliderRange();
        
        
            
            var siteCarousel = function () {
                if ( $('.nonloop-block-13').length > 0 ) {
                    $('.nonloop-block-13').owlCarousel({
                    center: false,
                    items: 1,
                    loop: true,
                        stagePadding: 0,
                    margin: 0,
                    autoplay: true,
                    nav: true,
                        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                    responsive:{
                    600:{
                        margin: 0,
                        nav: true,
                      items: 2
                    },
                    1000:{
                        margin: 0,
                        stagePadding: 0,
                        nav: true,
                      items: 3
                    },
                    1200:{
                        margin: 0,
                        stagePadding: 0,
                        nav: true,
                      items: 4
                    }
                    }
                    });
                }
        
        
                if ( $('.nonloop-block-14').length > 0 ) {
                    $('.nonloop-block-14').owlCarousel({
                    center: false,
                    items: 1,
                    loop: true,
                        stagePadding: 30,
                    margin: 0,
                        autoplay: true,
                        smartSpeed: 1000,
                    nav: true,
                        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                    responsive:{
                    600:{
                        margin: 20,
                        nav: true,
                      items: 2
                    },
                    1000:{
                        margin: 30,
                        
                        nav: true,
                      items: 2
                    },
                    1200:{
                        margin: 30,
                        
                        nav: true,
                      items: 3
                    }
                    }
                    });
                }
        
                $('.slide-one-item').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                    stagePadding: 0,
                margin: 0,
                autoplay: true,
                pauseOnHover: false,
                nav: true,
                navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
              });
            };
            siteCarousel();
        
            var siteStellar = function() {
                $(window).stellar({
                responsive: false,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll'
              });
            };
            siteStellar();
        
            var siteCountDown = function() {
        
                $('#date-countdown').countdown('2020/10/10', function(event) {
                  var $this = $(this).html(event.strftime(''
                    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
                    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
                    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
                    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
                    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
                });
                        
            };
            siteCountDown();
        
            var siteDatePicker = function() {
        
                if ( $('.datepicker').length > 0 ) {
                    $('.datepicker').datepicker();
                }
        
            };
            siteDatePicker();
        
            var siteSticky = function() {
                $(".js-sticky-header").sticky({topSpacing:0});
            };
            siteSticky();
        
            // navigation
          var OnePageNavigation = function() {
            var navToggler = $('.site-menu-toggle');
               $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
              e.preventDefault();
        
              var hash = this.hash;
        
              $('html, body').animate({
                'scrollTop': $(hash).offset().top
              }, 600, 'easeInOutCirc', function(){
                window.location.hash = hash;
              });
        
            });
          };
          OnePageNavigation();
        
          var siteScroll = function() {
        
              
        
              $(window).scroll(function() {
        
                  var st = $(this).scrollTop();
        
                  if (st > 100) {
                      $('.js-sticky-header').addClass('shrink');
                  } else {
                      $('.js-sticky-header').removeClass('shrink');
                  }
        
              }) 
        
          };
            siteScroll();
            
        
            $(function () {
                $("#bgndVideo").YTPlayer();
            });
            break;
        case 'loginScreen':
            document.getElementById('web').innerHTML = components.loginScreen;
            // document.getElementById('redirect-to-register').addEventListener('click', (e) => {
            //     view.setActiveScreen('registerScreen')
            // })
            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const data = {
                    email: loginForm.email.value.trim(),
                    password: loginForm.password.value
                };
                // console.log(dataLogin);
                controller.login(data);
            });
            break;
        case 'registerScreen':
            document.getElementById('web').innerHTML = components.registerScreen;
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const data = {
                    yourName: registerForm.yourName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                };
                console.log(data)
                controller.register(data);
            })
            document.getElementById('redirect-to-login').addEventListener('click', () => {
                view.setActiveScreen('loginScreen');
            });
            break;
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
            <span class = "text" style="font-weight:Bold">Calories burn : </span>${program.calo - 20} - ${program.calo + 20} Kcal. <br>
            <span class = "text" style="font-weight:Bold">Gender :</span> ${controller.changeGender(program.sex)}. <br>
            `
            document.getElementsByClassName('text-des')[0].innerHTML = text
            let temp = document.getElementsByClassName('text-des')[0]

            temp.innerHTML += `<div class= "text" style="font-weight:Bold" >Description: </div>`
            for (let i = 0; i < program.des.length; i++) {
                temp.innerHTML += `<div class = "text-detail">- ${program.des[i]}.<div>`
            }
            const sendCommentForm = document.getElementById('send-comment-form')
            sendCommentForm.addEventListener('submit', (event) => {
                event.preventDefault();
                console.log(sendCommentForm.comment.value)
                const date = new Date().toLocaleString('en-GB', { timeZone: "Asia/Bangkok" }).substr(0, 20).replace('T', ' ')
                if(model.currentUser===undefined) {
                    alert("Please login to comment")
                    return
                }
                model.addComment(program.id, sendCommentForm.comment.value, date, model.currentUser.email)

                sendCommentForm.comment.value = ""
            })
            model.listenCommentChange("programs")
            break;

        case 'gym-network':
            document.getElementById('web').innerHTML = components.showNetwork
            model.loadGymNetwork();
            break;
        case 'forumScreen' :
            document.getElementById('web').innerHTML=components.forumScreen
            model.loadForumPosts()
            model.listenForumCommentChange()
            
            const uploadPostForm = document.getElementById('upload-post')
            
            uploadPostForm.addEventListener('submit', (e) => {
                e.preventDefault()
                if(model.currentUser===undefined) {
                    alert("Please login to uploadFile")
                    return
                }
                document.getElementById('file-error').innerHTML=''
                document.getElementById('content-error').innerHTML=''
                document.getElementById('title-error').innerHTML=''
                const files = uploadPostForm.file.files
                const contentUpload=uploadPostForm.content.value.trim()
                const titleUpload=uploadPostForm.title.value.trim()
                // if(files.length === 0 || contentUpload==="" || titleUpload==="") {
                // // alert('Please choose file!')
                // console.log('nhap thieu');
                // } 
                if(files.length ===0){
                    document.getElementById('file-error').innerHTML="Please choose an image."
                }
                if(contentUpload===''){
                    document.getElementById('content-error').innerHTML='Please input content.'
                }
                if(titleUpload===''){
                    document.getElementById('title-error').innerHTML='Please input title.'
                }
                if(files.length != 0 || contentUpload !="" || titleUpload !="") {
                    console.log('nhap du');
                    model.uploadPost(files[0], contentUpload, titleUpload)
                }
            })
            break;    
        case 'contactUsScreen' :
            document.getElementById('web').innerHTML = components.contactUsScreen;
            // model...
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
        <img src="${post.img}" alt="">
                <div class="title">
                   ${post.title}
                </div>
                <p>${post.content}</p>
        `
        document.querySelector('.aside-left').appendChild(postWrapper)
        postWrapper.addEventListener('click',()=> {
            document.querySelector('.aside-left').innerHTML=components.showOneForumPost
            view.showOneForumPost(post)
            console.log('show a post');
            model.loadForumComments(post.id)
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
       oneTitle.addEventListener('click', () => {
        document.querySelector('.aside-left').innerHTML=components.showOneForumPost    
        view.showOneForumPost(post)
        model.loadForumComments(post.id)
       }) 
    }
}

view.showOneForumPost =(post) =>{
    const onePost=document.querySelector('.post-content')
    onePost.innerHTML=`
    <img src="${post.img}" alt="">
                <div class="title">
                   ${post.title}
                </div>
                <p>${post.content}</p>
    `
    const sendForumCommentForm = document.getElementById('send-forum-comment-form')
            sendForumCommentForm.addEventListener('submit' , (event) => {
                event.preventDefault();
                if(model.currentUser===undefined) {
                    alert("Please login to comment")
                    return
                }
                
                console.log(sendForumCommentForm.comment.value)
                if (sendForumCommentForm.comment.value.trim() != '') {
                model.addForumComment(post.id,sendForumCommentForm.comment.value,model.currentUser.email)  
                console.log("a")
                } 
                sendForumCommentForm.comment.value = ""
            }) 
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

    for (let i = 0; i < currentComment.length; i++) {
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
view.addComment = (comment, user, date) => {
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

view.loadGymNetWork = (arr) => {
    let body = document.getElementById('list-network');
    body.innerHTML = "";
    let list = '';
    for (let i = 0; i < arr.length; i++) {
        list += `<h5>${i + 1}. ${arr[i].name}</h5>
    <div><img width=80% height= 500 src="${arr[i].img}" alt=""></div>
    <p>Address: ${arr[i].address}</p>`
    }
    body.innerHTML += list;
}


view.scrollToEndElement = () => {
    const element = document.querySelector('.list-comment')
    element.scrollTop = element.scrollHeight;
}
view.loadCurrentForumComments = (currentForumComment) => {
    
    for(let i=0 ; i<currentForumComment.length ;i++) {
        let commentWrapper = document.createElement('div')
        commentWrapper.classList.add('forum-comment')
        commentWrapper.innerHTML = `
        <div id="user">${currentForumComment[i].user}</div>
        <div id="content">${currentForumComment[i].comment}</div>
        `
        document.querySelector('.list-forum-comment').appendChild(commentWrapper)
    }
    view.scrollToEnd()
}
view.addForumComment = (comment,user) => {
    let commentWrapper = document.createElement('div')
        commentWrapper.classList.add('forum-comment')
        commentWrapper.innerHTML = `
        <div id="user">${user}</div>
        <div id="content">${comment}</div>
        `
        document.querySelector('.list-forum-comment').appendChild(commentWrapper)
         view.scrollToEnd()
}
view.scrollToEnd = () => {
    const element = document.querySelector('.list-forum-comment')
    element.scrollTop = element.scrollHeight;
}