const components = {}
components.programsScreen = `
<div class="bgimg" style="background-image: url('https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg');" data-stellar-background-ratio="0.5">
    
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="">Class Single Post</h2>
              <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt minima porro, natus sequi ullam.</p>
            </div>
          </div>
        </div>
      
      </div>

<form style="margin-left: 24cm;" class="form-inline">
<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Choose</label>
<select class="custom-select my-1 mr-sm-2" id="calo">
  <option selected >Calories</option>
  <option value="50">~50</option>
  <option value="100">~100</option>
  <option value="150">~150</option>
  <option value="200">~200</option>
  <option value="300">~300</option>
  <option value="400">~400</option>
</select>
<select class="custom-select my-1 mr-sm-2" id="time">
  <option selected>Time</option>
  <option value="5" >~5 minutes</option>
  <option value="10">~10 minutes</option>
  <option value="20" >~20 minutes</option>
  <option value="30">~30 minutes</option>
  <option value="45">~45 minutes</option>
  <option value="60">~60 minutes</option>
</select>
<select class="custom-select my-1 mr-sm-2" id="sex">
  <option selected>Gender</option>
  <option value="0" >Male</option>
  <option value="1">Female</option>
  <option value="2" >Both</option>
</select>
<button type="button" class="btn btn-primary" style="background-color:#c76ddd;" onclick="model.filterProgram()">Submit</button>
</form>
    <div class="program-container">
        <div class="list-program"></div>
    </div>
`
components.showProgram = `
<div class="bgimg" style="background-image: url('https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg');" data-stellar-background-ratio="0.5">
    
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="">Class Single Post</h2>
              <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt minima porro, natus sequi ullam.</p>
            </div>
          </div>
        </div>
      
      </div>

<div class="showProgram">
            <div class="video"></div>
            <div class="des">
                <div class="text-des"></div>
                <div class="message-des">
                    <div class="list-comment">
                    </div>
                    <form id="send-comment-form">
                        <div class="input-wraper">
                            <input type="text" name="comment" placeholder="Type a comment...">
                        </div>
                        <button type="submit" style="margin-top:-8px;"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
    
`
components.showNetwork =
    `<div class="bgimg" style="background-image: url('https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg');" data-stellar-background-ratio="0.5">
    
<div class="container">
  <div class="row align-items-center justify-content-center text-center">
    <div class="col-md-7">
      <h2 class="">Class Single Post</h2>
      <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt minima porro, natus sequi ullam.</p>
    </div>
  </div>
</div>

</div>


<form class="form-inline" style="margin-left: 25cm;">
<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Your location: </label>
<select class="custom-select my-1 mr-sm-2" id="location">
  <option selected>Vietnam</option>
  <option value="1">Hanoi</option>
  <option value="2">Ho Chi Minh City</option>
</select>

<button onclick="model.gymFindLocation()" type="button" class="btn btn-primary my-1">Submit</button>
</form>
<div>
<img style="width: 100%; height: 15cm;" src="..//gym/anh-nen-4.jpg" alt="">
</div>
<hr>

<div class="network-container" >
<h4 style="font-size: 18px;">ARE YOU AIMING TO BECOME MORE TONED AND BUILD SOME MUSCLE OR DO YOU JUST NEED TO DE-STRESS AFTER WORK?</h4>
<p>Going to the gym works out differently for each us. Whatever your goal NL Leisure gyms are equipped to help you reach it.</p>
<p>Our gym facilities are packed with the latest cardio, strength and weights equipment. They're staffed by instructors who can help you get the most from them. With new equipment being rolled out at sports centres across the area, NL Leisure gyms are shaping up nicely.</p>
<p>Would you like to get your heart pumping? You'll find a huge range of cardio equipment from climbing machines and exercise bikes to rowing machines and treadmills. If you're in the business of building muscle, we've made light work of assembling the best kit from barbells and dumbbells to kettlebells and medicine balls. We've also got to the core of strength and conditioning with the latest CrossFit and resistance equipment.</p>
<h4 style="font-size: 18px">ARE YOU READY TO GET STARTED? AS SOON AS YOU'VE COMPLETED YOUR INDUCTION YOU'LL BE READY TO TEST YOUR BODY TO THE LIMIT.</h4>
<p>Sign up to be an NL Leisure member and make the most of your defining moments at the gym.</p>
<div id="list-network"></div>
</div>
`
components.forumScreen = `
<div class="bgimg" style="background-image: url('https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg');" data-stellar-background-ratio="0.5">
    
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="">Class Single Post</h2>
              <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt minima porro, natus sequi ullam.</p>
            </div>
          </div>
        </div>
      
</div>

<div class="forum-containner">
<div class="create-new-post">
    <div class="header">Create a new post</div>
    <form id="upload-post">
        <div class="input-wraper">
            <input type="text" name="title" placeholder="Title...">
        </div>
        <div class="input-wraper">
            <input type="text" name="content" placeholder="Content...">
        </div>
        <input type="file" name="file">
        <button type="submit">Upload file</button>
    </form>
</div>
<div class="main">
    <div class="aside-left">
        
    </div>
    <div class="aside-right">
        <div class="recent-post">
            <div class="title">
                Recent Posts
            </div>
            <div class="list-title">

            </div>
        </div>    
    </div>
</div>
</div>
`
components.showOneForumPost = `


            <div class="one-forum-post">
                <div class="post-content">
                </div>
                <div class="comment-wrapper">
                <form id="send-forum-comment-form">
                <div class="input-wraper">
                    <input type="text" name="comment" placeholder="Type a comment...">
                </div>
                <button type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
                    <div class="list-forum-comment">
                        
                    </div>
                        
                </div>
            </div>
    `

