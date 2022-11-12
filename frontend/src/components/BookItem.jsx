
import PropTypes from 'prop-types';
import style from './BookItem.module.css';

function BookItem(props) {
    return <div  className={style.item_wrapper}>
        <div className={style.item}>
             <h4 className={style.name}>Name : {props.name}</h4>
            <p>Author : {props.author}</p>
            <p>series: {props.series}</p>
        </div>
       
    </div>;
}

BookItem.propTypes = {
    index : PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    series: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,

}

export default BookItem;