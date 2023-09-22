import React from 'react'
import styles from './Informatiomn.module.css'
import Container from 'react-bootstrap/esm/Container'
export default function Information({info}) {
  //console.log(info);
  return (
    <section className={styles.information}>
    <Container fluid>
    {info.map((el)=>(
      <div className={styles.card} key={el.id} >
        <h2>{el.h2}</h2>
        <p>{el.p}</p>
      </div>
    ))}
    </Container>
    </section>
  )
}
