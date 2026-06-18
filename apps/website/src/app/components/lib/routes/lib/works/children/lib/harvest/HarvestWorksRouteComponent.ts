/*
 * Copyright © 2026 Anaïse Louis. All rights reserved.
 */

import { ChangeDetectionStrategy, Component }                                                                                                                                                                    from "@angular/core";
import { BoxComponent, DividerComponent, HeaderComponent, HeadingGroupComponent, ImageComponent, InspectorComponent, RouteInspectorDirective, ScrollStackComponent, ScrollStackItemDirective, SectionComponent } from "@bowstring/surface";
import { WorksChildRouteComponent }                                                                                                                                                                              from "../../../child/WorksChildRouteComponent";


@Component(
  {
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:         [
      BoxComponent,
      DividerComponent,
      HeaderComponent,
      HeadingGroupComponent,
      ImageComponent,
      InspectorComponent,
      RouteInspectorDirective,
      ScrollStackComponent,
      ScrollStackItemDirective,
      SectionComponent,
    ],
    styleUrl:        "HarvestWorksRouteComponent.sass",
    templateUrl:     "HarvestWorksRouteComponent.html",

    standalone: true,
  },
)
export class HarvestWorksRouteComponent
  extends WorksChildRouteComponent {
}
