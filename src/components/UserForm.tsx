import { useEffect, useState, useContext } from 'react';

type formData = [
  {
    id:number,
    name: string,
    age: number,
    breed: string,
  }
]

const UserForm = () => {

  const data:formData = [
    {
      id: 0,
      name: 'Lefty',
      age: 8,
      breed: 'Daschund Mix',
    },
  ]

  const [id, setId] = useState(data[0].id);
  const [name, setName] = useState(data[0].name);
  const [age, setAge] = useState<number>(data[0].age);
  const [breed, setBreed] = useState(data[0].breed);
  const [newData, setNewData] = useState<Array<any>>([...data]);

  useEffect(() => {
    newData ? console.log(newData) : console.log('no data yet');
    setId(id + 1);
  }, [newData])


  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewData([ ...newData, { id, name, age, breed } ]);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="user-form">

        <input value={name} onChange={e => setName(e.target.value)} />

        <input value={age} onChange={e => setAge(parseInt(e.target.value))} />

        <select value={breed} onChange={(e) => setBreed(e.currentTarget.value)}>
          <option>{breed}</option>
          <option value="Boston Terrier">Boston Terrier</option>
          <option value="Tibetan Spaniel">Tibetan Spaniel</option>
          <option value="Pug">Pug</option>
        </select>
        <button>Submit</button>
      </form>
      <h3>List of Dogs</h3>
      <ul>
        {newData.map((item) => <li>{item.name}, {item.age}, {item.breed}</li>)}
      </ul>
    </div>
  )
}

export default UserForm;