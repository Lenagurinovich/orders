import Card from './Components/Card/Card';
import './App.scss'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [adres, setAdres] = useState('')

  const [openCards, setOpenCards] = useState(false)



    
  // массив всех заказов
  const [orders, setOrders] = useState([]);


  function sendOrder(firstName, secondName, phone, email, adres){
    const order = {
      firstName,
      secondName, 
      phone, 
      email, 
      adres
    };
    orders.push(order);
  }




  return (
    <>
      <form>
        <div className="inputs">
          <input type="text" value={firstName} placeholder='ИМЯ' onChange={(e) => {setFirstName(e.target.value)}}/>
          <input type="text" value={secondName} placeholder='ФАМИЛИЯ' onChange={(e) => {setSecondName(e.target.value)}}/>
          <input type="text" value={phone} placeholder='телефон' onChange={(e) => {setPhone(e.target.value)}}/>
          <input type="text" value={email} placeholder='Электронная почта' onChange={(e) => {setEmail(e.target.value)}}/>
          <input type="text" value={adres} placeholder='Адрес доставки' onChange={(e) => {setAdres(e.target.value)}}/>
        </div>  
        <button type='button' onClick={() => {
          sendOrder(firstName, secondName, phone, email, adres);


          setFirstName('');
          setSecondName('');
          setAdres('');
          setPhone('');
          setEmail('');
        }}>Оформить заказ</button>
      </form>


      <button className='openCard' onClick={() => {setOpenCards(!openCards);}}>Все заказы</button>
      {openCards &&(
        
          <div className='cards'>
            {orders.map( function(item, index) {
              return(<Card key={index} firstName={item.firstName} secondName={item.secondName} phone={item.phone} email={item.email} adres={item.adres} />);
              
            
          })   
            }
           
          </div>
        
  )}


      
    </>
  )
}

export default App
