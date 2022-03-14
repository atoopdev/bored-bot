
document.getElementById("buttonEL").addEventListener("click", getActivity)


function getActivity(){
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        document.getElementById("activityEL").innerHTML = `
        <h2>${data.activity}</h2>`
    })
}