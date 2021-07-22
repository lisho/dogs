
const getPerro = async (razaId) => {

    let url;
    console.log(razaId)
    if (!razaId || razaId === 0) {
        url = 'https://api.thedogapi.com/v1/images/search';
    } else {
        url = 'https://api.thedogapi.com/v1/images/search?breed_ids='+ razaId;
    }
   



    const res = await fetch(url);
    const [data] = await res.json();

    const { url : image, breeds:[breed] } = data;
    
    const perro = {
        image,
        breed,
    }

    return perro;
}

export default getPerro;
