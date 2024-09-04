import '../styles/Content.css'
import image1 from '../assets/razer1.jpg'
import image2 from '../assets/senuas.jpg'
import image3 from '../assets/webcam.jpg'

function Content() {
    return (
        <>
       <div className="gambar">
        <img src={image1} alt="" />
        <h2>NEW RAZER BLADE 18</h2>
        <h3>NEW 4K 200HZ MODEL AVAILABLE</h3>
       
        </div>
        
        <div className="gambar1">
         <img src={image2} alt="" />
        <h2>SENUA'SAGA CONTINUES</h2>
        <h3>GET GAMEPASS WITH ELIGIBLE</h3>
        
        </div>

        <div className="gambar2">
        <img src={image3} alt="" />
        <h2>RAZER KIYO PRO ULTRA</h2>
        <h3>THE LARGEST SENSOR EVER IN WEB CAM</h3>
        
        </div>
        

</>        
    )
}
export default Content;