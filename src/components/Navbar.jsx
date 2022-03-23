import "./css/navbar.css"
import { useNavigate } from 'react-router';

const links = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
  //   add the other link as well
];

export const Navbar = () => {

  const navigate = useNavigate()
  return (
      <div className="navbar-css">
        {links.map((item) => {
          return <Navbarhead 
                       title={item.title}
                       link={item.link}
                       navigate={navigate}
                      />
        })}
      </div>
    )
};

function Navbarhead({title, link, navigate}){

  const handleNavigate = (title) => {
    if (title == "Home"){
      navigate(link)
    }else if (title == "About"){
      navigate(link)
    } else {
      navigate(link)
    }
  }

  return (
    <button onClick={handleNavigate}>{title}</button>
  )
}