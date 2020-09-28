document.addEventListener("DOMContentLoaded", function(){
    const counter = document.getElementById('counter')
    const pauseButton = document.getElementById('pause')
    const plusButton = document.getElementById('+')
    const minusButton = document.getElementById('-')
    const likeButton = document.getElementById('<3')
    const submitButton = document.getElementById('submit')
    const commentForm = document.getElementById('comment-form')
    const commentList = document.getElementById('list')
    const likesList = document.getElementsByClassName('likes')[0]

    const oneSec = () => {
        counter.innerText = parseInt(counter.innerText, 10) + 1
    }

    const subtractSec = () => {
        counter.innerText = parseInt(counter.innerText, 10) - 1
    }
    
    let count = setInterval(oneSec, 1000)

    const toggleButtons = () => {
        plusButton.disabled = !plusButton.disabled
        minusButton.disabled = !minusButton.disabled
        likeButton.disabled = !likeButton.disabled
        submitButton.disabled = !submitButton.disabled
    }
    
    pauseButton.addEventListener("click", function(){
        toggleButtons()
        if(!pauseButton.className){
            clearInterval(count)
            pauseButton.className += "paused"
            pauseButton.innerText = "resume"
        }
        else{
            count = setInterval(oneSec, 1000)
            pauseButton.classList.remove("paused")
            pauseButton.innerText = "pause"
        }
    })

    plusButton.addEventListener("click", function(){
        oneSec()
    })

    minusButton.addEventListener("click", function(){
        subtractSec()
    })

    const likesIncludes = () => {
        likes = likesList.children
        for (let i = 0; i < likes.length; i++) {
            if (parseInt(likesList.children[i].id, 10) === parseInt(counter.innerText, 10)){
                return true
            }
        }
        return false
    }


    likeButton.addEventListener('click', () => {
        if(!likesIncludes()){
            numLike = document.createElement("li")
            numLike.id = counter.innerText
            numLike.innerHTML = `${counter.innerText} has been liked <span class="num">1</span> time<span class="plu"></span>`
            likesList.append(numLike)
        }
        else{
            numLike = document.getElementById(counter.innerText)
            num = numLike.children[0]
            plu = numLike.children[1]
            num.innerText = parseInt(num.innerText, 10) + 1
            plu.innerText = "s"
        }
    })  

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault()
        text = e.target.comment.value
        p = document.createElement("p")
        p.innerText = text
        commentList.appendChild(p)
        e.target.reset()
    })
})