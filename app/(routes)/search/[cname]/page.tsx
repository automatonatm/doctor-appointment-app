import React from "react";
import { ClientPage } from "./Client";

interface IParams {
  cname: string;
}

async function SearchPage({ params }: { params: IParams }) {

  return <ClientPage cname={params.cname} />;
}

export default SearchPage;
