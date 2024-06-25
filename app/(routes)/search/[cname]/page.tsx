import React from "react";
import { Client } from "./Client";

interface IParams {
  cname: string;
}

async function SearchPage({ params }: { params: IParams }) {
  return <Client  />;
}

export default SearchPage;
