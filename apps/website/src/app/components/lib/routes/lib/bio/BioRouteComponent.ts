/*
 * Copyright © 2026 Anaïse Louis. All rights reserved.
 */

import { ChangeDetectionStrategy, Component }                                                                                        from "@angular/core";
import { FindRouteByPathPipe }                                                                                                       from "@bowstring/core";
import { HeaderComponent, HeadingGroupComponent, ImageComponent, InspectorComponent, RouteHeaderDirective, RouteInspectorDirective } from "@bowstring/surface";
import { RouteComponent }                                                                                                            from "../../../route/RouteComponent";


@Component(
  {
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:         [
      FindRouteByPathPipe,
      HeaderComponent,
      HeadingGroupComponent,
      ImageComponent,
      InspectorComponent,
      RouteHeaderDirective,
      RouteInspectorDirective,
    ],
    styleUrl:        "BioRouteComponent.sass",
    templateUrl:     "BioRouteComponent.html",

    standalone: true,
  },
)
export class BioRouteComponent
  extends RouteComponent {
}

export default BioRouteComponent;
