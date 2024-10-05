import { FC } from 'react';
import '../../App.css';

/**
 * Компоненет формирования поиска
 */

export interface SearchData {
    categoriesSearch: string[];
    searchBarLabel: string;
    searchBtnName: string;
    searchAdvice: string;
    searchExample: string;

}

export const SearchBlock: FC<SearchData> = (props) => {
    const {
        categoriesSearch,
        searchBarLabel,
        searchBtnName,
        searchAdvice,
        searchExample,
    } = props;

    return (
    <div className="Search">
      <nav className="Search-nav">
        <ul className="Search-nav-menu">
          {categoriesSearch.map((category, index) => {
            return (
              <li className="Search-nav-menu__item active" key={index}>
                <a href="#" className="Search-nav-menu__item-link">
                  {category}
                </a>
              </li>
            );
          })}
          <li className="Search-nav-menu__item">
            <a href="#" className="Search-nav-menu__item-link">
              ещё
            </a>
          </li>
        </ul>
      </nav>

      <form className="Search-bar">
        <label className="Search-bar-label" htmlFor="search-bar-input">
          {searchBarLabel}
        </label>
        <input className="Search-bar-input" id="search-bar-input" type="text" name="search-bar-input" required />
        <button className="Search-bar-button" type="submit">
          {searchBtnName}
        </button>
      </form>

      <p className="Search-advice">
        {searchAdvice}
        <span className="Search-advice__example">
          &nbsp;{searchExample}
        </span>
      </p>
    </div>
  );
}