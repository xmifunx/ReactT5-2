import { FC } from "react"
import { IListItem, ListItem } from "../ListItem/ListItem"
import { nanoid } from 'nanoid'
import '../../App.css';

/**
 * Компоненет формирования листа ссылок
 */

export interface IListProps {
    items: IListItem[]
}

export const List: FC<IListProps> = (props) => {
    const { items } = props
    return (
        <ul className="Widget">
            {items.map(item => <ListItem key={nanoid()} item={item}></ListItem>)}
        </ul>
    )
    
}