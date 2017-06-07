import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  //elements:["","","","",""]
  elements:string[] = ["氏名","相手"];
  anys:string[] =["","","",""];
  safeMsg:SafeHtml;
  templates:number = 0;
  mymame:string = "あなたの名前";
  yourname:string = "相手の名前";
  when:string = "日時";
  where:string = "場所";
  mail:string = "<h1>ww</br>ww</h1>";


  //message:string = "";
  constructor(public navCtrl: NavController,private sanitizer:DomSanitizer) {
    //message = meets.message;
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.mail);
  }

  public select(s_number:number){
    var tmp_message:message = new message("orgorg","avgrhqaf",[0]);
    //message.selectTeplate(number)
    tmp_message.selectTeplate(s_number);
    this.elements = tmp_message.elements;
    this.mail = tmp_message.getMessage();
    this.safeMsg = this.sanitizer.bypassSecurityTrustHtml(this.mail);
  }
}

class message{
  elements:string[] = ["氏名","相手","場所","日時"];
  names:string[] = ["名刺交換後","アポを取る","打ち合わせ後のお礼","日時変更","担当に聞いてみます。"]
  na_ele = [[]] = [[0,1],[0,1,2,3],[0,1],[0,1,2,3],[0,1]];

  mails:any[] = ['{{anys[0]}}です。<p bind-href=anys[0]></p>さまと{{where}}にてご縁をいただきまして、大変光栄です。是非{{when}}などで、またお話をお聞かせ頂きたいと存じます。まだ、学部生という身分で、至らない点も多々あるかと存じますが、今後ともどうぞよろしくお願い致します。',""];

  //static templates:string[] = ["氏名","相手","場所","日時"];
  constructor(public name:string,public mail:string, public templates:number[]){
  }
  public selectTeplate(s_number:number){
    this.name = this.names[s_number];
    this.templates = this.na_ele[s_number];
    this.mail = this.mails[0];

  }
  public getName():string{
    return this.name;
  }
  public getMessage():string{
    return this.mail;
  }
  public getTemplate():number[]{
    return this.templates;
  }
}

// class meets implements message{
//   constructor(public name:string,public message:string,public templates:number[]){
//     this.name = "aaaa";
//     this.message = "fuck";
//     this.templates = [0,1];
//   }
// }
