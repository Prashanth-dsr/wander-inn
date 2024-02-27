"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button, Container, Navbar } from "react-bootstrap";
import ToggleExp from "./toggle-exp";

const NavigationHub = ({ session }: { session: Session | null }) => {
  return (
    <div>
      <Navbar className="bg-body-primary" expand="lg">
        <Container>
          <Link href="/">Wander-Inn</Link>
          <ToggleExp />
          <Link href="/host">Host your home</Link>
          {session ? (
            <Button onClick={() => signOut()} size="sm" variant="primary">
              Logout
            </Button>
          ) : (
            <Button onClick={() => signIn()} size="sm" variant="primary">
              Login
            </Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationHub;
