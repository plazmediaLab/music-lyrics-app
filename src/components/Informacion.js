import React, { Fragment } from 'react';
import styled from '@emotion/styled';


const TitleHead = styled.div`
  padding: 1.5rem 1rem;
  background-color: var(--skyblue-dark-2);

  > *{
    margin: 0;
    font-size: 1.7rem;
    color: var(--White);
    font-weight: 300;

    span{
      font-weight: 600;
    }
  }

  @media (max-widht: 589px){
    text-align: center;
  }
`;



const Informacion = ({artista}) => {

  if(Object.keys(artista).length === 0) return null;

  const {
    intFormedYear,
    intMenbers,
    strArtist,
    strArtistLogo,
    strArtistThumb,
    strBiographyEN,
    strBiographyES,
    strCountry,
    strCountryCode,
    strFacebook,
    strGenre,
    strStyle,
    strTwitter,
    strWebsite,
  } = artista

  return (
    <Fragment>
      <TitleHead>
        <h2>Information about <span>{strArtist}</span></h2>
      </TitleHead>
      <img 
        src={strArtistThumb}
      />
    </Fragment>
  );
};

export default Informacion