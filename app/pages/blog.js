import React from "react";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Container } from "../layouts/container";
import { Heading } from "@chakra-ui/react";

export default function Blog({ posts }) {
  return (
    <Container title="Blog | Project Init">
      <ContentWrapper>
        <Heading as="h2" variant="h2" textAlign="center">
          Blog
        </Heading>
      </ContentWrapper>
    </Container>
  );
}
