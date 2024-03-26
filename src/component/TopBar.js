import React,{useState} from 'react'
import './TextView.css';
import LoginModal from './LoginModal';
export default function TopBar({setReff}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div style={{textAlign:"end",marginTop:"3px",marginRight:"35px" }}>

<button class="button-3" role="button" onClick={openModal}>Upload code</button>
<LoginModal isOpen={isModalOpen} onClose={closeModal} setReff={setReff} />
    </div>
  )
}
