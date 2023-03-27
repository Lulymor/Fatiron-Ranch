import {useState} from 'react'

const defaultData = {
  name: '',
  image: '',
  isGood: ''
}

export default function NewAnimalForm() {

  return (
  <div>
    <form id='new-form'>
        <input
                name='name'
                type="text"
                placeholder="name"
              />
        <input
                name='image'
                type="text"
                placeholder="image"
              />
        <select  name='isGood'>
          <option value={true}>Good</option>
          <option value={false}>Bad</option>
        </select>

        <button>Add new animal</button>
    </form>
  </div>
  )
}