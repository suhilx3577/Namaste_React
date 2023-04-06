
async function getRestro(setAllRestos, setFiltRestos){

  /* 
  This is the NO CORS Link
  https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999 
  
  This is the original Link of swiggy
  https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0081639&lng=77.7122996&page_type=DESKTOP_WEB_LISTING
  */


    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0081639&lng=77.7122996&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setAllRestos(json.data?.cards[2]?.data?.data?.cards)
    setFiltRestos(json.data?.cards[2]?.data?.data?.cards)

    // console.log(json)
  }

  export default getRestro