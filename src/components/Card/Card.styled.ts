import styled from "styled-components";

export const Container = styled.div`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
    text-align: center;
    border-radius: 20px;
    overflow: hidden;
    background-color: white;
`

export const BannerContainer = styled.div`
    position: relative;
    display: flex;
`

export const BannerImg = styled.img`
`

export const AvatarImg = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: -50px;
    border-radius: 50%;
    outline: 5px solid white;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserDetails = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
`

export const UserName = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    column-gap: .5rem;
`

export const UserAge = styled.span`
    font-weight: 400;
`

export const UserLocation = styled.span`
    color: #969696;
`
export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #969696;
    padding: 2rem;
`

export const SocialMediaInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .4rem;
`

export const InfoNumber = styled.span`
    font-weight: 900;
    color: #2d3248;
`

export const InfoCategory = styled.span`
    color: #969696;
`