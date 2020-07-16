import React, {useState, useEffect} from 'react'
import pet, {ANIMALS} from '@frontendmasters/pet'

const SearchParams = () => {

    const [location,setLocation] = useState("Seattle, WA") 
    const [animal, Animal] = useState("dog")
    const [breed, setBreed] = useState("")
    const [breeds, setBreeds] = useState([])

    useEffect(() =>{
        setBreeds([])
        setBreed("")

        pet.breeds(animal).then(({breeds}) => {
            const breedStrings = breeds.map(({name}) => name)
            setBreeds(breedStrings)
        }, console.error)
    })
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                <input 
                    id="location" 
                    value={location} 
                    placeholder="location" 
                    //Whenever ther is an event, setLocation to e.target.value
                    onChange={e =>setLocation(e.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        //some screen readers do not register onChange, so we will also use inBlur
                        onBlur={e => setAnimal(e.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => {
                            <option key={animal} value={animal}>{animal}</option>
                        })}
                    </select> 
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                        disabled={breeds.length === 0}
                    >
                        <option>All</option>
                        {breeds.map(breedString => <option key={breedString}>
                            {breedString}    
                        </option>)}
                    </select>

                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams

