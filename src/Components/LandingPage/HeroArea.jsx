
import { Link } from 'react-router-dom'
import logo from '../../assets/files/logo-light 1.svg'
import '../../css/HeroArea.css'
import heroBg from '../../assets/files/hero.png'
const HeroArea = () => {
  return (
    <>
    <main>
      <div className="all-header">
<div className='text-header'>
  
<h1>
  Discover books through people{''}<span className="highlight-wrap">who know you.</span>
</h1>
    

    <div className="subtext">
    <p> Track what you've read, discover what's next, and see what your friends are loving — all in one beautiful place. Bookshelf is free, ad-free, and built for readers.</p> 
    </div>

    <div className="cta-btn">
     <Link to='/auth/users/sign_up'> <button  className='free-btn'>Sign up for free</button> </Link> 
     <Link to='/collections'><button className='browse-btn'>Browse books</button></Link>  
    </div>

   <div className='info-strip'>
       <img src= {logo} alt="" />
   
    <p> is a community-funded, open-source project.</p> 
    <Link className='link' to = '/about'>Learn more →</Link>
    </div>
    
    </div>

<div className='img-div'>
<img className='hero-bg' src= {heroBg} alt="" />
</div>
   
      </div>
 
    
    </main>
   
  
  
    </>
  )
}

export default HeroArea