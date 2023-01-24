import { Calendar } from 'phosphor-react';
import { Link } from 'react-router-dom';

import EventPicture from '../../assets/projeto-picture.jpg';
import './Info.css';

export const Info = () => {
  return (
    <main className='container-info flex'>
      <section className='info grid'>
        <header className='header flex'>
          <h1>Event Page</h1>
          <Calendar size={42} color='#FFF'/>
        </header>

        <p className='event-description'>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <Link to='/checkForm'  className='sign-button'>
          Have you signed up yet?
        </Link>
      </section>

      <section className='picture'>
        <img src={EventPicture} />
      </section>
    </main>
  )
}