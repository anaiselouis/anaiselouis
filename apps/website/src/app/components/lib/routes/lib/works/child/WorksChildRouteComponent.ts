/*
 * Copyright © 2026 Gavin William Sawyer. All rights reserved.
 */

import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { type Route, type Routes }                    from "@angular/router";
import { RouteComponent }                             from "../../../../route/RouteComponent";
import { WORKS_ROUTES, worksRoutesProvider }          from "../children";


@Component(
  {
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers:       [ worksRoutesProvider ],
    template:        "",

    standalone: true,
  },
)
export class WorksChildRouteComponent
  extends RouteComponent {

  protected readonly worksRoute: Route & { "path": "works" } | undefined = this.projectRoutes.find<Route & { "path": "works" }>((route: Route): route is Route & { "path": "works" } => route.path === "works");
  protected readonly worksRoutes: Routes                                 = inject<Routes>(WORKS_ROUTES);
  protected readonly worksRouteTitle: string | undefined                 = this.worksRoute?.data?.["title"];


}
