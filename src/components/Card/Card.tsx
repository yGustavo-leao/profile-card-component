import { AvatarImg, BannerContainer, BannerImg, Container, ContentContainer, InfoCategory, InfoNumber, SocialMediaContainer, SocialMediaInfo, UserAge, UserDetails, UserLocation, UserName } from "./Card.styled"

export const Card = () => {
    return (
        <Container>
            <BannerContainer>
                <BannerImg src={`${process.env.PUBLIC_URL}/assets/images/bg-pattern-card.svg`} alt="Banner Image" />
                <AvatarImg src={`${process.env.PUBLIC_URL}/assets/images/image-victor.jpg`} />
            </BannerContainer>

            <ContentContainer>
                <UserDetails>
                    <UserName>Victor Crest <UserAge>26</UserAge></UserName>
                    <UserLocation>London</UserLocation>
                </UserDetails>

                <SocialMediaContainer>
                    <SocialMediaInfo>
                        <InfoNumber>80K</InfoNumber>
                        <InfoCategory>Followers</InfoCategory>
                    </SocialMediaInfo>

                    <SocialMediaInfo>
                        <InfoNumber>803K</InfoNumber>
                        <InfoCategory>Likes</InfoCategory>
                    </SocialMediaInfo>

                    <SocialMediaInfo>
                        <InfoNumber>1.4K</InfoNumber>
                        <InfoCategory>Photos</InfoCategory>
                    </SocialMediaInfo>
                </SocialMediaContainer>
            </ContentContainer>
        </Container>
    )
}