function personById(id){
            const baseUrl = "https://rickandmortyapi.com/api/character/"
            return fetch(`${baseUrl}${id}`)
      .then(response => response.json())
      .then(response => {
          const item = [response]
          const person = item.map( results => {
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
export default personById