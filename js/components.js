const components = {}
components.programsScreen = `
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
                        <button type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
    
`