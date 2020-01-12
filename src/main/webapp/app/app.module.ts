import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HouseGatewaySharedModule } from 'app/shared/shared.module';
import { HouseGatewayCoreModule } from 'app/core/core.module';
import { HouseGatewayAppRoutingModule } from './app-routing.module';
import { HouseGatewayHomeModule } from './home/home.module';
import { HouseGatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HouseGatewaySharedModule,
    HouseGatewayCoreModule,
    HouseGatewayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HouseGatewayEntityModule,
    HouseGatewayAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class HouseGatewayAppModule {}
