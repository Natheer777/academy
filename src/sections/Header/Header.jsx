import video from '../../assets/video/تحريك لوغو الأكاديمية_.mp4'
import './Header.css'
export default function Header() {
  return (
    <div>
      <video className='w-50 m-auto d-flex' src={video} autoPlay controls muted></video>
    </div>
  )
}
