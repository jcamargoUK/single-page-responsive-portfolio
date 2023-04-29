import Image from 'next/image'
import logo from '../public/assets/logo.svg'

const Header = () => {
  return (
    <>
    <Image
          src={logo}
          alt='logo'
          width={50}
          height={50}
        />
    </>
  )
}
export default Header