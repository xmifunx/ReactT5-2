import { FC } from 'react';
import '../../App.css';

/**
 * Компоненет отрисовки блока обмена валют
 */

export interface exchRate {
    currency: string;
    rate: string;
  }

  export interface ExchangeRates {
    currencyRates: exchRate[];
}

export const ExchangeRatesBlock: FC<ExchangeRates> = (props) => {
    const {currencyRates} = props;
  return (
    <div className="Exchange-rates-container">
      <ul className="Exchange-rates">
        {currencyRates.map((item, index) => {
          return (
            <li className="Exchange-rates__item" key={index}>
              <a href="#" className="Exchange-rates__item-link">
                {item.currency}
              </a>
              <span className="Exchange-rates__item-rate">
                {item.rate}
              </span>
            </li>
          );
        })}
      </ul>
      <a href="#" className="Exchange-rates__more-rates">
        &#8230;
      </a>
    </div>
  );
}