import '../../App.css';

/**
 * Компоненет формирования погоды
 */

export interface WeatherTewmperature{
    averageTemperature: string,
    morningTemperature: string,
    daytimeTemperature: string,
}

export const WeatherWidget: React.FC<WeatherTewmperature> = (props) => {
    const {averageTemperature, morningTemperature, daytimeTemperature} = props
  return (
    <div>
      <div className="Weather-widget-degrees">
        <span className="Weather-widget-degrees__average">
          {averageTemperature}&deg;
        </span>
        <div className="Weather-widget-degrees__in-detail">
          <span className="Weather-widget-degrees__in-detail-morning">
            Утром {morningTemperature},
          </span>
          <span className="Weather-widget-degrees__in-detail-afternoon">
            днём {daytimeTemperature}
          </span>
        </div>
      </div>
    </div>
  );
}