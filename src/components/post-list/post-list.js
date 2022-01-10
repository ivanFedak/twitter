import { Component } from 'react';
import './post-list.sass'
import PostListItem from '../post-list-item/post-list-item';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {data, onChangeLike, onChangeStar, onRemoveItem} = this.props;
        const elem = data.map(item=>{
            // return <PostListItem text={item.text} like={item.like} star={item.star} key={item.id}/>
            return <PostListItem {...item} key={item.id} 
                                onChangeLike={() => onChangeLike(item.id)} 
                                onChangeStar={() => onChangeStar(item.id)}
                                onRemoveItem={() => onRemoveItem(item.id)}
                    />
        })
        return(
            <div className='postList'>
                <div className='postList__container _container'>
                    <ul className='postList__body'>
                        {elem}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostList;