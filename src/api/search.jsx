import React from 'react'

export default function search(keyword){
        const baseUrl = "https://rickandmortyapi.com/api/character/?name="
return fetch(`${baseUrl}${keyword}`)
      .then(response => response.json())
      .then(response => {
          const results = response.results
          const person = results.map( results => {
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
          return false
      })
}