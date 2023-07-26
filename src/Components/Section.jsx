function Section({ info }) {
  return (
    <div>
      <section className="container">
        <img src={info.photo} />
        <p>{info.desc}</p>
      </section>
    </div>
  )
}

export default Section
