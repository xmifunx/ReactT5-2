import { FC } from 'react';
import '../../App.css';

/**
 * Компоненет отрисовки Новостей
 */

export interface category {
  name: string;
  link: string;
}

export interface newsState {
  name: string;
  link: string;
}


export interface News {
    categoriesNews: category[];
    namesNews: newsState[];
}

export const NewsBlock: FC<News> = (props) => {
    const {categoriesNews} = props;
    const {namesNews} = props;
  return (
    <div className="News">
      <nav className="News-nav">
        <ul className="News-nav-menu">
          {categoriesNews.map((category, index) => {
            return (
              <li
                className={`News-nav-menu__item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <a href={category.link} className="News-nav-menu__item-link">
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
        <span className="News-current-datetime">05 октября, суббота 12:00</span>
      </nav>
      <div className="News-content">
        <ul>
          {namesNews.map((nameNews, index) => {
            return (
              
              <li className="News-content__item" key={index}>
                <a href={nameNews.link} className="News-content__link">
                  {nameNews.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}