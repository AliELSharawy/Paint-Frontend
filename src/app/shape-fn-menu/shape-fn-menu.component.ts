import { Component, OnInit } from '@angular/core';
import {ShapeFnServiceService} from "../Services/shape-fn-service.service";
import {ColorService} from "../Services/color-service.service";
import {BackFrontLinkService} from "../back-front-link/back-front-link.service";

@Component({
  selector: 'app-shape-fn-menu',
  templateUrl: './shape-fn-menu.component.html',
  styleUrls: ['./shape-fn-menu.component.css']
})
export class ShapeFnMenuComponent implements OnInit {
  private shapeCoord : any;
  private backColour = "#000000";
  private shapeGot : any ;
  constructor(private serviceMenu : ShapeFnServiceService, private colorService : ColorService,
              private backFrontLinkService : BackFrontLinkService) {}

  ngOnInit(): void {
    this.colorService.color$.subscribe(
      color =>{
        this.backColour = color;
        console.log(this.backColour);
      }
    );
    this.serviceMenu.shape$.subscribe(
      shape =>{
        this.shapeGot = shape;
        console.log(this.shapeGot);
      }
    );
    this.serviceMenu.coord$.subscribe(
      coord =>{
        this.shapeCoord = coord;
        console.log((this.shapeCoord));
      }
    );
  }

  menuOver(key: string){
    let menuElem = document.getElementById(key);
    menuElem!.style.color = 'black';
  }
  menuleft(key : string){
    let menuElem = document.getElementById(key);
    menuElem!.style.color = 'white';
  }

  do(key : string){
    let menu = document.getElementById("shapeFn");
    menu!.style.display= 'none';
    let canvas = <HTMLCanvasElement> document.getElementById("canvasElement");
    let context = canvas.getContext('2d');
    this.serviceMenu.sendFn(key);

    if(key == 'fill'){
      this.backFrontLinkService.deleteShape(this.shapeCoord).subscribe(() => {
        console.log(this.shapeCoord);
        console.log(".............."+this.shapeGot.name)
      });

      context!.fillStyle = this.backColour;
      context!.strokeStyle = this.shapeGot.color;
      if(this.shapeGot.name == 'rectangle'){
        context!.fillRect(this.shapeGot.corner.x,this.shapeGot.corner.y, this.shapeGot.w, this.shapeGot.l);
        context!.strokeRect(this.shapeGot.corner.x,this.shapeGot.corner.y, this.shapeGot.w, this.shapeGot.l);
      }
      else if(this.shapeGot.name == 'circle'){
        context!.beginPath();
        context!.arc(this.shapeGot.center.x, this.shapeGot.center.y, this.shapeGot.r, 0, 2 * Math.PI);
        context!.fill();
        context!.closePath();
        context!.stroke();
      }
      else if(this.shapeGot.name == 'ellipse'){
        context!.ellipse(this.shapeGot.center.x, this.shapeGot.center.y, this.shapeGot.r1
          , this.shapeGot.r2, 0, 0, 2 * Math.PI);
        context!.fill();
        context!.stroke();
      }
      else if(this.shapeGot.name == 'triangle' || this.shapeGot.name == 'rightTri'){
        context!.beginPath();
        context!.moveTo(this.shapeGot.v1.x, this.shapeGot.v1.y);
        context!.lineTo(this.shapeGot.v2.x, this.shapeGot.v2.y);
        context!.lineTo(this.shapeGot.v3.x, this.shapeGot.v3.y);
        context!.closePath();
        context!.fill();
        context!.stroke();
      }

      this.shapeGot.backgroundColor = this.backColour;
      this.backFrontLinkService.addShape(this.shapeGot).subscribe(()=>{console.log("Done");});
    }
    else if(key == 'move'){
      ////////////////delete shape in BACK-END///////////////
      this.backFrontLinkService.deleteShape(this.shapeCoord).subscribe(() => {
        console.log(this.shapeCoord);
        console.log(".............."+this.shapeGot.name)
      });
    }
    else if(key == 'scale'){
      //////////delete shape in BACK-END////////////
      this.backFrontLinkService.deleteShape(this.shapeCoord).subscribe(() => {
        console.log(this.shapeCoord);
        console.log(".............."+this.shapeGot.name)
      });
    }
    else if(key == 'delete'){
      ///////////delete shape from BACK-END////////////////
      this.backFrontLinkService.deleteShape(this.shapeCoord).subscribe(() => {
        console.log(this.shapeCoord);
        console.log(".............."+this.shapeGot.name)
      });
    }
  }


}
