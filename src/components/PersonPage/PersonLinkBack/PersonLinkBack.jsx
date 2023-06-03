import { useNavigate } from 'react-router-dom';

import { BsChevronLeft } from 'react-icons/bs';

import styles from './PersonLinkBack.module.css';


const PersonLinkBack = () => {
    const history = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        history(-1);
    }

    return (
        <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}
        >
            <BsChevronLeft className={styles.link__img}/>
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack;
