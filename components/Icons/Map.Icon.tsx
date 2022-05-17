import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { iconStyles } from '../../styles';

interface IProps {
  color: string;
  size?: number;
}

function MapIcon({ color, size = iconStyles.normal }: IProps) {
  return (
    <Svg width={size} height={size} viewBox='0 0 55 54'>
      <Path
        d='M28 23C31.3077 23 34 20.3077 34 17C34 13.6923 31.3077 11 28 11C24.6923 11 22 13.6923 22 17C22 20.3077 24.6914 23 28 23ZM28 12.7143C30.3631 12.7143 32.2857 14.6369 32.2857 17C32.2857 19.3631 30.3631 21.2857 28 21.2857C25.6369 21.2857 23.7143 19.3631 23.7143 17C23.7143 14.6369 25.6369 12.7143 28 12.7143Z'
        fill={color}
      />
      <Path
        d='M45.1524 33.2997H38.7135L41.4532 29.3396C46.6279 22.4356 45.8789 11.0873 39.8518 5.05538C36.5959 1.79553 32.2656 0 27.6592 0C23.0536 0 18.7233 1.79553 15.4665 5.05538C9.43941 11.0873 8.69041 22.4365 13.8444 29.3126L16.603 33.3006H9.84763L0 54H55L45.1524 33.2997ZM15.3038 28.2596C10.629 22.0198 11.2989 11.7713 16.7388 6.32711C19.6557 3.40746 23.5347 1.79913 27.66 1.79913C31.7854 1.79913 35.6635 3.40746 38.5813 6.32711C44.0212 11.7713 44.6911 22.0207 39.9957 28.2866L27.6592 46.1186L18.7907 33.2997L15.3038 28.2596ZM10.9842 35.0997H17.8484L27.6592 49.2812L37.469 35.0997H44.0158L52.1515 52.2H2.84855L10.9842 35.0997Z'
        fill={color}
      />
    </Svg>
  );
}

export default MapIcon;
