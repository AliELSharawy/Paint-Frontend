import { Component, OnInit } from '@angular/core';
import {BackFrontLinkService} from "../back-front-link/back-front-link.service";
import {SettingsMenuServiceService} from "../Services/settings-menu-service.service";


@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent implements OnInit {
  private shapes: any;
  constructor(private backFrontLinkService : BackFrontLinkService, private settingsMenuServiceService: SettingsMenuServiceService) { }

  ngOnInit(): void {
  }

  saveCheck=false;
  select(key : string){
    let currentButton= document.getElementById(key);
    //console.log(currentButton!.style.background);
    currentButton!.style.background='grey';
  }
  unselect(key : string){
    let currentButton= document.getElementById(key);
    currentButton!.style.background='white';
  }

  getOption(option : string){
    if(option == 'saveAs' || (option == 'save' && !this.saveCheck)){
      option = 'saveAs';
      let selectMenu = <HTMLElement>document.getElementById("selectMenu");
      selectMenu!.style.visibility='visible';
    }
    else
      //request
      //console.log(option);
      this.menuReq(option);
  }
  EndSave(saveType : string) {
    let selectMenu = <HTMLElement>document.getElementById("selectMenu");
    selectMenu!.style.visibility = 'hidden';
    if (saveType != 'cancel') {
      //request
      //console.log(saveType);
      this.backFrontLinkService.saveAs(saveType);
      this.saveCheck = true;
    }
  }
  menuReq(option:string){
    if(option == 'undo') this.backFrontLinkService.undo().subscribe(
      () => {
        this.backFrontLinkService.getShapes().subscribe( shapes => {
            this.settingsMenuServiceService.sendActionToCanvas('settings');
            this.settingsMenuServiceService.sendShapesToCanvas(shapes);
          }
        );
      }
    );
    else if(option == 'redo') this.backFrontLinkService.redo().subscribe(
      ()=>{
        this.backFrontLinkService.getShapes().subscribe( shapes => {
            this.settingsMenuServiceService.sendActionToCanvas('settings');
            this.settingsMenuServiceService.sendShapesToCanvas(shapes);
          }
        );
      }
    );
    else if(option == 'open') this.backFrontLinkService.open().subscribe(
      ()=>{
        console.log("open sent");
        this.backFrontLinkService.getShapes().subscribe( shapes => {
            this.settingsMenuServiceService.sendActionToCanvas('settings');
            this.settingsMenuServiceService.sendShapesToCanvas(shapes);
          }
        );
      }
    );
    else this.backFrontLinkService.save().subscribe(
        ()=>{console.log("save sent")}
      );
  }


}
