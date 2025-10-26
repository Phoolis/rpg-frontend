import { Container, Heading, Section, Separator, Text } from "@radix-ui/themes";

export default function Splash() {
  return (
    <Container size="3">
      <Section pt="4">
        <Heading size="9">RPG Session Notes App</Heading>
      </Section>
      <Separator orientation="horizontal" size="4" />
      <Section>
        <Text wrap="pretty" size="3">
          The RPG Session Notes App is a web application designed for tabletop
          RPG enthusiasts to keep track of their campaign sessions. It allows
          Game Masters (GMs) and players to collaborate, share notes, and stay
          organized throughout their campaign. The app enables GMs to create
          campaigns, invite players via shareable links, and add detailed notes
          for each session. Players can also contribute notes and comments,
          while keeping their in-campaign identities separate from their global
          user profiles.
        </Text>
        <ul>
          <li>
            <strong>Campaign Management:</strong> GMs can create campaigns,
            invite players with shareable links, and manage ongoing sessions.
          </li>
          <li>
            <strong>Session Notes:</strong> Both GMs and players can add notes
            for each session, with the option for comments and discussions
            around specific notes.
          </li>
          <li>
            <strong>Distinct Roles:</strong> GM and player notes are visually
            distinct, making it easy to differentiate contributions.
          </li>
          <li>
            <strong>Custom Screen Names:</strong> Users can set different
            display names for each campaign, preserving immersion across
            multiple campaigns.
          </li>
          <li>
            <strong>Custom Screen Names:</strong> Users can set different
            display names for each campaign, preserving immersion across
            multiple campaigns.
          </li>
          <li>
            <strong>Invitation Links:</strong> GMs can invite players with
            expiration-based links that can be shared with groups for easy
            onboarding.
          </li>
        </ul>
      </Section>
    </Container>
  );
}
