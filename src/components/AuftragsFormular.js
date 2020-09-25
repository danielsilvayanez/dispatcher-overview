import React, { useState } from 'react'

export default function AuftragsFormular() {
  const [neuerAuftrag, setNeuerAuftrag] = useState({
    auftragsnummer: '',
    datum: '',
    start: '',
    ankunft: '',
    erledigt: '',
    status: '',
    gebiet: '',
    notiz: '',
  })

  function handleChange(event) {
    setNeuerAuftrag({
      ...neuerAuftrag,
      [event.target.name]: event.target.value,
    })
    console.log(neuerAuftrag.auftragsnummer)
  }

  function handleSubmit() {}

  return (
    <form action="">
      <label htmlFor="">
        Auftragsnummer
        <input
          name="auftragsnummer"
          type="text"
          value={neuerAuftrag.auftragsnummer}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>senden</button>
    </form>
  )
}
