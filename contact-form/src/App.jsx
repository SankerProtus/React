import './App.css'
import Card from './components/Card'
import contacts from './components/contacts'

function App() {

  const createCard = function(contact) {
    return (
      <Card 
          key={contact.id}
          name={contact.name}
          sex={contact.sex}
          email={contact.email}
          src={contact.src}
          membershipNumber={contact.membershipNumber}
          country={contact.country}
          tel={contact.tel}
          dateIssued={contact.dateIssued}
          expiryDate={contact.expiryDate}
      />
    )
  }

  return (
    <>
      {contacts.map(contact => createCard(contact))}
    </>
  )
}

export default App
