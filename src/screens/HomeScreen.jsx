import axios from 'axios'
import React, {useState, useEffect} from 'react'

const HomeScreen = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [num, setNum] = useState(765)

  // https://pokeapi.co/api/v2/pokemon/ditto
  // https://pokeapi.co/v2/pokemon/ditto

  // const getData = async () => {
  //   const res = await axios({
  //     method: 'GET',
  //     url: "https://pokeapi.co/api/v2/pokemon/ditto"
  //   })
  //   console.log(res.data.name)
  // }


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
    // getData()
  }, [])

  

  if(loading) {
   return <h1>Loading</h1> 
  }
  if(!loading && data === {}) {
    return <h1>There was a problem</h1>
  }
  if(data.name) {
    return (
      <div className='main-page'>
        <h1>{data.name}</h1>
      </div>
    )
  }
}

export default HomeScreen