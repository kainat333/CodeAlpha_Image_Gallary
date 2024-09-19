const Navbar=()=>{
return(<nav className="bg-gray-800 p-4 text-white">
    <ul className="flex space-x-4">
      <li>
        <a href="#home" className="hover:text-gray-400">Home</a>
      </li>
      <li>
        <a href="#gallery" className="hover:text-gray-400">Gallery</a>
      </li>
    </ul>
  </nav>);
}
export default Navbar