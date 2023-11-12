import './card.scss'

export default function Card( props ) {
  return (

    <div className='card'>
        <h2>{`ФИ: ${props.firstName} ${props.secondName}`}</h2>
        <h3>{`Адрес доставки: ${props.adres}`}</h3>
        <p>{`Тел: ${props.phone}`}</p>
        <p>{`e-mail: ${props.email}`}</p>
    </div>
  )
}
