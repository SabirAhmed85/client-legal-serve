import React from 'react';
import styled from 'styled-components';

// 'styled-components' specific to Card.tsx component
const StyledCard = styled.div.attrs((props: {dark?: boolean, horizontal?: boolean}) => ({
  dark: props.dark,
  horizontal: props.horizontal,
  className: ''
}))`
  background-color: #fcfcfc;
  border: 1px solid #eae8e8;
  height: 100%;

  ${(props) => props.dark && `
    background-color: ${props.theme.colors.colorHeroIsDark};
    color: #ccc;
    .title,
    .subtitle {
        color: #fff;
    }
    a {
        color: #fff;
        &:hover {
            color: #61dafb;
        }
    }
  `}

  ${(props) => props.horizontal && `
    flex-direction: row !important;
    display: flex;
    flex-basis: 50ex;
    flex-grow: 0;
    flex-shrink: 1;
    box-shadow: none;
    .card-image {
        align-self: center;
        width: 40%;
    }
    .image {
        min-height: 100%;
    }
    .card-content {
        flex: 1;
        padding: 2em;
        font-size: 0.8em;
    }
    ul {
        list-style: none;
        margin: 0;
    }
    .is-divider {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
  `}
`;

const StyledCardImage = styled.div.attrs(() => ({
  className: 'card-image'
}))`
  
`;

const StyledCardContent = styled.div.attrs(() => ({
  className: 'card-content'
}))`
  background-color: transparent;
  padding: 1.5rem;
`;

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
