import axios from 'axios';
export const ChuckNorris= {
    Joke: async ()=>{
        return new Promise(async (resolve, reject)=>{
            const response = await axios.get('https://api.chucknorris.io/jokes/random')
                            .catch(error=>reject(error))
            resolve(response.data);
        })
    }
}
