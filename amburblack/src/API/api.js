import AXIOS from "axios";

const URL_API = "http://192.168.1.68:3001";

const axios = AXIOS.create({ timeout: 1500 });

class AP {
    async GET(link) {
        var pet;
        if (link[0].length > 1) {
            pet = [];
            link.forEach(link => {
                pet.push(axios.get(`${URL_API}/${link}`));
            });
        } else {
            pet = await axios.get(link)
                .then((resp) => {
                    return resp;
                });
        }
        return pet;
    }
    async POST(url, datos, config = {}) {
        return await axios.post(url, datos, config)
            .then((resp) => {
                return resp;
            });
    }
}

const API = new AP();

export {
    API,
    URL_API
}