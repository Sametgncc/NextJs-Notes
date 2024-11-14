import { wait } from "@/helpers/functions";
import React from "react";
import PageHeader from "@/components/page-header";

const Page = async () => {
  await wait(3000);

  return (
    <div>
      <PageHeader title="About Us" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde saepe
        eius soluta molestias iure molestiae, nihil cupiditate vel velit
        deserunt iusto dolores praesentium earum consequatur dolor corrupti.
        Blanditiis, accusamus illum? Eveniet impedit, sint, cum et voluptates
        quam deserunt vel soluta, eligendi accusamus doloremque. Voluptates,
        consectetur repudiandae! Hic numquam dolore vero sunt, minus aliquam.
        Reiciendis doloribus iusto ipsum quo magnam blanditiis. Ab sit corrupti
        et similique. Facilis incidunt quas molestiae quod? Pariatur labore
        itaque dolores consequatur nemo cum fugiat non, deleniti suscipit ipsa
        cupiditate doloribus iste reprehenderit quasi id est exercitationem.
        Eaque pariatur quia odio dolores dolor laboriosam voluptas non
        asperiores nostrum. Quidem, eius nulla quasi sint velit consequuntur
        dignissimos mollitia, cum praesentium, impedit obcaecati! Voluptate odio
        in provident odit fugiat!
      </p>
    </div>
  );
};

export default Page;
