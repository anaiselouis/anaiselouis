/*
 * Copyright © 2026 Gavin William Sawyer. All rights reserved.
 */

import { inject, InjectionToken, type Type, type ValueProvider }                    from "@angular/core";
import { type ActivatedRouteSnapshot, type DefaultExport, type Route, type Routes } from "@angular/router";
import { CONFIG_LIB, type ConfigLib }                                               from "@bowstring/config";
import projectRoutes                                                                from "../../../projectRoutes";


const route: Route | undefined        = projectRoutes.find<Route & { "path": "works" }>((route: Route): route is Route & { "path": "works" } => route.path === "works");
const description: string | undefined = route?.data?.["description"];
const title: string | undefined       = route?.data?.["title"];

if (!description)
  throw new Error("Missing route description");

if (!title)
  throw new Error("Missing route title");

const worksRoutes: Routes = [
  {
    data:          {
      description,
      title,
    },
    loadComponent: (): Promise<DefaultExport<Type<unknown>>> => import("./home/HomeWorksRouteComponent"),
    path:          "",
    pathMatch:     "full",
    title:         ({ data: { title: routeTitle } }: ActivatedRouteSnapshot): string => `${ routeTitle } - ${ inject<ConfigLib>(CONFIG_LIB).brand.title }`,
  },
  {
    data:          {
      description: $localize`:@@apps--Website--Components--Routes--Works-Harvest--Meta--Description:...`,
      title:       $localize`:@@apps--Website--Components--Routes--Works-Harvest--Meta--Title:Harvest`,
    },
    loadComponent: (): Promise<DefaultExport<Type<unknown>>> => import("./harvest/HarvestWorksRouteComponent"),
    path:          "harvest",
    title:         ({ data: { title: routeTitle } }: ActivatedRouteSnapshot): string => `${ routeTitle } - ${ inject<ConfigLib>(CONFIG_LIB).brand.title } ${ title }`,
  },
];

export const WORKS_ROUTES: InjectionToken<Routes> = new InjectionToken<Routes>("WORKS_ROUTES");
export const worksRoutesProvider: ValueProvider   = {
  provide:  WORKS_ROUTES,
  useValue: worksRoutes,
};

export default worksRoutes;
