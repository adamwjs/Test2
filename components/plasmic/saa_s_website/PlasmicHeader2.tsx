// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: marRSFqQwX6qmgsS5vTWj
// Component: wB5nAuN7DIRh10
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
import Button from "../../Button"; // plasmic-import: yWLjFzWxUuek1/component

import { useScreenVariants as useScreenVariantsboX3RcDgA0A6O } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BoX-3rcDgA0a6O/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: marRSFqQwX6qmgsS5vTWj/projectcss
import sty from "./PlasmicHeader2.module.css"; // plasmic-import: wB5nAuN7DIRh10/css

import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: TpeTnbOsPUaKQ-/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: MGKawn7J-fOBDJ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ki9OdJ413nFLyV/icon

export type PlasmicHeader2__VariantMembers = {};

export type PlasmicHeader2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader2__VariantsArgs;
export const PlasmicHeader2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader2__ArgsType = {};
type ArgPropType = keyof PlasmicHeader2__ArgsType;
export const PlasmicHeader2__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader2__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultHeader2Props {
  className?: string;
}

function PlasmicHeader2__RenderFunc(props: {
  variants: PlasmicHeader2__VariantsArgs;
  args: PlasmicHeader2__ArgsType;
  overrides: PlasmicHeader2__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign(
    {},

    props.args
  );
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsboX3RcDgA0A6O()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___12V74)}
      >
        {true ? (
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__iDHzi
            )}
            component={Link}
            href={"/" as const}
            platform={"nextjs"}
          >
            <Icon2Icon
              className={classNames(projectcss.all, sty.svg__v6Jy)}
              role={"img"}
            />
          </p.PlasmicLink>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vUwC1)}
        >
          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__dtFqn
            )}
            component={Link}
            href={"/about-us" as const}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___52DyP)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pPaY
              )}
            >
              {"About Us"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__dmT8)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__lXrH)}
            component={Link}
            href={"/features" as const}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__tiWg)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__q1OrX
              )}
            >
              {"Features"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__d0Hi3)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___0QraG
            )}
            component={Link}
            href={"/pricing" as const}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__obMfa)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jp2Bb
              )}
            >
              {"Pricing "}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___2H3L)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__zsu)}
            component={Link}
            href={"/contact" as const}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__f7Po)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__u0MT
              )}
            >
              {"Contact"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__mBpr4)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__pe38E
            )}
            component={Link}
            href={"/blog" as const}
            platform={"nextjs"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__l1Bxk)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pbmVg
              )}
            >
              {"Blog"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__vdlXk)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            shape={"rounded" as const}
          >
            {"Get started"}
          </Button>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader2__VariantsArgs;
    args?: PlasmicHeader2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader2__ArgProps,
      internalVariantPropNames: PlasmicHeader2__VariantProps
    });

    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */
