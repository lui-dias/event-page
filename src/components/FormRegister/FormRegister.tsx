import './FormRegister.css';

export const FormRegister = () => {
  return (
    <section className='container-form flex'>
      <form action="#" className='form grid'>
        <h2 className='title-form'>Subscribe to event</h2>

        <div className='form-register input-gap grid'>
          <div className='input-wrapper input-gap flex'>
            <label className='label-gap grid'>
              First Name
              <input />
            </label>

            <label className='label-gap grid'>
              Last Name
              <input />
            </label>
          </div>

          <div className='input-wrapper input-gap grid'>
            <label className='label-gap grid'>
              Nickname
              <input />
            </label>

            <label className=' label-gap grid'>
              Email
              <input />
            </label>
          </div>
        </div>

        <button className='subscribe-button'>Subscribe</button>
      </form>
    </section>
  )
}