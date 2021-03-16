import { useEffect, useState } from 'react';

// type formData = [
//   {
//     // id:number,
//     startYear: number,
//     endYear: number,
//     dateRange: string,
//   }
// ]

const DogForm = () => {

  // const data:formData = [
  //   {
  //     id: 0,
  //     name: 'Lefty',
  //     age: 8,
  //     breed: 'Daschund Mix',
  //   },
  // ]

  let d = new Date();
  let n = d.getFullYear();

  // const [id, setId] = useState(data[0].id);
  const [startYear, setStartYear] = useState<number>(2019);
  const [endYear, setEndYear] = useState<number>(2020);
  const [dateRange, setDateRange] = useState('Year Range');
  // const [newData, setNewData] = useState<Array<any>>([]);

  const selectOptions = ["Last 10 years", "Last 2 years", "Last year", "This year", "Custom", "Next 5 years" ]

  useEffect(() => {
    if(dateRange === "Last 10 years") {
      setStartYear(n - 9);
      setEndYear(n);
    } else if (dateRange === "Last 2 years") {
      setStartYear(n - 1);
      setEndYear(n);
    } else if (dateRange === "Last year") {
      setStartYear(n - 1);
      setEndYear(n - 1);
    } else if (dateRange === "This year" ) {
      setStartYear(n);
      setEndYear(n);
    } else if (dateRange === "Next 5 years") {
      setStartYear(n);
      setEndYear(n + 5);
    }
  }, [dateRange]);

  useEffect(() => {
    if( startYear === (n - 9) && endYear === (n)) {
      setDateRange("Last 10 years");
    } else if ( startYear === (n - 1) && endYear === (n)) {
      setDateRange("Last 2 years");
    } else if ( startYear === (n - 1) && endYear === (n - 1)) {
      setDateRange("Last year");
    } else if ( startYear === (n) && endYear === (n + 5)) {
      setDateRange("Next 5 years");
    } else if ( startYear === (n) && endYear === (n)) {
        setDateRange("This year");
    } else {
      setDateRange("Custom");
    }
  }, [startYear, endYear]);


  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(startYear);
    console.log(endYear);
    console.log(dateRange);
    // setNewData([ ...newData, { id, name, age, breed } ]);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="user-form">
        <select value={dateRange} onChange={(e) => setDateRange(e.currentTarget.value)}>
            <option>{dateRange}</option>
            {selectOptions.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
          })}
          </select>
        <input value={startYear} onChange={e => setStartYear(parseInt(e.target.value))} />

        <input value={endYear} onChange={e => setEndYear(parseInt(e.target.value))} />

        {endYear < startYear ? <button disabled>Submit</button> : <button>Submit</button>}
      </form>
      {/* // <h3>List of Dogs</h3>
      // <ul>
      //   {newData.map((item) => <li key={item.id}>{item.name}, {item.age}, {item.breed}</li>)}
      // </ul> */}
    </div>
  )
}

export default DogForm;