// import { Container } from '@/layouts/container';
import React from "react";
// import { ContentWrapper } from "@/layouts/content-wrapper";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Container } from "../layouts/container";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container title="Home Page | Project Init">
      <ContentWrapper>
        <Heading>Home</Heading>
      </ContentWrapper>
    </Container>
  );
}
