const Navbar = ({ show }) => {

 return (
  <div className={show ? 'sidenav active' : 'sidenav'}>
   <ul>
    <li>
     <a href="/">Home</a>
    </li>

    <li>
     <a href="/">About</a>
    </li>

    <li>
     <a href="/">Contact me</a>
    </li>


   </ul>
  </div>
 )
}

export default Navbar