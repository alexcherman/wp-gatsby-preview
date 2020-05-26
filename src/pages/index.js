import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";

const IndexPage = ({data}) => {
  const {pageMeta} = data.wordPress.page
    
  if(!pageMeta) return <h1>Loading...</h1>;
  
  return (
    <View background={pageMeta.hero.background}>
      <div>
        <H1>{pageMeta.hero.title}</H1>
        <P>{pageMeta.hero.subtitle}</P>
      </div>
      <IMG src={pageMeta.hero.heroImage.sourceUrl} alt={pageMeta.hero.heroImage.altText} />
    </View>
  )
}

export default IndexPage

export const query = graphql`
  {
    wordPress {
      page(id: "cG9zdDo2") {
        id
        pageMeta {
          hero {
            background
            subtitle
            title
            heroImage {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`

const View = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};
`;

const IMG = styled.img`
  display: block;
  margin-left: 145px;
`;


const H1 = styled.h1`
  max-width: 500px;
  margin: 0 0 24px;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;
`;

const P = styled.p`
  margin: 0;
  max-width: 500px;
  font-size: 24px;
  line-height: 150%;
  color: #FFFFFF;
`;

