import React from "react";

interface Props {
  isDashboard: boolean;
}

export default function LoadingScreen(props: Props) {
  const { isDashboard } = props;

  return <h1>Loading...</h1>;
}
