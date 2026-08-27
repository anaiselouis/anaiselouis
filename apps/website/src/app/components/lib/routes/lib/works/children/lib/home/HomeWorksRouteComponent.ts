/*
 * Copyright © 2026 Anaïse Louis. All rights reserved.
 */

import { ChangeDetectionStrategy, Component }     from "@angular/core";
import { GridContainerComponent, ImageComponent } from "@bowstring/surface";
import { WorksChildRouteComponent }               from "../../../child/WorksChildRouteComponent";


@Component(
  {
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:         [
      GridContainerComponent,
      ImageComponent,
    ],
    styleUrl:        "HomeWorksRouteComponent.sass",
    templateUrl:     "HomeWorksRouteComponent.html",

    standalone: true,
  },
)
export default class HomeWorksRouteComponent
  extends WorksChildRouteComponent {
};
