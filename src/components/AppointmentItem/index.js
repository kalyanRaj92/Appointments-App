// Write your code here
/* const AppointmentItem = props => {
  const {arrayList, toggleStar} = props
  const {id, titles, dates, isFavorite} = arrayList

  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const starButton = () => {
    toggleStar(id)
  }
  return (
    <li key={id}>
      <div>
        <h1>{titles}</h1>
        <p>{dates}</p>
        <button type="button" onClick={starButton} testid="star">
          <img src={imgUrl} alt="star" />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem */

import './index.css'

const AppointmentIem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button type="button" className="star-button" onClick={onClickStar}>
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentIem
