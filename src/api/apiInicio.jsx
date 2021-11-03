function apiInicio(){
            const baseUrl = "https://rickandmortyapi.com/api//character/1,2,3,4"
            return fetch(baseUrl)
      .then(response => response.json())
      .then(response => {
          const person = response.map( results => {
          const {id} = results
          const {name} = results
          const {image} = results
          const {location} = results
          const {species} = results
          const {status} = results
          const {gender} = results
          return {id, name, image, location, species, status, gender }
        })
        return person
      })
      .catch(error => {
          return error
      })
}
export default apiInicio