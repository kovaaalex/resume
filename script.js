const progress = {
    "html": 90,
    "css": 80,
    "js": 60,
    "cpp": 50,
    "sql": 60,
    "git": 40,
    "figma": 40
}
const wrappers = document.querySelectorAll('.progress__wrapper')
wrappers.forEach(wrapper => innerProgress(wrapper))
function innerProgress(wrapper){
    let closestID = wrapper.closest('.progress__container').id
    let skillProgress = progress[closestID]
    wrapper.innerHTML = `<div class="progress" style="height: 100%; width: ${skillProgress}%; background-color: #333333;"></div>`
}
