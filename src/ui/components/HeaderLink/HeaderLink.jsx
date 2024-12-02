import styles from './HeaderLink.module.css'

function HeaderLink({children, link}) {
  return (
    <a href={link} className={`text text_type_xs text_color_primary ${styles.link}`}>
      {children}
    </a>
   );
}

export default HeaderLink;
