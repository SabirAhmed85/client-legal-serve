import React from 'react';

import { StyledCard, StyledCardImage, StyledCardContent } from './card.style';

export const Card = (props) => {
  return (
    <StyledCard
      dark={props.dark}
      horizontal={props.horizontal}>
      {(() => {
        if (props.image) { 
          return (
            <CardImage
              src={props.image.src}
              alt={props.image.alt} />
          );
        }
      })()}
      <CardContent>
        <CardTitle
          size={props.title.size}
          content={props.title.content}
          className={props.title.className}/>
        <div className='content'>
          {props.children}
        </div>
      </CardContent>
    </StyledCard>
  );
};

export const CardImage = (props) => {
  return (
    <StyledCardImage>
      <figure className='image is4by3'>
        <img src={props.src} alt={props.alt}/>
      </figure>
    </StyledCardImage>
  );
};

export const CardContent = (props) => {
  return (
    <StyledCardContent>
      {props.children}
    </StyledCardContent>
  );
};

type CardTitleProps = {
  size?: string;
  className?: string;
  content: string;
};
export const CardTitle = (props: CardTitleProps) => {
  return (props.size === 'large') ?
    (
      <h3 className={props.className}>{props.content}</h3>
    ) :
    (
      <h4 className={props.className}>{props.content}</h4>
    )
};
CardTitle.defaultProps = {
  size: 'large',
  content: null,
  className: ''
};

export default Card;
