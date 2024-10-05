import '../../App.css';

/**
 * Компоненет отрисовки блока c рекламой
 */

interface AdsProps {
    title: String;
    description: String;
    children: React.ReactNode
}

export const Ads: React.FC<AdsProps> = (props) => {
  const { title, description, children } = props;

return (
    <div className="Ads">
        {children}
    <h3 className="Ads-title">
        <a href="#" className="Ads-title__link">
          {title}
        </a>
    </h3>
        <p className="Ads-description">
            {description}
        </p>
    </div>
  );
}
