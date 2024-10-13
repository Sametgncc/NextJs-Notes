import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      About page
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link
          href={{
            pathname: "/products",
            query: {
              p: "John",
              page: 1,
              limit: 10,
              sort: "asc",
              order: "desc",
              status: "active",
              category: "laptop",
            },
          }}
        />
      </p>
    </div>
  );
};

export default Page;
