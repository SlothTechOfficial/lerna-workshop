import axios from 'axios';

export const Translate = {
    Message: async (message, lang)=>{
        return new Promise(async (resolve, reject)=>{
            if(!message) return reject("Empty message")

            //you need to change the endpoint
            const response = await axios.get(`http://localhost:9000/dev/translate?message=${message}&lang=${lang}`)
                            .catch(error=>reject(error))

            resolve(response.data);
        })
    }
}
