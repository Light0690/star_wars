import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillBookmarkHeartFill } from 'react-icons/bs';

import styles from './Favorite.module.css';


const Favorite = () => {
    const [count, setCount] = useState();
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        setCount(length < 100 ? length : '...');
    })

    return (
        <div className={styles.container}>
            <Link to='/favorites'>
                <span className={styles.counter}>{count}</span>
                <BsFillBookmarkHeartFill className={styles.icon}/>
            </Link>
        </div>
    ) 
}

export default Favorite;
