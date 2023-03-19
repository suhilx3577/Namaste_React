
export function filterData(allRestos,searchText){
    return(
      allRestos.filter((rest)=> rest?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
    )
  }