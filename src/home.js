import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'reactstrap'

const Home = () => {

  const [poke, setPoke] = useState(null)
  const [pokedata, setPokedata] = useState(null)

  useEffect(() => {
    const PokemonSearch = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon")

      if (response.ok) {
        const json = await response.json()
        console.log(json)
        setPoke(json)
        PokemonSearch2()
      } else {
        const error = await response.text()
        console.log(error)
      }
    }
    PokemonSearch()

    const PokemonSearch2 = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1")

      if (response.ok) {
        const json2 = await response.json()
        console.log(json2)
        setPoke(json2)
      } else {
        const error = await response.text()
        console.log(error)
      }
    }
  }, [])
  if (!poke) {
    return (
      <p>Cargando Pokemon HOLA PERRO</p>
    )
  }

  return (
    <>
      <br />
      <br />
      <br />
      <div className="ui containe">
        <Container className=" themed-container">
          <Row className="ui grid centered">
            {poke.results.map((col, i) => (
              <Col key={i} >
                {/* {getPokemonData(col.url)} */}
                <div className="ui card">
                  <div className="content">
                    <p className="center aligned">{col.name.toUpperCase()}</p>
                  </div>
                </div>
                <br />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home