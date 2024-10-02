import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Empowering&nbsp;</h1>
          <h1 className={title()}>
            minds with&nbsp;
          </h1>
          <h1 className={title({ color: "violet" })}>Endless&nbsp;</h1>
          <br />
          <h1 className={title()}>
          knowledge, one resource at a time.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
          "Where Curiosity Meets Opportunity"
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Get Started
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full"})}
            // color="red"
            href={siteConfig.links.github}
          >
            {/* <GithubIcon size={20} /> */}
            {/* GitHub */}
            Browse Library
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}



"Empowering minds with Endless knowledge, one resource at a time."