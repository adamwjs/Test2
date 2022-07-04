// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: marRSFqQwX6qmgsS5vTWj
// Component: 5Et19WMMuTo-Oh
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: marRSFqQwX6qmgsS5vTWj/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: 5Et19WMMuTo-Oh/css

import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: TpeTnbOsPUaKQ-/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  footerTop?: p.Flex<"div">;
  container?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  footerBottom?: p.Flex<"div">;
  container2?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign(
    {},

    props.args
  );
  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"footerTop"}
        data-plasmic-override={overrides.footerTop}
        className={classNames(projectcss.all, sty.footerTop)}
      >
        <div
          data-plasmic-name={"container"}
          data-plasmic-override={overrides.container}
          className={classNames(projectcss.all, sty.container)}
        >
          <div className={classNames(projectcss.all, sty.columns___9Ncgu)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__stt40)}
            >
              <Icon2Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xTweN
                )}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                }
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.column__nltX8)}>
              <h5
                className={classNames(
                  projectcss.all,
                  projectcss.h5,
                  projectcss.__wab_text,
                  sty.h5__cNDbN
                )}
              >
                {"Menu"}
              </h5>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__s56Bf
                )}
                component={Link}
                href={"/privacy-policy" as const}
                platform={"nextjs"}
              >
                {"Privacy Policy"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__mk9Og
                )}
                component={Link}
                href={"/terms-of-service" as const}
                platform={"nextjs"}
              >
                {"Terms of Service"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__iHbEg
                )}
                component={Link}
                href={"/pricing" as const}
                platform={"nextjs"}
              >
                {"Pricing "}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__pw2Fs
                )}
                component={Link}
                href={"/contact" as const}
                platform={"nextjs"}
              >
                {"Contact"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___4FaPg
                )}
                component={Link}
                href={"/blog" as const}
                platform={"nextjs"}
              >
                {"Blog"}
              </p.PlasmicLink>
            </div>

            <div className={classNames(projectcss.all, sty.column__aBjf)}>
              <h5
                className={classNames(
                  projectcss.all,
                  projectcss.h5,
                  projectcss.__wab_text,
                  sty.h5__a2CnQ
                )}
              >
                {"Gallery"}
              </h5>

              <div className={classNames(projectcss.all, sty.columns__maTXa)}>
                <div className={classNames(projectcss.all, sty.column__tsdl4)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__vjzWa)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/saa_s_website/images/blog01390X290Jpg2.jpeg",
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__zujm6)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__jlExb)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/saa_s_website/images/blog4390X290Jpg2.jpeg",
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__clemM)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__djwL)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/saa_s_website/images/blog2390X290Jpg2.jpeg",
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__w9HYr)}>
                <div className={classNames(projectcss.all, sty.column__vEnBh)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___7P1XP)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/saa_s_website/images/blog01390X290Jpg2.jpeg",
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__zg6Cq)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__im5Vk)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/saa_s_website/images/blog4390X290Jpg2.jpeg",
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__aseRf)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___0MXnN)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/saa_s_website/images/blog2390X290Jpg2.jpeg",
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-plasmic-name={"footerBottom"}
        data-plasmic-override={overrides.footerBottom}
        className={classNames(projectcss.all, sty.footerBottom)}
      >
        <div
          data-plasmic-name={"container2"}
          data-plasmic-override={overrides.container2}
          className={classNames(projectcss.all, sty.container2)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zmYgf
            )}
          >
            <React.Fragment>
              <React.Fragment>
                {
                  "© Company Name. All rights reserved. This site proudly built with "
                }
              </React.Fragment>
              {
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link__gA1Kj
                  )}
                  component={Link}
                  href={"https://www.plasmic.app/" as const}
                  platform={"nextjs"}
                >
                  {"Plasmic"}
                </p.PlasmicLink>
              }
              <React.Fragment>{"."}</React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "footerTop", "container", "svg", "footerBottom", "container2"],
  footerTop: ["footerTop", "container", "svg"],
  container: ["container", "svg"],
  svg: ["svg"],
  footerBottom: ["footerBottom", "container2"],
  container2: ["container2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  footerTop: "div";
  container: "div";
  svg: "svg";
  footerBottom: "div";
  container2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    footerTop: makeNodeComponent("footerTop"),
    container: makeNodeComponent("container"),
    svg: makeNodeComponent("svg"),
    footerBottom: makeNodeComponent("footerBottom"),
    container2: makeNodeComponent("container2"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
