document.getElementById('like').addEventListener('click', function(e) {
    let favouriteImages = localStorage.getItem('fImages')
    if (!favouriteImages) { 
        favouriteImages = []
    } else {
        favouriteImages = JSON.parse(favouriteImages)
    }
    let imageSrc = document.getElementById('image').src

    if(imageSrc != '') {
        let dateStr = window.location.search
        dateStr = dateStr.replace("?date=", "")
        const item = {
            date: dateStr,
            image: imageSrc
        }
        favouriteImages.push(item)
        localStorage.setItem('fImages', JSON.stringify(favouriteImages))
    }
})

document.getElementById('image').addEventListener('click', function() {
    const hdurl = this.getAttribute('data-hdurl')
    document.getElementById('hd-image').src = hdurl
    document.getElementById('toggle').click()
})

let dateString = window.location.search
dateString = dateString.replace("?date=", "")
getData(dateString)


async function getData(dateString) {
    const ApiKey = 'bsTjVp1CBqdD2UhVOqXYJvcACxOj2GKIjOltCoWQ'
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}&date=${dateString}`)
    const json = await response.json()
    document.getElementById('image').src = json.url
    document.getElementById('image').setAttribute('data-hdurl', json.hdurl)
    document.getElementById('title').textContent = json.title
    document.getElementById('explaination').textContent = json.explanation
}