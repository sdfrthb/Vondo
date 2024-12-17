import { useMediaQuery } from 'react-responsive';
import styles from './HeaderLink.module.css'

function HeaderLink({children, link}) {
  const isDesktop = useMediaQuery({ minWidth: 1440 })
  return (
    <a href={link} className={`text ${isDesktop ? 'text_type_xs' : 'text_type_accent_l'}  text_color_primary ${styles.link}`}>
      {children}
    </a>
   );
}

export default HeaderLink;
