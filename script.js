
document.getElementById("buttonEL").addEventListener("click", getActivity)


function getActivity(){
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        document.getElementById("activityEL").textContent =`⭐️ ${data.activity} ⭐️` 
    })
    render()
}

function render(){
    document.body.classList.remove("gray-bg")
    document.body.classList.add("blue-bg")
    document.getElementById("titleEL").innerText = "🎉 Activity Finder 💃 🎈"
}
