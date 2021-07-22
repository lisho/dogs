
const getRazas = async () => {
    const url = 'https://api.thedogapi.com/v1/breeds';
    const res = await fetch(url);

    /* Gastion de errores */

    if (!res.ok) {
        const { url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }

    const razas = await res.json();

    return razas;
}

export default getRazas;
