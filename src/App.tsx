import './App.css';

/**
 * Импорт данных для наполнения.
 */

import { currencyRates } from "./components/Data/ratesCurrency";
import { newsData } from "./components/Data/news.tsx";
import { searchData } from "./components/Data/searchData.tsx";
import { broadcastTVData } from "./components/Data/broadcastTVData.tsx";
import { BroadcastTVProgramm } from './components/Data/broadcastTVProgramm.tsx';
import { bannerImg } from "./components/Data/searchImg.tsx";
import { favorites } from './components/Data/favorites.tsx';
import { germanyMap } from './components/Data/germanyMap.tsx';
import { temperature } from './components/Data/weather.tsx';
import { AdsImg } from './components/Data/adsImage.tsx';

/**
 * Импорт компонентов.
 */

import { NewsBlock } from "./components/News/News";
import { ExchangeRatesBlock } from "./components/ExchangeRates/ExchangeRates.tsx";
import { SearchBlock } from "./components/Search/Search.tsx";
import { Image } from "./components/Image/Image.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Main } from "./components/Main/Main.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Widget } from "./components/WIdget/Widget.tsx";
import { List } from "./components/List/List.tsx";
import { WeatherWidget } from './components/WeatherWidget/WeatherWidget.tsx';
import { Ads } from './components/Ads/Ads.tsx';

/**
 * App.
 */

function App() {
    return (
        <div>
            <Header>
                <div className="App-header__main">
                    <NewsBlock {...newsData} />
                       <ExchangeRatesBlock currencyRates={currencyRates} />
                </div>
                <Ads title='Работа над ошибками' description='Смотрите на Яндексе и запоминайте'>
                    <Image {...AdsImg}/>    
                </Ads>
            </Header>
            <Main>
                <SearchBlock {...searchData}/>
                <Image {...bannerImg}/>
            </Main>
            <Footer>
                <Widget title = "Погода">
                    <WeatherWidget {...temperature}/>
                </Widget>
                <Widget title = "Карта Германии">
                    <List items={germanyMap} />
                </Widget>
                <Widget title = "Эфир">
                    <List items={broadcastTVData} />
                </Widget>   
                <Widget title = "Посещаемое">
                    <List items={favorites} />
                </Widget>
                <Widget title = "Телепрограмма">
                    <List items={BroadcastTVProgramm} />
                </Widget>
            </Footer>
    </div>
  );
}

export default App;
