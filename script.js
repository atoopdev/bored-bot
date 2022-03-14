

fetch('https://apis.scrimba.com/bored/api/activity')
.then(response => response.json())
.then(data =>{
    console.log(data)
    document.getElementById("activityEL").innerHTML = `
    <h1>${data.activity}</h1>`
})
