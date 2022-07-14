const getBreeds = async () => {
    const url = "https://api.thedogapi.com/v1/breeds"; //contiene la dirección del endpoint(o sea su dire final).
    const res = await fetch(url);
    
    if(!res.ok) {
        const {url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);  //más explicito p/el dev.

    }
    
    const breeds = await res.json(); //ene sta data recibimos las distintas breeds(razas)
    
    return breeds;
}

export default getBreeds