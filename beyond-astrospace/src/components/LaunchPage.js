import React from "react";
import { useParams } from "react-router";
import NavBar from "./NavBar";

function LaunchPage() {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <div>New Launch Page (ID: {id})</div>
    </>
  );
}

export default LaunchPage;
