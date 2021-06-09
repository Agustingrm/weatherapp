import { getWeather } from "./getWeather"

const search = () => {
    const searchButton = document.getElementById('searchButton')
    
    searchButton.addEventListener('click',()=>{
        getWeather()
    })
}

export default search;