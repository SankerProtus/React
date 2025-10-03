import Profile from "./Profile";

function Card({ name, sex, email, src, membershipNumber, country, tel, dateIssued, expiryDate}) {
 
  return (
    <>
      <section className="container">
        <div className="card">
          <div className="top">
            <div>
              <h3 className="name">{name}</h3>
              <p>Sex: {sex}</p>
              <p>Email: {email}</p>
            </div>
            <Profile src={src} alt={name} />
          </div>

          <div className="bottom">
            <div className="info">
              <p>Membership: {membershipNumber}</p>
              <p>Country: {country}</p>
              <p>Tel: {tel}</p>
            </div>
            <div>
              <p>Date of Issue: {dateIssued}</p>
              <p>Expiry Date: {expiryDate}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;