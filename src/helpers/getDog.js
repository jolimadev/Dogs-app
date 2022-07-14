 
 
 const getDog = async (breedId) => {
    const url = !breedId || breedId === 0
    ? "https://api.thedogapi.com/v1/images/search"   //contiene la dirección del endpoint(o sea su dire final).
    : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId

    const res = await fetch(url);

    if(!res.ok) {
        const {url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);  //más explicito p/el dev.
    }

    const [data] = await res.json(); //en esta data recibimos las distintas breeds(razas)

    let { url: image, breeds: [breed] } = data;

    if(!breed) {
        breed = {
            id: 0,
            name: 'random'
        }
    }

    const dog = {
        image,
        breed,
      }

    return dog;
} 
export default getDog