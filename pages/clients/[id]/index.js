import React from "react";
import { useRouter } from "next/router";

export default function ClientProject() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>Client Project</h1>
    </div>
  );
}
