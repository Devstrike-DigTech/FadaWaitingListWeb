// import "../App.css";
import Header from './component/Header';
import New from './component/New';
import Fonts from "./component/Fonts"
import Slick from "./component/Slick";
export default function App() {
  return (
 
  <>
     <Fonts />
  <Header/>
  <section>

  <div className='flex overflow-hidden'>
<div className='md:w-3/4 w-[100%]'>
  <div>
  <div className=''>
<Slick/>
</div>
<div>
 
</div>
  </div>
</div>
<div className='md:w-1/4 md:flex hidden bg-[#E6C7A4] '>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi illum ab doloribus nemo aut possimus ipsa eum qui maiores, animi, fugiat quod aperiam vitae ratione dignissimos placeat tempore enim?</div></div>
  </div>
  </section>
  </>

  )
};