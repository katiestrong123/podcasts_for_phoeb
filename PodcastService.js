const baseURL = 'http://localhost:3000/api/podcasts/'
 
export const getPodcasts = () =>{
    return fetch(baseURL)
    .then(res => res.json())
}
 
export const postPodcast = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
        })
    .then(res => res.json());
}
 
export const deletePodcast = (id) =>{
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
