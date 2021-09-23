const checkbox = document.getElementById("whateveriwant");

console.log(checkbox);

//checkbox.addEventListener('change', ()=>{
  //document.body.classList.toggle('dark');
//})


const DarkModeBtn = () => {
  return (

    <div className="toggleWrapper" id="whateveriwant">
      <input type="checkbox" className="" id="checkbox" />
      <label htmlFor="checkbox" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  )
}

export default DarkModeBtn;