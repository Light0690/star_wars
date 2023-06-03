import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setPersonToFavorite,removePersonFromFavorite } from '@store/actions';

import { AiFillStar } from 'react-icons/ai';

import styles from './PersonPhoto.module.css';


const PersonPhoto = ({
    personPhoto,
    personName,
    personId,
    personFavorite,
    setPersonFavorite
}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if(personFavorite){
            dispatch(removePersonFromFavorite(personId));
            setPersonFavorite(false);
        }else{
            dispatch(setPersonToFavorite({
                [personId] : {
                    name : personName,
                    img : personPhoto
                }
            }));
            setPersonFavorite(true);
        }
    }
    return (
        <>
            <div className={styles.container}>
                <img 
                    className={styles.photo}
                    src={personPhoto} 
                    alt={personName} 
                />
                <button className={styles.favorite}>
                    <AiFillStar 
                        onClick={dispatchFavoritePeople}
                        style={personFavorite ? {fill:'#ffc107'} : {fill : '#fff'}}
                    />
                </button>
            </div>

            
        </>
    )
}

PersonPhoto.propTypes = {
    personPhoto : PropTypes.string,
    personName : PropTypes.string,
    personId : PropTypes.string,
    personFavorite : PropTypes.bool,
    setPersonFavorite : PropTypes.func,
}

export default PersonPhoto;