components.contactUsScreen = `

<div class="bgimg" style="background-image: url('https://www.thethaothientruong.vn/uploads/contents/Fitness-la-gi.jpg');" data-stellar-background-ratio="0.5">
    
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="">//</h2>
            </div>
          </div>
        </div>
      
</div>
<div class="site-section bg-light contact-wrap" id="contact-section">
<div class="container">


    <div class="row justify-content-center text-center mb-5">
        <div class="col-md-8  section-heading">
            <span class="subheading">Get In Touch</span>
            <h2 class="heading mb-3">Contact Us</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind
                texts.
            </p>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-md-7">
            <form method="post" data-aos="fade">
                <div class="form-group row">
                    <div class="col-md-6 mb-3 mb-lg-0">
                        <input type="text" class="form-control" placeholder="First name">
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Last name">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Subject">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-12">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-12">
                        <textarea class="form-control" id="" cols="30" rows="10"
                            placeholder="Write your message here."></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-6">

                        <input type="submit" class="btn btn-primary py-3 px-5 btn-block" value="Send Message">
                    </div>
                </div>

            </form>
        </div>
    </div>
</div>
</div>

`
components.loginScreen = `
<div class="bgimg" style="background-image: url('https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg');" data-stellar-background-ratio="0.5">
    
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="">Class Single Post</h2>
              <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt minima porro, natus sequi ullam.</p>
            </div>
          </div>
        </div>
      
      </div>

<section class="sign-in">
<div class="container1">
    <div class="signin-content">
        <div class="signin-image">
            <figure>
                <img src="../image/image-style/81a29540400159.577dcf3623a88.gif"  alt="">
            </figure>
            <a href="#" class="signup-image-link" class="redirect-to-register" onclick="view.setActiveScreen('registerScreen')">Create an account</a>
        </div>
        
        <div class="signin-form">
                <h2 class="form-title">Sign in</h2>
                <form method="POST" class="register-form" id="login-form">
                    <div class="form-group">
                        <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="email" id="name" placeholder="Email" />
                        <div class="error" id="emailError"></div>
                    </div>
                    <div class="form-group">
                        <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                        <input type="password" name="password" id="your_pass" placeholder="Password" />
                        <div class="error" id="passwordError"></div>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                        <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember
                            me</label>
                    </div>
                    <div class="form-group form-button">
                        <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                    </div>
                </form>
                <div class="social-login">
                    <span class="social-label">Or login with</span>
                    <ul class="socials">
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                    </ul>
                </div>
        </div>
    </div>
</div>
</section>
`
components.registerScreen = `
<div class="bgimg" style="background-image: url('https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg');" data-stellar-background-ratio="0.5">
    
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="">Class Single Post</h2>
              <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt minima porro, natus sequi ullam.</p>
            </div>
          </div>
        </div>
      
      </div>

<section class="signup">
<div class="container1">
    <div class="signup-content">
        <div class="signup-form">
            <div>
                <h2 class="form-title">Sign up</h2>
            </div>
            <form method="POST" class="register-form" id="register-form">
                <div class="form-group">
                    <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="yourName" id="name" placeholder="Your Name" />
                    <div class="error" id="your-name-error"></div>
                </div>
                <div class="form-group">
                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <div class="error" id="email-error"></div>
                </div>
                <div class="form-group">
                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                    <input type="password" name="password" id="pass" placeholder="Password" />
                    <div class="error" id="password-error"></div>
                </div>
                <div class="form-group">
                    <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                    <input type="password" name="confirmPassword" id="re_pass" placeholder="Repeat your password" />
                    <div class="error" id="confirmPassword-error"></div>
                </div>
                

                <div class="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all
                        statements in <a href="#" class="term-service">Terms of service</a></label>
                </div>
                <div class="form-group form-button">
                    <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                </div>

            </form>
        </div>
        <div class="signup-image">
            <figure><img src="../image/image-style/81a29540400159.577dcf3623a88.gif" alt="sing up image">
            </figure>
            <a href="#" class="signup-image-link" id="redirect-to-login">I am already member</a>
        </div>
    </div>
</div>
</section>
`

