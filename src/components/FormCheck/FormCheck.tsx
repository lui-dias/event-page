import './FormCheck.css';

export const FormCheck = () => {
  return (
    <section className='container-form flex'>
      <form action="#" className='form grid'>
        <h2 className='title-form'>Check the record</h2>

        <div className='form-check input-gap grid'>
          <div className='input-wrapper input-gap grid'>
            <label className='form-check label-gap grid'>
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