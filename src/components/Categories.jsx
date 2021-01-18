import React, {useState} from 'react'



/*export class Categories extends React.Component {
    state = {
        activeItem: 3
    }
    onSelectItem = (index) => {
        this.setState({
            activeItem: index
        })
    }

    render() {
        const {items, onClickItem } = this.props
        return (
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {items.map((name, index) => (
                        <li
                            className={this.state.activeItem === index ? 'active' : ''}
                            onClick={() => this.onSelectItem(index)}
                            key={`${name}_${index}`}>{name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}*/


export const Categories = ({items}) => {

    const [activeItem, setActiveItem] = useState(null)
    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li>Все</li>
                {items.map((name, index) => (
                    <li className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}>{name}</li>
                ))}
            </ul>
        </div>
    )
}
