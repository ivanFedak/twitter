import { Component } from 'react';
import './post-list-item.sass'

class postListItem extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {text,like,star,onChangeLike,onChangeStar,onRemoveItem} = this.props;
        let clazz = 'item';
        if(like){clazz += ' like'}
        if(star){clazz += ' star'}

        return(
            <li className={clazz}>
                <div className="item__text" onClick={onChangeLike}>{text}</div>
                <div className="item__options">
                    <button onClick={onChangeStar} className='item__btn item__btn_star'><i className="fa fa-star"></i></button>
                    <button onClick={onRemoveItem} className='item__btn item__btn_trash'><i className="fa fa-trash"></i></button>
                    <i className="fa fa-heart item__heart"></i>
                </div>
            </li>
        )
    }
}

export default postListItem;