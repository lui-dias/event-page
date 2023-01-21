import './FormCheck.css';

export const FormCheck = () => {
  return (
    <section className='container-form flex'>
      <form action="#" className='form grid'>
        <h2 className='title-form'>Check the record</h2>

        <div className='input-gap grid'>
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

        <button className='subscribe-button'>Verify</button>
      </form>
    </section>
  )
}