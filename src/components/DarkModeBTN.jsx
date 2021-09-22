/*
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
*/

const DarkMode = () => {
  return (
    <>
      <div className="darkmode-button">
        <input type="checkbox" className="checkbox" id="checkbox"/>
        <label for="checkbox" className="label">
          <i className="fas fa-moon"></i>
          <i className='fas fa-sun'></i>
          <div className='ball'/>
        </label>
      </div>
    </>
  )
}

export default DarkMode;