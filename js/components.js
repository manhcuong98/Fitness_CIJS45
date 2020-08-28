const components = {}
components.programsScreen = `
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
<button type="button" class="btn btn-primary" onclick="model.filter()">Submit</button>
</form>
    <div class="program-container">
        <div class="list-program"></div>
    </div>
`
components.showProgram = `
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
components.forumScreen =`
<div class="forum-containner">
<div class="forum-header">
    Forum
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
components.showOneForumPost=`
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



    