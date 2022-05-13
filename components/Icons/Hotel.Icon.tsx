import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { iconStyles } from '../../styles';

interface IProps {
  color: string;
}

function HotelIcon({ color }: IProps) {
  return (
    <Svg
      width={iconStyles.normal}
      height={iconStyles.normal}
      viewBox='0 0 48 52'
    >
      <Path
        d='M12.8595 31.3782H10.6445C9.20589 31.3782 8.03558 32.5261 8.03558 33.9369V38.295C8.03558 39.706 9.20599 40.8538 10.6445 40.8538H12.8595C14.2981 40.8538 15.4684 39.706 15.4684 38.295V33.9369C15.4684 32.5261 14.298 31.3782 12.8595 31.3782ZM13.945 38.295C13.945 38.8821 13.458 39.3597 12.8595 39.3597H10.6445C10.0459 39.3597 9.55902 38.882 9.55902 38.295V33.9369C9.55902 33.3498 10.046 32.8723 10.6445 32.8723H12.8595C13.4581 32.8723 13.945 33.3499 13.945 33.9369V38.295Z'
        fill={color}
      />
      <Path
        d='M15.4684 20.9251C15.4684 19.5141 14.298 18.3663 12.8595 18.3663H10.6445C9.20589 18.3663 8.03558 19.5142 8.03558 20.9251V25.2832C8.03558 26.6941 9.20599 27.8419 10.6445 27.8419H12.8595C14.2981 27.8419 15.4684 26.6941 15.4684 25.2832V20.9251ZM13.945 25.2833C13.945 25.8704 13.458 26.3479 12.8595 26.3479H10.6445C10.0459 26.3479 9.55902 25.8704 9.55902 25.2833V20.9252C9.55902 20.3381 10.046 19.8605 10.6445 19.8605H12.8595C13.4581 19.8605 13.945 20.3382 13.945 20.9252V25.2833Z'
        fill={color}
      />
      <Path
        d='M23.143 18.3663C21.7044 18.3663 20.5341 19.5142 20.5341 20.9251V25.2832C20.5341 26.6941 21.7045 27.8419 23.143 27.8419H25.358C26.7966 27.8419 27.9669 26.6941 27.9669 25.2832V20.9251C27.9669 19.5141 26.7965 18.3663 25.358 18.3663H23.143ZM26.4436 20.9251V25.2832C26.4436 25.8703 25.9566 26.3478 25.3581 26.3478H23.1431C22.5445 26.3478 22.0576 25.8703 22.0576 25.2832V20.9251C22.0576 20.338 22.5446 19.8604 23.1431 19.8604H25.3581C25.9566 19.8604 26.4436 20.3381 26.4436 20.9251Z'
        fill={color}
      />
      <Path
        d='M37.8565 31.3782H35.6415C34.2029 31.3782 33.0326 32.5261 33.0326 33.9369V38.295C33.0326 39.706 34.203 40.8538 35.6415 40.8538H37.8565C39.2951 40.8538 40.4654 39.706 40.4654 38.295V33.9369C40.4655 32.5261 39.2951 31.3782 37.8565 31.3782ZM38.9421 38.295C38.9421 38.8821 38.4551 39.3597 37.8566 39.3597H35.6416C35.043 39.3597 34.5561 38.882 34.5561 38.295V33.9369C34.5561 33.3498 35.0431 32.8723 35.6416 32.8723H37.8566C38.4552 32.8723 38.9421 33.3499 38.9421 33.9369V38.295Z'
        fill={color}
      />
      <Path
        d='M40.4656 20.9251C40.4656 19.5141 39.2952 18.3663 37.8566 18.3663H35.6417C34.203 18.3663 33.0327 19.5142 33.0327 20.9251V25.2832C33.0327 26.6941 34.2031 27.8419 35.6417 27.8419H37.8566C39.2953 27.8419 40.4656 26.6941 40.4656 25.2832V20.9251ZM38.9421 25.2833C38.9421 25.8704 38.4551 26.3479 37.8566 26.3479H35.6417C35.043 26.3479 34.5562 25.8704 34.5562 25.2833V20.9252C34.5562 20.3381 35.0431 19.8605 35.6417 19.8605H37.8566C38.4552 19.8605 38.9421 20.3382 38.9421 20.9252V25.2833Z'
        fill={color}
      />
      <Path
        d='M37.6677 9.39687C37.2841 9.39896 36.8033 9.40086 36.4114 9.40145V4.48444C36.4114 4.07185 36.0703 3.73737 35.6497 3.73737C35.229 3.73737 34.8879 4.07185 34.8879 4.48444V10.1438C34.8879 10.5076 35.1551 10.8186 35.5207 10.8802C35.6836 10.9075 37.336 10.8928 37.6762 10.8909C38.0969 10.8886 38.436 10.5523 38.4337 10.1397C38.4313 9.72718 38.0871 9.39099 37.6677 9.39687V9.39687Z'
        fill={color}
      />
      <Path
        d='M14.8255 3.73737C14.4048 3.73737 14.0638 4.07185 14.0638 4.48444V6.47234H11.5906V4.48444C11.5906 4.07185 11.2496 3.73737 10.8289 3.73737C10.4082 3.73737 10.0672 4.07185 10.0672 4.48444V10.1486C10.0672 10.5613 10.4082 10.8957 10.8289 10.8957C11.2496 10.8957 11.5906 10.5613 11.5906 10.1486V7.96658H14.0638V10.1487C14.0638 10.5614 14.4048 10.8958 14.8255 10.8958C15.2462 10.8958 15.5872 10.5614 15.5872 10.1487V4.48444C15.5872 4.07185 15.2462 3.73737 14.8255 3.73737V3.73737Z'
        fill={color}
      />
      <Path
        d='M32.9305 5.2833C33.3512 5.2833 33.6923 4.94881 33.6923 4.53622C33.6923 4.12354 33.3512 3.78915 32.9305 3.78915H30.5193C30.0987 3.78915 29.7576 4.12354 29.7576 4.53622V10.1487C29.7576 10.5614 30.0987 10.8958 30.5193 10.8958H32.9305C33.3512 10.8958 33.6923 10.5614 33.6923 10.1487C33.6923 9.73613 33.3512 9.40165 32.9305 9.40165H31.2811V8.08949H32.7528C33.1735 8.08949 33.5145 7.755 33.5145 7.34242C33.5145 6.92984 33.1735 6.59535 32.7528 6.59535H31.2811V5.2833H32.9305Z'
        fill={color}
      />
      <Path
        d='M27.8725 3.73737H24.683C24.2624 3.73737 23.9213 4.07185 23.9213 4.48444C23.9213 4.89702 24.2624 5.23151 24.683 5.23151H25.5097V10.1486C25.5097 10.5613 25.8507 10.8957 26.2714 10.8957C26.6921 10.8957 27.0331 10.5613 27.0331 10.1486V5.23151H27.8725C28.2932 5.23151 28.6342 4.89702 28.6342 4.48444C28.6342 4.07185 28.2932 3.73737 27.8725 3.73737V3.73737Z'
        fill={color}
      />
      <Path
        d='M20.1149 3.73737C18.1027 3.73737 16.4656 5.34297 16.4656 7.31663C16.4656 9.29019 18.1027 10.8958 20.1149 10.8958C22.1272 10.8958 23.7643 9.29019 23.7643 7.31663C23.7643 5.34307 22.1272 3.73737 20.1149 3.73737V3.73737ZM20.1149 9.40165C18.9427 9.40165 17.989 8.46632 17.989 7.31663C17.989 6.16694 18.9427 5.23151 20.1149 5.23151C21.2872 5.23151 22.2408 6.16684 22.2408 7.31663C22.2408 8.46632 21.2872 9.40165 20.1149 9.40165Z'
        fill={color}
      />
      <Path
        d='M37.1478 0.500061H11.3532C8.66503 0.500061 6.47818 2.64495 6.47818 5.28131V13.5306C4.73791 14.6099 3.57898 16.5129 3.57898 18.6774V33.9026C3.57898 34.3152 3.92003 34.6496 4.3407 34.6496C4.76137 34.6496 5.10242 34.3152 5.10242 33.9026V18.6775C5.10242 16.1364 7.21603 14.085 9.78506 14.085H38.7161C41.296 14.085 43.3987 16.1462 43.3987 18.6775V23.2576C43.3987 23.6702 43.7397 24.0047 44.1604 24.0047C44.5811 24.0047 44.9221 23.6702 44.9221 23.2576V18.6775C44.9221 16.513 43.7632 14.61 42.0229 13.5307V5.28131C42.0228 2.64495 39.8359 0.500061 37.1478 0.500061V0.500061ZM9.78496 12.5907C9.20057 12.5907 8.58439 12.6771 8.00152 12.8477V5.28131C8.00152 3.46882 9.50505 1.9942 11.3531 1.9942H37.1477C38.9958 1.9942 40.4993 3.46882 40.4993 5.28131V12.8477C39.9123 12.6759 39.2977 12.5907 38.7159 12.5907H9.78496Z'
        fill={color}
      />
      <Path
        d='M3.57889 43.5502C1.99116 44.0227 0.832031 45.4712 0.832031 47.1807V49.0599C0.832031 50.4054 1.9482 51.5 3.32011 51.5H45.1809C46.5528 51.5 47.669 50.4053 47.669 49.0599V47.1807C47.669 45.4712 46.5099 44.0227 44.9221 43.5502V26.2459C44.9221 25.8333 44.5811 25.4988 44.1604 25.4988C43.7398 25.4988 43.3987 25.8333 43.3987 26.2459V43.3871H30.0995V34.6194C30.0995 32.8322 28.617 31.3781 26.7947 31.3781H21.7064C19.884 31.3781 18.4015 32.8322 18.4015 34.6194V43.3871H5.10233V36.891C5.10233 36.4784 4.76128 36.1439 4.34061 36.1439C3.91994 36.1439 3.57889 36.4784 3.57889 36.891V43.5502ZM46.1455 47.1807V49.0599C46.1455 49.5815 45.7127 50.0059 45.1808 50.0059H3.32011C2.78823 50.0059 2.35547 49.5815 2.35547 49.0599V47.1807C2.35547 46.0032 3.26263 45.0303 4.42734 44.8973H4.42775C4.52312 44.8865 4.61219 44.8812 4.70004 44.8812H43.801C43.8887 44.8812 43.9778 44.8864 44.0733 44.8973H44.074C45.2385 45.0305 46.1455 46.0034 46.1455 47.1807V47.1807ZM19.925 34.6195C19.925 33.6561 20.7242 32.8723 21.7064 32.8723H26.7948C27.777 32.8723 28.5762 33.6561 28.5762 34.6195V43.3872H19.925V34.6195Z'
        fill={color}
      />
    </Svg>
  );
}

export default HotelIcon;
