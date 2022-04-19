import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  -moz-border-radius: 0px;
  -webkit-border-radius: 10px 10px 0px 0px;
  border-radius: 10px 10px 0px 0px; 
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding-top: 3rem;
padding-bottom: 3rem;
place-items: center;
column-gap: 1rem;
row-gap: 3rem;
@media screen and (max-width: 640px) {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 1.5rem;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: var(--card-header-color);
  font-size: 1.8rem;
  transition: .8s ease;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: var(--primary1);
  padding: .5rem 0;
  margin-top: 1rem;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  transition: .8s ease;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: var(--primary1);
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  margin-top: 2rem;
  transition: .8s ease;
  @media screen and (max-width: 640px) {
    padding:.3rem
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.6rem;
  padding:1rem 1.5rem;
  background: #008b6f;
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    background: #11c49d;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`
export const Tag = styled.li`
  color: var(--primary1);
  font-size: 1.5rem;
  transition: .8s ease;
`