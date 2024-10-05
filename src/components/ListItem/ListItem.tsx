import { FC } from "react";
import { nanoid } from 'nanoid'
import '../../App.css';

/**
 * Компоненет формирования одной записи в листе
 */

export interface IListItem {
    time?: string;
    terms?: string;
    definition?: string;
    name?: string;
    link: string;
    source?: string;
};

export interface IListItemProps {
    item: IListItem
}

export const ListItem: FC<IListItemProps> = (props) => {
    const {time, terms, definition, name, link, source} = props.item;
    
return (
    <li className="Widget-list__item" key={nanoid()}>
        <span className="Widget-list__item-time">
            {time ? `${time}\u00A0\u00A0` : ''}
        </span>
        {
            definition != undefined && 
            <a className="Widget-list__item-name" href ={link}>
                <b>{terms}</b> &ndash; {definition}
            </a>
        }
        {
            name != undefined &&
            <a className="Widget-list__item-name" href ={link}>
                {name}
            </a>
        }
        <span className="Widget-list__item-source">
            {source ? `\u00A0\u00A0${source}` : ''}
        </span>
    </li>);
    }