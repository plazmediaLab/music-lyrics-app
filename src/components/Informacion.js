import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const TitleHead = styled.div`
  padding: 1.6rem 1.5rem;
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

  @media (max-width: 589px){
    text-align: center;
  }
`;
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(10rem, 15rem);
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  ul{
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
  }

  img{
    width: 100%;
    object-fit: cover;
    padding: .5rem;
    border-radius: .3em;
  }

  @media (max-width: 589px){
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;
const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
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
        alt="Artist Thump"
      />

      <InfoGrid>
        <ul className="txt-brand-2">
          <li>Formed in: <span className="txt-brand">{intFormedYear}</span></li>
          <li>Menbers: <span className="txt-brand">{intMenbers}</span></li>
          <li>From: <span className="txt-brand">{strCountry}, {strCountryCode}</span></li>
          <li>Gender: <span className="txt-brand">{strGenre}, {strStyle}</span></li>
        </ul>
        <img 
          src={strArtistLogo}
          alt="Artist Logo"
        />
      </InfoGrid>
      <hr />
      <h3 className="titulo">Biography</h3>

      <p className="txt-a-j vm-4">
        {strBiographyEN 
          ? strBiographyEN 
          : strBiographyES
        }
      </p>
      
      <hr />

      <SocialMedia>
        <a href={strFacebook} className="btn-face">
          <i className="a-facebook af-x2"></i>
        </a>
        <a href={strTwitter} className="btn-twit">
          <i className="a-twitter af-x2"></i>
        </a>
        <a href={strWebsite} className="btn-web">
          <i className="a-link-strong af-x2"></i>
        </a>
      </SocialMedia>

    </Fragment>
  );
};


Informacion.propTypes = {
  artista: PropTypes.object.isRequired,
}


export default Informacion