components.homeScreen =`
<div>
<a id="bgndVideo" class="player"
    data-property="{videoURL:'https://www.youtube.com/watch?v=w-cRWOjlk8c',showYTLogo:false, showAnnotations: false, showControls: false, cc_load_policy: false, containment:'#home-section',autoPlay:true, mute:true, startAt:255, stopAt: 271, opacity:1}">
</a>

<div class="intro-section" id="home-section" style="background-color: #ccc;">
    <div class="container">

        <div class="row align-items-center">
            <div class="col-lg-12 mx-auto text-center" data-aos="fade-up">
                <h1 class="mb-3">We Believe Little Things Matter</h1>
                <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci voluptate, optio praesentium. Ex, veniam, harum.</p>
                <p class="text-center">
                    <a href="#" class="btn btn-outline-white py-3 px-5">Get Started</a>
                </p>
            </div>
        </div>

    </div>
</div> 

<div class="site-section">
    <div class="container">

        <div class="row justify-content-center text-center mb-5">
            <div class="col-md-8 section-heading">
                <span class="subheading">Stay Healthy</span>
                <h2 class="heading mb-3">Get A Perfect Body</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.</p>
            </div>
        </div>

        
        <div class="owl-carousel nonloop-block-14 block-14" data-aos="fade">
            <div class="slide">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-fit"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Be Fit</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>

            <div class="slide">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-gym-1"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Join Club</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

            <div class="slide">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-gym"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Gym Fitness</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

            <div class="slide">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-vegetables"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Eat Vegie</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

            <div class="slide">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-fruit-juice"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Fruit Juices</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

            <div class="slide">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-stationary-bike"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Body Warmup</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>

<div class="bgimg" style="background-image: url('images/bg_2.jpg');" data-stellar-background-ratio="0.5">

    <div class="container">
        <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
                <h2 class="">Get The Result You Want</h2>
                <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur, laudantium quia blanditiis ipsum. <a href="#" target="_blank">Get Started</a>
                </p>
            </div>
        </div>
    </div>

</div>

<div class="site-section" id="classes-section">
    <div class="container">
        <div class="row justify-content-center text-center mb-5">
            <div class="col-md-8  section-heading">
                <span class="subheading">Fitness Class</span>
                <h2 class="heading mb-3">Classes</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_1.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #1</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>

                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_2.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #2</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>

                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_3.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #3</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>

                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_4.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #4</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>

                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_1.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #5</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>


            </div>
            <div class="col-lg-6">
                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_1.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #1</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>

                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_2.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #2</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>

                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_3.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #3</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>

                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_4.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #4</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>

                <div class="class-item d-flex align-items-center">
                    <a href="single.html" class="class-item-thumbnail">
                        <img src="images/img_1.jpg" alt="Image">
                    </a>
                    <div class="class-item-text">

                        <h2><a href="single.html">Fitness Class Name #5</a></h2>
                        <span>By Justin Daniel</span>,
                        <span>30 minutes</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="bgimg" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
    <div class="container">
        <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
                <h2 class="">Every Step Counts</h2>
                <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore ad, reprehenderit enim!
                    <a href="#" target="_blank">Get Started</a></p>
            </div>
        </div>
    </div>
</div>

<div class="site-section" id="schedule-section">
    <div class="container">
        <div class="row justify-content-center text-center mb-5">
            <div class="col-md-8  section-heading">
                <span class="subheading">Fitness Sched</span>
                <h2 class="heading mb-3">Schedule</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind
                    texts.
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.</p>
            </div>
        </div>




        <div class="tab-content">
            <div class="tab-pane fade show active" id="nav-sunday" role="tabpanel"
                aria-labelledby="nav-sunday-tab">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Sunday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-monday" role="tabpanel" aria-labelledby="nav-monday-tab">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Monday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-tuesday" role="tabpanel" aria-labelledby="nav-tuesday-tab">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Tuesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-wednesday" role="tabpanel" aria-labelledby="nav-wednesday-tab">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Wednesday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="nav-thursday" role="tabpanel" aria-labelledby="nav-thursday-tab">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Thursday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-friday" role="tabpanel" aria-labelledby="nav-friday-tab">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Friday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-saturday" role="tabpanel" aria-labelledby="nav-saturday-tab">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>




                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-6">
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_3.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #3</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #1</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_2.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #2</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>



                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_4.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #4</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>

                        <div class="class-item d-flex align-items-center">
                            <a href="single.html" class="class-item-thumbnail">
                                <img src="images/img_1.jpg" alt="Image">
                            </a>
                            <div class="class-item-text">
                                <span>Saturday 7:30am - 9:00am</span>
                                <h2><a href="single.html">Fitness Class Name #5</a></h2>
                                <span>By Justin Daniel</span>,
                                <span>30 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>


<div class="bgimg" style="background-image: url('images/bg_1.jpg');" data-stellar-background-ratio="0.5">
    <div class="container">
        <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
                <h2 class="">Your Fitness Partner Where Ever You Are</h2>
                <p class="lead mx-auto desc mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate distinctio, quasi omnis!
                    at <a href="#" target="_blank">Get Started</a></p>
            </div>
        </div>
    </div>
</div>


<div class="site-section" id="trainer-section">
    <div class="container">
        <div class="row justify-content-center text-center mb-5" data-aos="fade-up">
            <div class="col-md-8  section-heading">
                <span class="subheading">Trainer</span>
                <h2 class="heading mb-3">Our Trainers</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind
                    texts.
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay="">
                <div class="person">
                    <img src="images/person_1.jpg" alt="Image" class="img-fluid">
                    <h3>Justin Daniel</h3>
                    <p class="position">Trainer</p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind
                        texts.</p>
                </div>
            </div>
            <div class="col-lg-3 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay="100">
                <div class="person">
                    <img src="images/person_3.jpg" alt="Image" class="img-fluid">
                    <h3>Matthew Davidson</h3>
                    <p class="position">Trainer</p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind
                        texts.</p>
                </div>
            </div>
            <div class="col-lg-3 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
                <div class="person">
                    <img src="images/person_2.jpg" alt="Image" class="img-fluid">
                    <h3>Matthew Davidson</h3>
                    <p class="position">Trainer</p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind
                        texts.</p>
                </div>
            </div>
            <div class="col-lg-3 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">
                <div class="person">
                    <img src="images/person_4.jpg" alt="Image" class="img-fluid">
                    <h3>Matthew Davidson</h3>
                    <p class="position">Trainer</p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind
                        texts.</p>
                </div>
            </div>

        </div>
    </div>
</div>
<div class="site-section" id="services-section">
    <div class="container">
        <div class="row justify-content-center text-center mb-5" data-aos="fade-up">
            <div class="col-md-8  section-heading">
                <span class="subheading">Fitness Services</span>
                <h2 class="heading mb-3">Services</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind
                    texts.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-fit"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Be Fit</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-gym-1"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Join Club</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-gym"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Gym Fitness</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-vegetables"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Eat Vegie</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-fruit-juice"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Fruit Juices</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="ftco-feature-1">
                    <span class="icon flaticon-stationary-bike"></span>
                    <div class="ftco-feature-1-text">
                        <h2>Body Warmup</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind
                            texts.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>

`