document.getElementById('find').addEventListener('click', async function(e) {
    const year = document.getElementById('year').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        alert('Please input valid datetime value')
    } else {
        const dateString = `${year}-${month}-${day}`
        const inputDate = Date.parse(dateString)
        const currentDate = new Date()

        if (inputDate <= currentDate) {
            let $link = document.getElementById('link')
            $link.href = `/search.html?date=${dateString}`
            $link.click()
            // document.write(JSON.stringify(json))
        } else {
            alert('Can not get data for future date')
        }
    }
})
