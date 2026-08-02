/*
 * Copyright © 2026 Anaïse Louis. All rights reserved.
 */

import { ChangeDetectionStrategy, Component, inject }                                                                                                                                                                                              from "@angular/core";
import { ReactiveFormsModule }                                                                                                                                                                                                                     from "@angular/forms";
import { CONFIG_LIB, type ConfigLib }                                                                                                                                                                                                              from "@bowstring/config";
import { AsideComponent, BoxComponent, CaptionComponent, HeadingGroupComponent, ImageComponent, InspectorComponent, LinkComponent, RouteAsideDirective, RouteInspectorDirective, ScrollStackComponent, ScrollStackItemDirective, SymbolComponent } from "@bowstring/surface";
import { RouteComponent }                                                                                                                                                                                                                          from "../../../route/RouteComponent";


@Component(
  {
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:         [
      AsideComponent,
      BoxComponent,
      CaptionComponent,
      HeadingGroupComponent,
      ImageComponent,
      InspectorComponent,
      LinkComponent,
      ReactiveFormsModule,
      RouteAsideDirective,
      RouteInspectorDirective,
      ScrollStackComponent,
      ScrollStackItemDirective,
      SymbolComponent,
    ],
    styleUrl:        "HomeRouteComponent.sass",
    templateUrl:     "HomeRouteComponent.html",

    standalone: true,
  },
)
export class HomeRouteComponent
  extends RouteComponent {

  protected readonly configLib: ConfigLib = inject<ConfigLib>(CONFIG_LIB);

}

export default HomeRouteComponent;
