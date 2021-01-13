import Link from 'next/link';

const Navbar = () => (
   <div className="container">
       <style global jsx>{`
             nav a {
                -webkit-transition: all 0.5s ease-out;
                -moz-transition: all 0.5s ease-out;
                -o-transition: all 0.5s ease-out;
                -ms-transition: all 0.5s ease-out;
                transition: all 0.5s ease-out;
            }
            nav {
                margin:auto; 
                background: grey; 
                display: flex ;
            }
            nav img {
                border-radius: 50%;
                padding:0 10px;
            }
            nav h1 {
                padding:50px 100px;
                font-size:38px;
                font-weight: 700;
            }
             
            nav a {
                display: grid;
                color: blueviolet;
                padding:75px 25px;
            }
            nav  a:hover {
                color: purple;
            }
        `}</style> 
        <nav>
        
            <Link href="/">Home</Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/projects">
                <a>Projects</a> 
            </Link>
            <Link href="/contact">
                <a>Contact</a>  
            </Link>
            <h1>SIPHOSETHU GAJANA</h1>
            <img src='./static/Profile.jpg' alt='profileImage'/> 
            
        </nav>
    </div>
)
export default Navbar;